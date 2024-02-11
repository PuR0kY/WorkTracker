import React, { useState } from 'react';

export default function SPEC() {
    const [count,setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [count7, setCount7] = useState(0);
    const [count8, setCount8] = useState(0);
    const [count9, setCount9] = useState(0);

return (
    <div className="tabPanel">
        <div className="title">Autorizace</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <button onClick={() => setCount(count + 1)}>Urgence</button>
                    <div id="counter1" className="counter">{count}</div>
                </li>
    
                <li className="counter-container">
                    <button onClick={() => setCount2(count2 + 1)}>Zahájená</button>
                    <div id="counter2" className="counter">{count2}</div>
                </li>
                
                <li className="counter-container">
                    <button onClick={() => setCount3(count3 + 1)}>Ukončená</button>
                    <div id="counter3" className="counter">{count3}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount4(count4 + 1)}>Vratka</button>
                    <div id="counter4" className="counter">{count4}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount5(count5 + 1)}>Batch</button>
                    <div id="counter5" className="counter">{count5}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount6(count6 + 1)}>Spoluřešitelka</button>
                    <div id="counter6" className="counter">{count6}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount7(count7 + 1)}>Třídění</button>
                    <div id="counter7" className="counter">{count7}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount8(count8 + 1)}>SDE požadavek</button>
                    <div id="counter8" className="counter">{count8}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => setCount9(count9 + 1)}>Testování</button>
                    <div id="counter9" className="counter">{count9}</div>
                </li>
            </ul>
        </div>
    </div>
)
}