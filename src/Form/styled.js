import styled from "styled-components";
import loading from "./loader.gif";

export const StyledFieldset = styled.fieldset`
  color: ${({ theme }) => theme.color.black};
  border-radius: 10px;
  padding-left: 20px;
  font-size: 20px;
`;

export const StyledLegend = styled.legend`
  font-family: "Josefin Sans", sans-serif;
  font-weight: bolder;
  font-size: 30px;
  color: ${({ theme }) => theme.color.robinsEggBlue};
  text-shadow: 1px 2px black;
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.luckyPoint};
  background-color: ${({ theme }) => theme.color.robinsEggBlue};
  font-family: "Josefin Sans", sans-serif;
  font-weight: bolder;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 10px;
`;

export const StyledForm = styled.form`
  flex-basis: 500px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.color.mimosa};
  margin: 10px;
  border-radius: 10px;
`;

export const Loading = styled.div`
  padding: 20px;
  background-image: url("${loading}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20%;
  color: ${({ theme }) => theme.color.luckyPoint};
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

export const Failure = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.color.luckyPoint};
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.crimson};
`;
