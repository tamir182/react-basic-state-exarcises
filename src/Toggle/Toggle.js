import React, {useState} from 'react';
import './Toggle.css';

function Toggle() {

    const [shown, setShown] =useState(true);


    return (
        <div className="Toggle">
            <p>Clicking on the button below should hide the blue circle. Clicking again should display it.</p>
            <div className="wrapper">
                <button onClick={() => setShown(!shown)}>Show/Hide the circle!</button>
                { shown && <div className="blue-circle" ></div> }

                {/*<div className="blue-circle" style={{display: shown ? 'block' : 'none'}}></div>*/}
            </div>
        </div>
    );
}

export default Toggle;