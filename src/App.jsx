import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem, 1.2rem;
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
