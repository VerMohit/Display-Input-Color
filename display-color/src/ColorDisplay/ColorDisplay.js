import React from 'react';
import './ColorDisplay.css';

const ColorDisplay = ( { color } ) => {
    return (
        <div 
            className="colorBox" 
            style={ { backgroundColor: color } }
        >
            { color === "white" ? 'Empty Value' : color }
        </div>
    );
}

export default ColorDisplay;