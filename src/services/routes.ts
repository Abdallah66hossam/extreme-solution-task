import { lazy } from "react";

const importComponent = (path: string) => {
  return lazy(() => import(`../pages/${path}/index.tsx`));
};

export const routes = [
  {
    path: "/",
    component: importComponent("home"),
  },
  {
    path: "/favourites",
    component: importComponent("favourites"),
  },
];
