import { useState } from "react";
import { Result } from "./Result";
import "./style.css";

export const currencies = [
  {
    money: "USD",
    name: "Dolar amerykański",
    rate: 4.68,
  },
  {
    money: "Eur",
    name: "Euro",
    rate: 4.75,
  },
];

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].money);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="calculator" onSubmit={onSubmit}>
      <fieldset className="calculator__fieldset">
        <legend className="calculator__legend">Przelicz walutę:</legend>
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
                key={currency.money} 
                value={currency.money}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>

        <p>
          <button className="calculator__button">Przelicz!</button>
        </p>
        <Result result={result} />
      </fieldset>
    </form>
  );
};

export default Form;
