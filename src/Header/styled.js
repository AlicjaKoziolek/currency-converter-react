import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.robinsEggBlue};
  color: ${({ theme }) => theme.color.luckyPoint};
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  font-weight: bolder;
  text-shadow: 1px 2px 3px black;
  margin: 10px;
  margin-top: 0;
`;
