import React, { useState } from 'react';

export default function SPEC() {
    const [count,setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);

return (
    <div className="tabPanel">
        <div className="title">Autorizace</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <button onClick={() => setCount(count + 1)}>Batch</button>
                    <div id="counter1" className="counter">{count}</div>
                </li>
    
                <li className="counter-container">
                    <button onClick={() => setCount2(count2 + 1)}>Swiftovka</button>
                    <div id="counter2" className="counter">{count2}</div>
                </li>
                
                <li className="counter-container">
                    <button onClick={() => setCount3(count3 + 1)}>101, MIDAS</button>
                    <div id="counter3" className="counter">{count3}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount4(count4 + 1)}>Spoluřešitelka</button>
                    <div id="counter4" className="counter">{count4}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount5(count5 + 1)}>SDE požadavek</button>
                    <div id="counter5" className="counter">{count5}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount6(count6 + 1)}>Testování</button>
                    <div id="counter6" className="counter">{count6}</div>
                </li>
            </ul>
        </div>
    </div>
)
}