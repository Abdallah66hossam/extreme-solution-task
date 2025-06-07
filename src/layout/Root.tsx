import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import { Suspense } from "react";
import LoadingPage from "./LoadingPage.tsx";
import { routes } from "../services/routes";

const Root = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Nav />
        <main className="px-[4%] pb-10 pt-8 min-h-[60vh] bg-white dark:bg-gray-900">
          <Routes>
            {routes.map(({ path, component: Component }, i) => (
              <Route key={i} path={`/${path}`} element={<Component />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default Root;
