import { ForgotPassword } from "./features/auth/components/ForgotPassword";
import { Login } from "./features/auth/components/Login";
import { OtpVerification } from "./features/auth/components/OtpVerification";
import { ResetPassword } from "./features/auth/components/ResetPassword";
import { Signup } from "./features/auth/components/Signup";

function App() {
  return (
    <>
      <ForgotPassword />
      <Login />
      <OtpVerification />
      <ResetPassword />
      <Signup />
    </>
  );
}

export default App;
