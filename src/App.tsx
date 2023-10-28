import React, { useState } from 'react';
import { COLORS } from './colors'; 
import './App.css'; 

const App: React.FC = () => {
  const [color, setColor] = useState(() => getRandomColor());

  function getRandomColor() {
    const allColors = Object.values(COLORS).flat();
    return allColors[Math.floor(Math.random() * allColors.length)];
  }

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="color-info">
        <h1 className="color-code">{color}</h1>
        <button className="update-button" onClick={() => setColor(getRandomColor())}>Atualizar cor</button>
      </div>
    </div>
  );
};

export default App;
