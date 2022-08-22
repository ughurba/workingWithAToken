import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { List } from "./list";
import { Register } from "../Pages/register";
import { Login } from "../Pages/login";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={List.app.main} element={<AppLayout />}>
          <Route path={List.app.register} element={<Register />} />
          <Route path={List.app.login} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
