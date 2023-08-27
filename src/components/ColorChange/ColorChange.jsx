import NavBar from "../NavBar/NavBar";
import { useState } from 'react';

const ColorChange = () => {
      const [color, setColor] = useState('#FFFFFF');
  const defaultColor = '#FFFFFF';

  const changeColor = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  };

  const resetColor = () => {
    setColor(defaultColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <NavBar resetColor={resetColor} />
      <div className="app" style={{ backgroundColor: color }}>
        <div className="content">
          <h1>Background Color</h1>
          <p>Current Color: {color}</p>
          <button className='changeColor btn' onClick={changeColor}>Change Color</button>
        </div> 
      </div>
    </>
  );
}

export default ColorChange
