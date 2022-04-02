import { atom } from "recoil";

interface ILoginState {
  logIn: boolean;
}

export const loginState = atom<ILoginState>({
  key: "logIn",
  default: false,
});
