import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import { useState } from "react";
import { StyledContainer, StyledMain } from "./styled";

export const currencies = [
  {
    shortName: "USD",
    name: "Dolar amerykański",
    rate: 4.68,
  },
  {
    shortName: "EUR",
    name: "Euro",
    rate: 4.75,
  },
];

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      enteredAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <StyledContainer>
      <StyledMain>
        <Clock />
        <Header title={"Kalkulator walutowy"} />
        <Form result={result} calculateResult={calculateResult} />
        <Footer footerContent={"Projekt autorstwa Alicji Koziołek"} />
      </StyledMain>
    </StyledContainer>
  );
}

export default App;
