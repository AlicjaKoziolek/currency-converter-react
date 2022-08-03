import "./style.css";

export const Result = ({ result }) => (
  <p className="calculator__paragraph">
    Kurs walut wynosi:
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}
        </strong>
      </>
    )}
  </p>
);
