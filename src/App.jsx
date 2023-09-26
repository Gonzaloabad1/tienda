import React from "react"; // Asegúrate de importar React si no lo has hecho
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;