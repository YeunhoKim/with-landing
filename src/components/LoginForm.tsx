import tw from "tailwind-styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

const Form = tw.form`
  flex
  flex-col
  bg-slate-400
  px-16
  pt-8
  rounded-2xl
  drop-shadow-lg
`;

const BtnContainer = tw.div`
  flex
  justify-between
  my-3
`;

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const account = data.email;
    const pwd = data.password;
    alert(`Your Account is ${account} and Password is ${pwd}`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center">Login please!</h1>
      <span>Email</span>
      <input
        {...register("email")}
        className="rounded-md px-2"
        type="email"
        placeholder="Write"
      />
      <span>Passowrd</span>
      <input
        {...register("password")}
        className="rounded-md px-2"
        type="password"
        placeholder="Write"
      />
      <BtnContainer>
        <button>Log in</button>
        <button>Create Account</button>
      </BtnContainer>
    </Form>
  );
}

export default LoginForm;
