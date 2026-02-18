// react
import { useEffect } from "react";
// react-router
import { useLocation } from "react-router";
// atoms
import { useAtomValue } from "jotai";
import { isLoadingAtom } from "./data/commonData";
// shadcn
import { Toaster } from "~/components/ui/sonner";
// components
import { BackgroundSpinner } from "./components/Common/BackgroundSpinner";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const loading = useAtomValue(isLoadingAtom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      {children}
      {loading && <BackgroundSpinner />}
      <Toaster />
    </main>
  );
}
