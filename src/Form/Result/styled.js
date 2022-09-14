import styled from "styled-components";

export const StyledSection = styled.section`
  color: ${({ theme }) => theme.color.luckyPoint};
  font-family: "Josefin Sans", sans-serif;
  font-weight: bolder;
  font-size: 20px;
  background-color: ${({ theme }) => theme.color.robinsEggBlue};
  border-radius: 10px;
  padding: 20px;
`;
