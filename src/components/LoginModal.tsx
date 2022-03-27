import Popup from "reactjs-popup";
import tw from "tailwind-styled-components";
import LoginForm from "./LoginForm";

const Login = tw.button`
  text-3xl
  font-bold
  text-slate-200
  cursor-pointer
  hover:underline underline-offset-1 decoration-slate-200
`;

function LoginModal() {
  return (
    <Popup trigger={<Login>Login</Login>} modal>
      <LoginForm />
    </Popup>
  );
}

export default LoginModal;
