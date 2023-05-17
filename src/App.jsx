import "./App.css";
import Contador from "./components/Contador";
import Titulos from "./components/Titulos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //aqui vamos a escribir logica

  return (
    //aqui va el maquetado y un poco de logica
    //<> es un Fragment
    <section className="container my-4">
     {/* <Titulos aqui va los props></Titulos> */}
     <Titulos nuevoTitulo='Este titulo fue creado con props' otroDato={true} />
     <hr/>
     <Contador></Contador>
  </section>
  );
}

export default App;
