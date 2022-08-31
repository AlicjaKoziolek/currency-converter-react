import { Section } from "./styled";

export const Result = ({ result }) => (
  <Section>
    Kwota po przeliczeniu:&nbsp;
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;
          {result.currency}
        </strong>
      </>
    )}
  </Section>
);
