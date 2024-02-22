import { useState, useEffect } from 'react';
import '../css/index.css';
import DynamicInput from '../components/DynamicInput.tsx';
import createFile from '../components/FileSaver.tsx';

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

    // Function to handle counter increments
    const handleDecrement = (counterName:any) => {
        setCounters((prevCounters:any) => ({
            ...prevCounters,
            [counterName]: (prevCounters[counterName] || 0) - 1
        }));
    };

return (
    <div className="tabPanel">
        <div className="title">Autorizace</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <div>
                        <button onClick={() => handleIncrement('Batch kontrola')}>Batch kontrola</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Batch kontrola')}>-</button>
                    </div>
                    <div id="counter1" className="counter">{counters['Batch kontrola'] || 0}</div>
                </li>
    
                <li className="counter-container">
                    <div>
                        <button onClick={() => handleIncrement('Kontrola reklamace')}>Kontrola reklamace</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Kontrola reklamace')}>-</button>
                    </div>
                    <div id="counter2" className="counter">{counters['Kontrola reklamace'] || 0}</div>
                </li>
                
                <li className="counter-container">
                    <div>
                        <button onClick={() => handleIncrement('Autorizace vratky')}>Autorizace vratky</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Autorizace vratky')}>-</button>
                    </div>
                    <div id="counter3" className="counter">{counters['Autorizace vratky'] || 0}</div>
                </li>

                <li className="counter-container">
                    <div>
                        <button onClick={() => handleIncrement('MT191 v TS')}>MT191 v TS</button>
                        <button className='decrement-button' onClick={() => handleDecrement('MT191 v TS')}>-</button>
                    </div>
                    <div id="counter4" className="counter">{counters['MT191 v TS'] || 0}</div>
                </li>

                <li className='two-input'>
                    <div>
                        <DynamicInput uniqueId='Autorizace'/>    
                    </div>              
                </li>
            </ul>
        <div className='export'>
        {createFile({ uniqueId: "Autorizace" })}
        </div> 
        </div>
    </div>
)
}