import { useState, useEffect } from 'react';
import '../css/index.css';
import DynamicInput from '../components/DynamicInput';
import createFile from '../components/FileSaver';

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

const handleDecrement = (counterName:any) => {
    setCounters((prevCounters:any) => ({
        ...prevCounters,
        [counterName]: (prevCounters[counterName] || 0) - 1
    }));
};

return (
    <div className="tabPanel">
        <div className="title">SPEC</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('Batch')}>Batch</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Batch')}>-</button>
                    </div>
                    <div id="counter23" className="counter">{counters['Batch'] || 0}</div>
                </li>
    
                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('Swiftovka')}>Swiftovka</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Swiftovka')}>-</button>
                    </div>                   
                    <div id="counter24" className="counter">{counters['Swiftovka'] || 0}</div>
                </li>
                
                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('101, MIDAS')}>101, MIDAS</button>
                        <button className='decrement-button' onClick={() => handleDecrement('101, MIDAS')}>-</button>
                    </div>                      
                    <div id="counter25" className="counter">{counters['101, MIDAS'] || 0}</div>
                </li>

                <li className="counter-container">
                    <div className='buttons'>   
                        <button onClick={() => handleIncrement('Spoluřešitelka')}>Spoluřešitelka</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Spoluřešitelka')}>-</button>
                    </div>                    
                    <div id="counter26" className="counter">{counters['Spoluřešitelka'] || 0}</div>
                </li>

                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('SDE požadavek')}>SDE požadavek</button>
                        <button className='decrement-button' onClick={() => handleDecrement('SDE požadavek')}>-</button>
                    </div>                    
                    <div id="counter27" className="counter">{counters['SDE požadavek'] || 0}</div>
                </li>

                <li className='two-input'>
                    <div>
                        <DynamicInput uniqueId='SPEC'/>    
                    </div>              
                </li>
            </ul>
        <div className='export'>
        {createFile({ uniqueId: "SPEC" })}
        </div> 
        </div>
    </div>
)
}