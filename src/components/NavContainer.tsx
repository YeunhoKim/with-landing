import tw from "tailwind-styled-components";
import LoginModal from "./LoginModal";

const NavWith = tw.h1`
  text-3xl
  font-bold
  text-slate-200
`;

const NavMenuContainer = tw.div`
  grid
  grid-cols-4 gap-4
  z-100
`;

const NavMenu = tw.button`
  text-3xl
  font-bold
  text-slate-200
  cursor-pointer
  hover:underline underline-offset-1 decoration-slate-200
`;

const menus = ["Menu1", "Menu2", "Menu3"];

function NavContainer() {
  return (
    <div className="fixed w-full flex justify-between bg-gray-700 p-3 z-10">
      <NavWith>With</NavWith>
      <NavMenuContainer>
        {menus.map((menu) => (
          <NavMenu key={menu}>{menu}</NavMenu>
        ))}
        <LoginModal />
      </NavMenuContainer>
    </div>
  );
}

export default NavContainer;
