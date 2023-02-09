import React from "react";
import { Route, Routes } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrivateLayout from "./Layout/PrivateLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Meetings from "./pages/meetings/Meetings";
import NotFound from "./pages/notfound/NotFound";
import Account from "./pages/account/Account";
import Reports from "./pages/reports/Reports";
import Details from "./pages/staff/StaffDetails";
import Staff from "./pages/staff/Staff";
import ReportPage from "./pages/reports/ReportPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<PrivateLayout />}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="staff">
            <Route index element={<Staff />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="meetings">
            <Route index element={<Meetings />} />
            <Route path="reports">
              <Route index element={<Reports />} />
              <Route path=":id" element={<ReportPage />} />
            </Route>
          </Route>
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
// <PrivateLayout>
// </PrivateLayout>
