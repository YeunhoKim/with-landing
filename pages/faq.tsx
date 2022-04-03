import tw from "tailwind-styled-components";
import NavContainer from "../src/components/NavContainer";

const H1 = tw.h1`
  text-3xl
  font-bold
`;

function FAQ() {
  return (
    <div>
      <H1>This is with FAQ</H1>
    </div>
  );
}

export default FAQ;
