import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/Signup/Signup";
import Doctor from "./components/Doctor/Doctor";
import Appointment from "./components/Appointment/Appointment";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout/Logout";
import { AppProvider } from "./components/ContextProvider/ContextProvider";
import Gallary from "./components/Gallary/Gallary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="appointments" element={<Appointment />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="gallary" element={<Gallary />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="logout" element={<Logout />} />
    </>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
