import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
function App() {
   //Aqui se va a consumir el servicio de categorias mediante fetchAPI y se va a mostrar en el navegador 
  const [results,setResults] = useState([]);
  React.useEffect(() => {

    fetch("http://localhost:3001/categorias").then(response => response.json()).then(data => {
      console.log(data);
      setResults(data);
    })
  }, [])

  return (
    <>
   <header>Simple Ecommerce de Frutas</header>

    <section>
      <nav>
      {
      results.map(d => (
      <div key={d.id} >{d.nombre}</div>
      ))
      }
      </nav>
      <article>
        Area Principal
      </article>
    </section>
   <footer></footer>
      </>
  );
  
}

export default App;
