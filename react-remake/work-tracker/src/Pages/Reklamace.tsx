import React, { useState } from 'react';

export default function Reklamace() {
    const [count,setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

return (
    <div className="tabPanel">
        <div className="title">Autorizace</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <button onClick={() => setCount(count + 1)}>Batch kontrola</button>
                    <div id="counter1" className="counter">{count}</div>
                </li>
    
                <li className="counter-container">
                    <button onClick={() => setCount2(count2 + 1)}>Kontrola reklamace</button>
                    <div id="counter2" className="counter">{count2}</div>
                </li>
                
                <li className="counter-container">
                    <button onClick={() => setCount3(count3 + 1)}>Autorka vratka</button>
                    <div id="counter3" className="counter">{count3}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount4(count4 + 1)}>MT191 v TS</button>
                    <div id="counter4" className="counter">{count4}</div>
                </li>
            </ul>
        </div>
    </div>
)
}