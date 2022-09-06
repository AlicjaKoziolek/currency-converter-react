import { StyledSection } from "./styled";

export const Result = ({ result }) => (
  <StyledSection>
    Kwota po przeliczeniu:&nbsp;
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;
          {result.currency}
        </strong>
      </>
    )}
  </StyledSection>
);
