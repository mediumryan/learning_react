// react
import { useEffect } from "react";
// react-router
import { Navigate, Outlet, Route, Routes } from "react-router";
// routes
import Home from "~/routes/home";
import ContentsPage from "~/routes/contents";
import CommunityPage from "~/routes/community";
import SettingsPage from "~/routes/settings";
import UsersPage from "~/routes/users";
import Login from "~/routes/login";
import SignUp from "~/routes/signup";
// atoms
import { useAtomValue, useSetAtom } from "jotai";
import { authLoadingAtom, currentUserAtom } from "~/data/userData";
// components
import { HeaderMenu } from "~/components/Common/HeaderMenu";
import { CommonFooter } from "~/components/Common/CommonFooter";
import Layout from "~/layout";
import { BackgroundSpinner } from "./components/Common/BackgroundSpinner";
// firebase
import { initAuthListener } from "~/lib/auth";
import { languageAtom } from "./data/commonData";

function App() {
  const currentUser = useAtomValue(currentUserAtom);

  const isAuthLoading = useAtomValue(authLoadingAtom);

  const setLanguage = useSetAtom(languageAtom);

  useEffect(() => {
    initAuthListener();

    setLanguage(localStorage.getItem("i18nextLng") || "ja");
  }, []);

  if (isAuthLoading) {
    return <BackgroundSpinner />;
  }

  return (
    <Layout>
      <div className="relative h-full">
        {currentUser && <HeaderMenu />}
        <Routes>
          {/* 1. 인증이 반드시 필요한 경로들 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/contents/:id" element={<ContentsPage />} />
            <Route path="/community/*" element={<CommunityPage />} />
            <Route path="/users/*" element={<UsersPage />} />
            <Route path="/settings/*" element={<SettingsPage />} />
          </Route>

          {/* 2. 로그인 안 한 유저만 접근 가능한 경로들 */}
          <Route element={<PublicRoute />}>
            <Route path="/login/*" element={<Login />} />
            <Route path="/signup/*" element={<SignUp />} />
          </Route>

          {/* 3. 그 외 (404 등) 공통 경로 */}
        </Routes>
        <CommonFooter />
      </div>
    </Layout>
  );
}

// 인증이 된 유저만 접근 가능한 라우트
export const ProtectedRoute = () => {
  const currentUser = useAtomValue(currentUserAtom);

  // 유저 정보가 없으면 로그인 페이지로 리다이렉트
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // 유저 정보가 있으면 자식 라우트들을 렌더링
  return <Outlet />;
};

// 로그인을 이미 한 유저는 접근할 수 없는 라우트 (로그인, 회원가입 등)
export const PublicRoute = () => {
  const currentUser = useAtomValue(currentUserAtom);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default App;
