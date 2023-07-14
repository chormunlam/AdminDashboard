import styled from "styled-components";
//import { Button } from "./Button";
import Button from "./ui/Button";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyleApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <H1>hi</H1>
        <Button onClick={() => alert("check in")}>Check In</Button>
        <Button onClick={() => alert("check out")}>Check Out</Button>

        <Input type="number" placehold er="number fild"></Input>
      </StyleApp>
    </>
  );
}
