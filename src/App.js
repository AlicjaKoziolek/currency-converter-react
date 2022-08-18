import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import { useState } from "react";
import { currencies } from "./Form/index.js";

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
    <div className="container">
      <main className="calculator">
        <Clock />
        <Header title={"Kalkulator walutowy"} />
        <Form result={result} calculateResult={calculateResult} />
        <Footer footerContent={"Projekt autorstwa Alicji Koziołek"} />
      </main>
    </div>
  );
}

export default App;
