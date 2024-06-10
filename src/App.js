// Importa la biblioteca React
import React from 'react';

// Importa una imagen de la carpeta assets/img
import adidas from './assets/img/adidas.jpg';

// Importa el archivo de estilos CSS
import './App.css';

  // Codigo Buscador

var busqueda = document.getElementById("buscar");
var lupa = document.getElementById("lupa");
lupa.style.left = (parseInt(busqueda.offsetLeft)+39.5)+"%";
lupa.style.top = (parseInt(busqueda.offsetTop)+9)+"%";

var busqueda = document.getElementById("buscar");
var lupa = document.getElementById("lupa");


// Codigo Buscador

// Actualiza la posición del icono si el tamaño del input cambia
busqueda.addEventListener("input", function() {
  lupa.style.right = "10px"; // Ajusta la posición según sea necesario
});


// Define el componente funcional App
const App = (_) => {
  return (
    // Renderiza un div contenedor
    <div>
      {/* Muestra la imagen importada */}
      <img src={adidas} />
    </div>
  );


};

// Exporta el componente App como el export por defecto
export default App;
