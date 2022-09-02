import styled from "styled-components";
import background from "./background.jpg";

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const Main = styled.main`
  background-color: cornsilk;
  margin: 10px;
  border-radius: 10px;
`;
