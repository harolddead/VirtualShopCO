// Importa la biblioteca React
import React from 'react';

// Importa una imagen de la carpeta assets/img
import adidas from './assets/img/adidas.jpg';

// Importa el archivo de estilos CSS
import './App.css';

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
