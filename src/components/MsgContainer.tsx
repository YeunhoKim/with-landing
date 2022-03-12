import styled from "styled-components";
import tw from "tailwind-styled-components";

const Back = tw.div`
  bg-blue-900
  h-screen
  max-h-screen
`;

const Btn = tw.button`
  w-32
  h-12
  bg-sky-500
  rounded-3xl
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
      <h1 style={{ color: "white" }}>With</h1>
      <h2 style={{ color: "white" }}>
        Instant Send Your Problem to solve Together!
      </h2>
      <Btn onClick={onClick}>Download!</Btn>
    </Back>
  );
};

export default MsgContainer;
