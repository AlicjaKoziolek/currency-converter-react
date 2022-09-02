import { useState } from "react";
import { Result } from "./Result";
import { currencies } from "../App";
import { Button, Fieldset, Legend, Calculator, Main } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <Main>
      <Calculator onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Przelicz walutę:</Legend>
        <p>Pola oznaczone * są wymagane</p>
        <p>
          <label>
            <span>Podaj kwotę*: </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="PLN"
              type="number"
              min="1"
              required
            />
          </label>
        </p>
        <p>
          <label>
            <span>Przelicz na: </span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option 
                key={currency.shortName} 
                value={currency.shortName}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>

        <p>
          <Button>Przelicz!</Button>
        </p>
        <Result result={result} />
      </Fieldset>
    </Calculator>
    </Main>
  );
};

export default Form;
