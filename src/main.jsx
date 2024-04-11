import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import UserInfoPage from "./components/ui/UserInfoForm.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />

      <Route path="/appointment" element={<AppointmentPage />}>
        <Route index element={<UserInfoPage />} />
        <Route path="/appointment/:form" element={<UserInfoPage />} />
      </Route>
      <Route
        path="*"
        element={
          <p className="text-red-600 text-xl text-center mt-12 font-bold">
            404 NOT FOUND
          </p>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
