import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Logout from "../features/authentication/Logout";
//  background-color: var(--color-grey-0);
// padding: 3.2rem 1.4rem;
// border-right: 1px solid var(--color-grey-100);
// grid-row: 1 /-1;
const StyledSidebar = styled.aside`
  background-color: grey;
  padding: 3.2rem 1.4rem;
  border-right: 1px solid red;
  grid-row: 1 /-1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Logout />
    </StyledSidebar>
  );
}

export default Sidebar;
