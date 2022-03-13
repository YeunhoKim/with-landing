import styled from "styled-components";
import tw from "tailwind-styled-components";

const Back = tw.div`
  bg-blue-900
  absolute top-1/4 left-1/4
  
`;

const Btn = tw.button`
  w-32
  h-12
  bg-sky-500
  rounded-3xl
  text-white
`;

const Title = tw.h1`
  text-white
  text-9xl
  
`;

const Describe = tw.h2`
  text-white
  text-6xl
  mb-6
`;

const MediaContainer = tw.div`
  absolute top-1/4 left-1/4
  -z-1

`;

const alertMsg = [
  "오마에와 모 신데이루!",
  "껍데기만 있습니다. 아직 기능은 없어요ㅜㅜ",
  "디자인은 송구합니다. 엉망진창이네요",
  "PS5 사고 싶은데 가격이 안 떨어지네요",
  "코린이 탈출하고 싶읍니다.",
];

const onClick = () => {
  const index = Math.floor(Math.random() * alertMsg.length);
  alert(alertMsg[index]);
};

const MsgContainer = () => {
  return (
    <Back>
      <Title>With</Title>
      <Describe>Solve Together!</Describe>
      <Btn onClick={onClick}>Download!</Btn>
      <MediaContainer></MediaContainer>
    </Back>
  );
};

export default MsgContainer;
