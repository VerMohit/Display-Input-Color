import { useState } from "react";
import ColorDisplay from "./ColorDisplay/ColorDisplay";
import ColorForm from "./ColorForm/ColorForm";
// import './App.css'

function App() {

  const [color, setColor] = useState('')

  return (
    <>
        
        <ColorDisplay color={color === "" ? 'white' : color}/>
        <ColorForm setColor={setColor}/>
    </>

  );
}

export default App;
