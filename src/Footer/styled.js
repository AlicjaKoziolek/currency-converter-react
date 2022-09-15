import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.color.luckyPoint};
  font-family: "Josefin Sans", sans-serif;
  padding: 10px;
  text-align: center;
  font-size: small;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.robinsEggBlue};
  font-size: small;
`;