import { useState, useEffect } from 'react';
import '../index.css';
import DynamicTwoInput  from "../components/DynamicTwoInput.tsx";

export default function Autorizace() {
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
        <div className="title">Autorizace</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <button onClick={() => handleIncrement('Batch kontrola')}>Batch kontrola</button>
                    <div id="counter1" className="counter">{counters['Batch kontrola'] || 0}</div>
                </li>
    
                <li className="counter-container">
                    <button onClick={() => handleIncrement('Kontrola reklamace')}>Kontrola reklamace</button>
                    <div id="counter2" className="counter">{counters['Kontrola reklamace'] || 0}</div>
                </li>
                
                <li className="counter-container">
                    <button onClick={() => handleIncrement('Autorizace vratky')}>Autorizace vratky</button>
                    <div id="counter3" className="counter">{counters['Autorizace vratky'] || 0}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => handleIncrement('MT191 v TS')}>MT191 v TS</button>
                    <div id="counter4" className="counter">{counters['MT191 v TS'] || 0}</div>
                </li>

                <li className='two-input'>
                    <div>
                        <DynamicTwoInput />     
                    </div>                   
                </li>
            </ul>
        </div>
    </div>
)
}