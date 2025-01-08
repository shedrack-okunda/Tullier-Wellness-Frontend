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
