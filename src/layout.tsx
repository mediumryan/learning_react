// react
import { useEffect } from "react";
// react-router
import { useLocation } from "react-router";
// shadcn
import { Toaster } from "~/components/ui/sonner";
import { useAtomValue } from "jotai";
import { authLoadingAtom } from "~/data/userData";
import { BackgroundSpinner } from "./components/Common/BackgroundSpinner";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  const loading = useAtomValue(authLoadingAtom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return <BackgroundSpinner />;
  }

  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
}
