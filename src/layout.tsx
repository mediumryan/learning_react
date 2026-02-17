// react
import { useEffect } from "react";
// react-router
import { useLocation } from "react-router";
// shadcn
import { Toaster } from "~/components/ui/sonner";
import { useAtomValue } from "jotai";
import { BackgroundSpinner } from "./components/Common/BackgroundSpinner";
import { isLoadingAtom } from "./data/commonData";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  const loading = useAtomValue(isLoadingAtom);

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
