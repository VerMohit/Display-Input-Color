import React from 'react';
import './ColorDisplay.css';

const ColorDisplay = ( { color } ) => {
    return (
        <div 
            className="colorDisplay" 
            style={ { backgroundColor: color } }
        >
            { color ? color : 'Empty Value' }
        </div>
    );
}

ColorDisplay.defaultProps = {
    color: "Empty Color"
}

export default ColorDisplay;