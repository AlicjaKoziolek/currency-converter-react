import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import { useState } from "react";
import { currencies } from "./Form/index.js";
import { Container, Main } from "./styled";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ money }) => money === currency).rate;

    setResult({
      enteredAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Main>
        <Clock />
        <Header title={"Kalkulator walutowy"} />
        <Form result={result} calculateResult={calculateResult} />
        <Footer footerContent={"Projekt autorstwa Alicji Koziołek"} />
      </Main>
    </Container>
  );
}

export default App;
