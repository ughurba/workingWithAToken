import { Header } from "../components/layout/header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
