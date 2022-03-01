import React, {useState} from 'react';
import './FullName.css';

function FullName() {

    const [valid,setValid] = useState(true);

    function changeHandler(e) {
        const value = e.target.value;
        if (value.trim().split(' ').length === 2) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    return (
        <div className="FullName">
            <p>
                Set the background of the input to <span className="valid">green</span> or <span className="invalid">red</span> to
                indicate whether the input contains a valid full name or not.<br />
                A valid full name must contain two words.
            </p>
            <div className="wrapper">
                <input onChange={changeHandler} style={{background: valid ? 'green' : 'red' }} />
            </div>
        </div>
    );
}

export default FullName;