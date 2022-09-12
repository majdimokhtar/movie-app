import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import { HOME } from "constants/routes";
import { SHOW } from "constants/routes";
import { WISHLIST } from "constants/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("pages/Home"));
const ShowDetails = lazy(() => import("pages/Show"));
const WishList = lazy(() => import("pages/WishList/WishList"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <ToastContainer position="top-right" limit={1} />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SHOW} element={<ShowDetails />} />
        <Route path={WISHLIST} element={<WishList />} />
      </Routes>
    </Suspense>
  );
};

export const Loader = () => (
  <CenterContainer>
    <CircularProgress />
  </CenterContainer>
);

export default RouterConfig;
