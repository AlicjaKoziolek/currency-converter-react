import { StyledFooter, StyledLink } from "./styled";

const Footer = () => (
  <StyledFooter>
    Kursy walut pobierane są z &nbsp;
    <StyledLink href="https://exchangerate.host">
      Europejskiego Banku Centralnego
    </StyledLink>
  </StyledFooter>
);

export default Footer;
