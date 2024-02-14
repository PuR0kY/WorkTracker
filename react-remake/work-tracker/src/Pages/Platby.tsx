import React, { useState, useEffect } from 'react';
import '../index.css';

export default function Platby() {
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
        <div className="title">Platby</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                <button onClick={() => handleIncrement('Smazaná platba')}>Smazaná platba</button>
                    <div id="counter1" className="counter">{counters['Smazaná platba'] || 0}</div>
                </li>
    
                <li className="counter-container">
                    <button onClick={() => handleIncrement('Swiftovka')}>Swiftovka</button>
                    <div id="counter2" className="counter">{counters['Swiftovka'] || 0}</div>
                </li>
                
                <li className="counter-container">
                    <button onClick={() => handleIncrement('Spoluřešitelka')}>Spoluřešitelka</button>
                    <div id="counter3" className="counter">{counters['Spoluřešitelka'] || 0}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => handleIncrement('Identifikace plateb')}>Identifikace plateb</button>
                    <div id="counter4" className="counter">{counters['Identifikace plateb'] || 0}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => handleIncrement('ACKY')}>ACKY</button>
                    <div id="counter5" className="counter">{counters['ACKY'] || 0}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => handleIncrement('MOI')}>MOI</button>
                    <div id="counter6" className="counter">{counters['MOI'] || 0}</div>
                </li>

                <li className="counter-container">
                        <button onClick={() => handleIncrement('SDE požadavek')}>SDE požadavek</button>
                        <div id="counter7" className="counter">{counters['SDE požadavek'] || 0}</div>
                    </li>

                <li className="counter-container">
                <button onClick={() => handleIncrement('MT191 v TS')}>MT191 v TS</button>
                    <div id="counter8" className="counter">{counters['MT191 v TS'] || 0}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => handleIncrement('Testování')}>Testování</button>
                    <div id="counter9" className="counter">{counters['Testování'] || 0}</div>
                </li>
            </ul>
        </div>
    </div>
)
}