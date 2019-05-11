import React from 'react';
import './App.css';

const App = () => (
  <div>
    <input type='text' />
    <ul>
      <li style={{ textDecoration:'line-through' }}>Item 0</li>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <div>
      <h3>Mostrar</h3>
      <a href=''>Todos</a> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
          
  </div>
)

export default App;
