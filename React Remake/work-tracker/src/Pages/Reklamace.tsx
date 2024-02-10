export default function Reklamace() {
    return (
        <div className="tabPanel">
            <div className="title">Reklamace</div>
            <div id="canvas">
                <ul className="list">
                    <li className="counter-container">
                        <button id="button1">Batch kontrola</button>
                        <div id="counter1" className="counter">0</div>
                    </li>
        
                    <li className="counter-container">
                        <button id="button2">Kontrola reklamace</button>
                        <div id="counter2" className="counter">0</div>
                    </li>
        
                    <li className="counter-container">
                        <button id="button3">Autorka vratka</button>
                        <div id="counter3" className="counter">0</div>
                    </li>
        
                    <li className="counter-container">
                        <button id="button4">MT191 v TS</button>
                        <div id="counter4" className="counter">0</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}