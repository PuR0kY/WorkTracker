import { useState, useEffect } from 'react';
import '../index.css';
import DynamicTwoInput from '../components/DynamicTwoInput';

export default function SPEC() {
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
        <div className="title">SPEC</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <button onClick={() => handleIncrement('Batch')}>Batch</button>
                    <div id="counter1" className="counter">{counters['Batch'] || 0}</div>
                </li>
    
                <li className="counter-container">
                    <button onClick={() => handleIncrement('Swiftovka')}>Swiftovka</button>
                    <div id="counter2" className="counter">{counters['Swiftovka'] || 0}</div>
                </li>
                
                <li className="counter-container">
                    <button onClick={() => handleIncrement('101, MIDAS')}>101, MIDAS</button>
                    <div id="counter3" className="counter">{counters['101, MIDAS'] || 0}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => handleIncrement('Spoluřešitelka')}>Spoluřešitelka</button>
                    <div id="counter4" className="counter">{counters['Spoluřešitelka'] || 0}</div>
                </li>

                <li className="counter-container">
                    <button onClick={() => handleIncrement('SDE požadavek')}>SDE požadavek</button>
                    <div id="counter5" className="counter">{counters['SDE požadavek'] || 0}</div>
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