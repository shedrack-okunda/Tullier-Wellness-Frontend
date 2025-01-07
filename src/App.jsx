import { ForgotPassword } from "./features/auth/components/ForgotPassword";
import { Login } from "./features/auth/components/Login";
import { OtpVerification } from "./features/auth/components/OtpVerification";
import { ResetPassword } from "./features/auth/components/ResetPassword";
import { Signup } from "./features/auth/components/Signup";
import { Footer } from "./features/footer/Footer";
import { HomePage, SignupPage } from "./pages";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <HomePage />
      <NotFoundPage />
      <ForgotPassword />
      <Login />
      <OtpVerification />
      <ResetPassword />
      <Signup />
    </>
  );
}

export default App;
