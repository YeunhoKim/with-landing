import tw from "tailwind-styled-components";

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

const NavMenu = tw.h1`
  text-3xl
  font-bold
  text-slate-200
  cursor-pointer
  hover:underline underline-offset-1 decoration-slate-200
`;

const menus = ["Menu1", "Menu2", "Menu3", "Menu4"];

function NavContainer() {
  return (
    <div className="fixed w-full flex justify-between bg-gray-700 p-3 z-10">
      <NavWith>With</NavWith>
      <NavMenuContainer>
        {menus.map((menu) => (
          <NavMenu key={menu}>{menu}</NavMenu>
        ))}
      </NavMenuContainer>
    </div>
  );
}

export default NavContainer;
