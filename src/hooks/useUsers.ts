import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { User } from "~/data/userData";
import { updateUser, deleteUser } from "~/lib/firestore_utils";

export const useUsers = () => {
  const queryClient = useQueryClient();

  // user update mutation
  const updateUserMutation = useMutation({
    mutationFn: (user: User) => updateUser(user.uid, user),
    onMutate: async (user: User) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const previousUsers = queryClient.getQueryData<User[]>(["users"]);

      // Optimistic UI: 즉시 변경
      queryClient.setQueryData<User[]>(["users"], (old = []) =>
        old.map((u) => (u.uid === user.uid ? user : u)),
      );

      return { previousUsers };
    },
    onError: (_err, _user, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(["users"], context.previousUsers);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // 3️⃣ user delete mutation
  const deleteUserMutation = useMutation({
    mutationFn: (uid: string) => deleteUser(uid),
    onMutate: async (uid: string) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const previousUsers = queryClient.getQueryData<User[]>(["users"]);

      queryClient.setQueryData<User[]>(["users"], (old = []) =>
        old.filter((u) => u.uid !== uid),
      );

      return { previousUsers };
    },
    onError: (_err, _uid, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(["users"], context.previousUsers);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return { updateUserMutation, deleteUserMutation };
};
