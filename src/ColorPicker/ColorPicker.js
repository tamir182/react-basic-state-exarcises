import React, {useState} from 'react';
import './ColorPicker.css';

function ColorPicker() {
    const [textColor, setTextColor] = useState(null);


    return (
        <div className="ColorPicker">
            <p>Clicking on one of the buttons should paint the "TEXT" in the color it represents.</p>
            <div className="buttons">
                <button onClick={() => setTextColor('red')} >Red</button>
                <button onClick={() => setTextColor('green')} >Green</button>
                <button onClick={() => setTextColor('blue')} >Blue</button>
            </div>
            <div className="text" style={{'color': textColor}}>
                TEXT
            </div>
        </div>
    );
}

export default ColorPicker;