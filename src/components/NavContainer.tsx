import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import tw from "tailwind-styled-components";
import { loginState } from "../atom";
import LoginModal from "./LoginModal";

const NavWith = tw.h1`
  text-3xl
  font-bold
  text-slate-200
`;

const NavMenuContainer = tw.div`
  flex
  gap-4
  z-100
`;

const NavMenu = tw.a`
  text-3xl
  font-bold
  text-slate-200
  cursor-pointer
  hover:underline underline-offset-1 decoration-slate-200
`;

const LoginBtn = tw.button`
  text-3xl
  font-bold
  text-slate-200
  cursor-pointer
  hover:underline underline-offset-1 decoration-slate-200
`;

const menus = [
  {
    url: "/with",
    text: "With?",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/faq",
    text: "FAQ",
  },
];

function NavContainer() {  
  const [login, setLogin] = useRecoilState(loginState);

  return (
    <div className="fixed w-full flex justify-between bg-gray-700 p-3 z-10">
      <NavWith>With</NavWith>
      <NavMenuContainer>
        {menus.map((menu) => (
          <Link key={menu.text} href={menu.url} passHref>
            <NavMenu key={menu.text}>{menu.text}</NavMenu>
          </Link>
        ))}
        {login ? (
          <LoginBtn
            onClick={() => {
              setLogin((currentValue) => !currentValue);
            }}>
            Logout
          </LoginBtn>
        ) : (
          <LoginModal />
        )}
      </NavMenuContainer>
    </div>
  );
}

export default NavContainer;
