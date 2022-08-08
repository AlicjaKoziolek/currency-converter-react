import "./style.css";

export const Result = ({ result }) => (
  <p className="calculator__paragraph">
    Kwota po przeliczeniu:&nbsp;
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;
          {result.currency}
        </strong>
      </>
    )}
  </p>
);
