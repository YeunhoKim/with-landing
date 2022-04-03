import tw from "tailwind-styled-components";
import NavContainer from "../src/components/NavContainer";

const H1 = tw.h1`
  text-3xl
  font-bold
`;

function About() {
  return (
    <div>
      <H1>This is with about</H1>
    </div>
  );
}

export default About;
