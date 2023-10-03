import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm.jsx";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;

  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <>
      <Logo />
      <Heading as="h1">Log in to acc</Heading>
      <LoginForm />
    </>
  );
}

export default Login;
