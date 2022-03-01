import React, {useState} from 'react';
import './FavoriteNumber.css';

function FavoriteNumber() {
    const [num,setNum] = useState(null);

    return (
        <div className="FavoriteNumber">
            <p>Clicking on one of the following buttons, should write it's number in the blue box below.</p>
            <div className="buttons">
                <button onClick={() => setNum(1)}>1</button>
                <button onClick={() => setNum(2)}>2</button>
                <button onClick={() => setNum(3)}>3</button>
            </div>
            <div className="chosenNumber">
                {num}
            </div>
        </div>
    );
}

export default FavoriteNumber;