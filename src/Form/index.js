import "./style.css";

const Form = () => (
    <form>
        <fieldset className="calculator__fieldset">
            <legend className="calculator__legend">Przelicz walutę:</legend>
            <p>
                Pola oznaczone * są wymagane
            </p>
            <p>
                <label>
                    <span>Podaj kwotę*: </span><input name="value" placeholder="PLN" type="number"
                        min="1" required/>

                </label>
            </p>
            <p>
                <label>
                    <span>Przelicz na:</span>
                    <select name="currency:">
                        <option type="number" value="eur" selected>euro (EUR)</option>
                        <option type="number" value="usd">dolar amerykański (USD)</option>
                    </select>
                </label>
            </p>

            <section><button className="calculator__button">Sprawdź kurs</button>
                <button type="reset" className="calculator__button">Wyczyść</button>
            </section>

        </fieldset>
    </form>
);

export default Form;