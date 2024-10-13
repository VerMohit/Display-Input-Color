import { useState } from "react";
import ColorDisplay from "./ColorDisplay/ColorDisplay";
import ColorForm from "./ColorForm/ColorForm";
// import './App.css'

function App() {

  const [color, setColor] = useState('')

  return (
    <div
      className="App"
    >
        
        <ColorDisplay color={color}/>
        <ColorForm 
          color={color}
          setColor={setColor}
          />
    </div>

  );
}

export default App;
