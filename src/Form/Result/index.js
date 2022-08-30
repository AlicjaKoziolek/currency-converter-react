import { Paragraph } from "./styled";

export const Result = ({ result }) => (
  <Paragraph>
    Kwota po przeliczeniu:&nbsp;
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;
          {result.currency}
        </strong>
      </>
    )}
  </Paragraph>
);
