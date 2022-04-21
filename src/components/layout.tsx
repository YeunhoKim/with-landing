import React from "react";
import NavContainer from "./NavContainer";

type AppLayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <NavContainer />
      <div>{children}</div>
    </>
  );
}
