import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import { StyledContainer, StyledMain } from "./styled";

function App() {

  return (
    <StyledContainer>
      <StyledMain>
        <Clock />
        <Header title={"Kalkulator walutowy"} />
        <Form />
        <Footer />
      </StyledMain>
    </StyledContainer>
  );
}

export default App;
