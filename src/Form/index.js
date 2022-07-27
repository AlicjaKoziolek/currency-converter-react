import "./style.css";
import { useState } from "react";

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
  const [currency, setCurrency] = useState([0].money);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form>
      <fieldset className="calculator__fieldset">
        <legend className="calculator__legend">Przelicz walutę:</legend>
        <p>Pola oznaczone * są wymagane</p>
        <p>
          <label>
            <span>Podaj kwotę*: </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              name="value"
              placeholder="PLN"
              type="number"
              min="1"
              required
            />
          </label>
        </p>
        <p>
          <label>
            <span>Przelicz na:</span>
            <select
              name="currency:"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.money} value={currency.money}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>

        <section>
          <button className="calculator__button">Sprawdź kurs</button>
          <button type="reset" className="calculator__button">
            Wyczyść
          </button>
        </section>
      </fieldset>
    </form>
  );
};

export default Form;
