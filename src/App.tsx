import { useEffect } from "react";
import { initAuthListener } from "~/lib/auth";
import { useAtomValue, useSetAtom } from "jotai";
import { authLoadingAtom, currentUserAtom } from "~/data/userData";
import { HeaderMenu } from "~/components/Common/HeaderMenu";
import { CommonFooter } from "~/components/Common/CommonFooter";
import { Navigate, Route, Routes } from "react-router";
import Home from "~/routes/home";
import ContentsPage from "~/routes/contents";
import CommunityPage from "~/routes/community";
import SettingsPage from "~/routes/settings";
import UsersPage from "~/routes/users";
import Login from "~/routes/login";
import SignUp from "~/routes/signup";
import Layout from "~/layout";

function App() {
  const currentUser = useAtomValue(currentUserAtom);

  const setLoading = useSetAtom(authLoadingAtom);

  useEffect(() => {
    initAuthListener();

    setLoading(false);
  }, []);

  return (
    <Layout>
      <div className="relative h-full">
        {currentUser && <HeaderMenu />}
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route path="/contents/:id" element={<ContentsPage />} />
          <Route path="/community/*" element={<CommunityPage />} />
          <Route path="/users/*" element={<UsersPage />} />
          <Route
            path="/login/*"
            element={!currentUser ? <Login /> : <Navigate to="/" replace />}
          />
          <Route
            path="/signup/*"
            element={!currentUser ? <SignUp /> : <Navigate to="/" replace />}
          />
          <Route
            path="/settings/*"
            element={
              currentUser ? <SettingsPage /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
        <CommonFooter />
      </div>
    </Layout>
  );
}

export default App;
