import React, {useEffect, useState} from 'react';
import './Mirror.css';

function Mirror() {

    const [text, setText] = useState(null);

    useEffect(() => {

    });

    // function mirrorText(event) {
    // setText(event.target.value)
    // }

    return (
        <div className="Mirror">
            <p>The blue box should always display the exact same content as appeared in the input.</p>
            <div className="wrapper">
                <input onKeyUp={(event) => setText(event.target.value)} />
                <div className="blue-box">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Mirror;