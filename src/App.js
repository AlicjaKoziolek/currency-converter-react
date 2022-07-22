import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";

function App() {
  return (
    <body className="body">
      <main className="calculator">
        <Header title={"Kalkulator walutowy"} />
        <Form />
        <p className="calculator__paragraph">
          Kurs walut wynosi: <strong>N/A</strong>
        </p>
      </main>
      <Footer footerContent={"Projekt autorstwa Alicji Koziołek"} />
    </body>
  );
}

export default App;
