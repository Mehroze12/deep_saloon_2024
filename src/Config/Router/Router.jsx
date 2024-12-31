import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Screens/About_Us";
import Articles from "../../Screens/Articles";
import TermsConditions from "../../Screens/TermsConditions";
import Hiring from "../../Screens/Hiring";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import Testimonials from "../../Screens/Testimonials";  
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register"; 
import Index from "../../Screens/Checkout";
import Successfull from "../../Screens/Auth/successfull";
import SetPassword from "../../Screens/Auth/setPassword";
import ForgotPassword from "../../Screens/Auth/ForgotPassword";
import Email from "../../Screens/Auth/email";
import Otp from "../../Screens/Auth/otp";

export const router = createBrowserRouter([
  
  // Auth Pages Start

  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/register", 
    element: <Register />,
  },

  {
    path: "/success", 
    element: <Successfull />,
  },
  {
    path: "/setPassword", 
    element: <SetPassword />,
  },
  {
    path: "/forgotPassword", 
    element: <ForgotPassword />,
  },
  {
    path: "/email", 
    element: <Email />,
  },
  {
    path: "/otp", 
    element: <Otp />,
  },



  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },

  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/term-condition",
    element: <TermsConditions />,
  },
  {
    path: "/hiring",
    element: <Hiring />,
  },
  {
    path: "/checkout/*",
    element: <Index />,
  },

  
  
]);
