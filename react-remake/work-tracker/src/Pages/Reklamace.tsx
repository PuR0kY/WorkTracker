import { useState, useEffect } from 'react';
import DynamicTwoInput from '../components/DynamicTwoInput';

export default function Reklamace() {
    // Retrieve counters from localStorage, or initialize an empty object if not found
    const storedItems = JSON.parse(localStorage.getItem('counters') || '{}');

    // Initialize state with counters from localStorage
    const [counters, setCounters] = useState(storedItems);

    // Update localStorage whenever counters state changes
    useEffect(() => {
        localStorage.setItem('counters', JSON.stringify(counters));
    }, [counters]);

    // Function to handle counter increments
    const handleIncrement = (counterName:any) => {
        setCounters((prevCounters:any) => ({
            ...prevCounters,
            [counterName]: (prevCounters[counterName] || 0) + 1
        }));
    };

    return (
        <div className="tabPanel">
            <div className="title">Reklamace</div>
            <div id="canvas">
                <ul className="list">
                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Urgence')}>Urgence</button>
                        <div id="counter1" className="counter">{counters['Urgence'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Zahájená')}>Zahájená</button>
                        <div id="counter2" className="counter">{counters['Zahájená'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Ukončená')}>Ukončená</button>
                        <div id="counter3" className="counter">{counters['Ukončená'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Vratka')}>Vratka</button>
                        <div id="counter4" className="counter">{counters['Vratka'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Batch')}>Batch</button>
                        <div id="counter5" className="counter">{counters['Batch'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Spoluřešitelka')}>Spoluřešitelka</button>
                        <div id="counter6" className="counter">{counters['Spoluřešitelka'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Třídění')}>Třídění</button>
                        <div id="counter7" className="counter">{counters['Třídění'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('SDE požadavek')}>SDE požadavek</button>
                        <div id="counter8" className="counter">{counters['SDE požadavek'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <button onClick={() => handleIncrement('Testování')}>Testování</button>
                        <div id="counter9" className="counter">{counters['Testování'] || 0}</div>
                    </li>

                    <li className='two-input'>
                        <div>
                            <DynamicTwoInput />     
                        </div>                   
                    </li>
                </ul>
            </div>
        </div>
    );
}
