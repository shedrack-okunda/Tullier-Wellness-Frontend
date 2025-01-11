import { useSelector } from "react-redux";
import {
  SelectIsAuthChecked,
  SelectLoggedInUser,
} from "./features/auth/AuthSlice";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Protected } from "./features/auth/components/Protected";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import {
  ForgotPasswordPage,
  LoginPage,
  OtpVerificationPage,
  ResetPasswordPage,
  SignupPage,
} from "./pages";
import { Logout } from "./features/auth/components/Logout";
import { useAuthCheck } from "./hooks/useAuth/useAuthCheck";
import { Layout } from "./layout/Layout";
import { Home } from "./features/components/Home";
import { AboutUs } from "./features/components/About";
import { Events } from "./features/components/Events";
import { Resources } from "./features/components/Resources";
import { Programs } from "./features/components/Programs";
import { Services } from "./features/components/Services";
import { ContactForm } from "./features/components/ContactForm";
import { NewsLetter } from "./features/components/NewsLetter";
import { Testimonials } from "./features/components/Testimonials";
import { Profile } from "./features/components/User";

export default function App() {
  const isAuthChecked = useSelector(SelectIsAuthChecked);
  const loggedInUser = useSelector(SelectLoggedInUser);

  useAuthCheck();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<OtpVerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/reset-password/:userId/:passwordResetToken"
          element={<ResetPasswordPage />}
        />
        <Route
          exact
          path="/logout"
          element={
            <Protected>
              <Logout />
            </Protected>
          }
        />

        {loggedInUser?.isAdmin ? (
          <>
            <Route
              path="/"
              element={
                <Protected>
                  <HomePage />
                </Protected>
              }
            />
          </>
        ) : (
          <>
            <Route
              element={
                <Protected>
                  <Layout />
                </Protected>
              }
            >
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/letter" element={<NewsLetter />} />
              <Route path="/testimonies" element={<Testimonials />} />
            </Route>
            <Route
              path="/"
              element={
                <Protected>
                  <HomePage />
                </Protected>
              }
            />
          </>
        )}

        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return isAuthChecked ? <RouterProvider router={routes} /> : "";
}
