import tw from "tailwind-styled-components";

const NavWith = tw.h1`
  text-3xl
  font-bold
  text-slate-200
`;

const NavMenuContainer = tw.div`
  flex
  justify-between
`;

const NavMenu = tw.h1`
  text-3xl
  font-bold
  mr-3
  text-slate-200
`;

const menus = [
  { id: 1, text: "Menu1" },
  { id: 2, text: "Menu2" },
  { id: 3, text: "Menu3" },
  { id: 4, text: "Menu4" },
];

function NavContainer() {
  return (
    <div className="flex justify-between bg-gray-700 p-3">
      <NavWith>With</NavWith>
      <NavMenuContainer>
        {menus.map((menu) => (
          <NavMenu key={menu.id}>{menu.text}</NavMenu>
        ))}
      </NavMenuContainer>
    </div>
  );
}

export default NavContainer;
