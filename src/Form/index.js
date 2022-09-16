import { useState } from "react";
import { Result } from "./Result";
import {
  StyledForm,
  StyledFieldset,
  StyledLegend,
  StyledButton,
  StyledBody,
  Loading,
  Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      enteredAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledBody>
      <StyledForm onSubmit={onSubmit}>
        {ratesData.state === "loading" ? (
          <Loading>
            <p>Proszę czekać...<br/>
            Trwa ładowanie kursu walut<br/>
            z Europejskiego Banku Centralnego</p>
          </Loading>
        ) : ratesData.state === "error" ? (
          <Failure>
            Upss.... Coś poszło nie tak 🤔<br/>
            Sprawdź proszę połączenie z internetem<br/> 
            Jeśli połączenie działa prawidłowo,<br/>
            prawdopodobnie wina leży po naszej stronie.<br/>
            Spóbuj ponownie za kilka minut 
          </Failure>
        ) : (
          <StyledFieldset>
            <StyledLegend>Przelicz walutę:</StyledLegend>
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
                  {!!ratesData.rates &&
                    Object.keys(ratesData.rates).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                </select>
              </label>
            </p>

            <p>
              <StyledButton>Przelicz!</StyledButton>
            </p>
            <Result result={result} />
          </StyledFieldset>
        )}
      </StyledForm>
    </StyledBody>
  );
};

export default Form;
