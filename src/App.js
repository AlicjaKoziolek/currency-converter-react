import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import { useState } from "react";
import { currencies } from "./Form/index.js";

function App() {
  const [result, setResult] = useState(0);

  function calculateResult(currency, amount) {
    const rate = currencies.find(({ money }) => money === currency).rate;
    setResult({
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <body className="body">
      <main className="calculator">
        <Header title={"Kalkulator walutowy"} />
        <Form 
        result={result} 
        calculateResult={calculateResult}
         />
        <p className="calculator__paragraph">
          Kurs walut wynosi:{" "}
          <strong>
            {result && result.targetAmount.toFixed(2)}
            {result && result.currency}
          </strong>
        </p>
      </main>
      <Footer footerContent={"Projekt autorstwa Alicji Koziołek"} />
    </body>
  );
}

export default App;
