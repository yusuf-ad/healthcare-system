// Libraries
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
const App = lazy(() => import("./App.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const UserInfoForm = lazy(() => import("./components/ui/UserInfoForm.jsx"));
const AppointmentPage = lazy(() => import("./pages/AppointmentPage.jsx"));
const AppointmentsPage = lazy(() => import("./pages/AppointmentsPage.jsx"));

import Loader from "./components/ui/Loader.jsx";

// Store
import { Provider } from "react-redux";
import { store } from "./store.js";

// Styles
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/healthcare-system/" element={<App />}>
      <Route index element={<HomePage />} />

      <Route
        path="/healthcare-system/appointments"
        element={<AppointmentsPage />}
      />

      <Route
        path="/healthcare-system/appointment"
        element={<AppointmentPage />}
      >
        <Route index element={<UserInfoForm />} />
        <Route
          path="/healthcare-system/appointment/:form"
          element={<UserInfoForm />}
        />
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
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Loader />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
