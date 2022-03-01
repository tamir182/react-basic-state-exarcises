import React, {useState} from 'react';
import './Record.css';

function Record() {

    const [time,setTime] = useState(null);

    function showTime(){
      setTime(new Date().toString())
    }
    return (
        <div className="Record">
            <p>Clicking on the button should display the date and time of the last click in the blue box.</p>
            <div className="wrapper">
                <button className="recorder" onClick={showTime}>Click Here</button>
            </div>
            <div className="blue-box">
                {time}
            </div>
        </div>
    );
}

export default Record;