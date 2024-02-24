import { useState, useEffect } from 'react';
import '../css/index.css';
import DynamicInput from '../components/DynamicInput';
import createFile from '../components/FileSaver';

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
    }

        // Function to handle counter increments
    const handleDecrement = (counterName:any) => {
        setCounters((prevCounters:any) => ({
            ...prevCounters,
            [counterName]: (prevCounters[counterName] || 0) - 1
        }));
    };

return (
    <div className="tabPanel">
        <div className="title">Platby</div>
        <div id="canvas">
            <ul className="list">
                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('Smazaná platba')}>Smazaná platba</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Smazaná platba')}>-</button>
                    </div>
                    <div id="counter5" className="counter">{counters['Smazaná platba'] || 0}</div>
                </li>
    
                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('Swiftovka')}>Swiftovka</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Swiftovka')}>-</button>
                    </div>
                    <div id="counter6" className="counter">{counters['Swiftovka'] || 0}</div>
                </li>
                
                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('Spoluřešitelka')}>Spoluřešitelka</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Spoluřešitelka')}>-</button>
                    </div>
                    <div id="counter7" className="counter">{counters['Spoluřešitelka'] || 0}</div>
                </li>

                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('Identifikace plateb')}>Identifikace plateb</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Identifikace plateb')}>-</button>
                    </div>
                    <div id="counter8" className="counter">{counters['Identifikace plateb'] || 0}</div>
                </li>

                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('ACKY')}>ACKY</button>
                        <button className='decrement-button' onClick={() => handleDecrement('ACKY')}>-</button>
                    </div>
                    <div id="counter9" className="counter">{counters['ACKY'] || 0}</div>
                </li>

                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('MOI')}>MOI</button>
                        <button className='decrement-button' onClick={() => handleDecrement('MOI')}>-</button>
                    </div>
                    <div id="counter10" className="counter">{counters['MOI'] || 0}</div>
                </li>

                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('SDE požadavek')}>SDE požadavek</button>
                        <button className='decrement-button' onClick={() => handleDecrement('SDE požadavek')}>-</button>
                    </div>
                        <div id="counter11" className="counter">{counters['SDE požadavek'] || 0}</div>
                    </li>

                <li className="counter-container">
                    <div className='buttons'>
                        <button onClick={() => handleIncrement('MT191 v TS')}>MT191 v TS</button>
                        <button className='decrement-button' onClick={() => handleDecrement('MT191 v TS')}>-</button>
                    </div>
                    <div id="counter12" className="counter">{counters['MT191 v TS'] || 0}</div>
                </li>

                <li className="counter-container-test">
                    <div className='test-buttons'>
                        <button onClick={() => handleIncrement('Testování')}>Testování</button>
                        <button className='decrement-button' onClick={() => handleDecrement('Testování')}>-</button>
                    </div>
                    <div id="counter13" className="counter">{(counters['Testování'] || 0) + " min"}</div>
                </li>

                <li className='two-input'>
                    <div>
                        <DynamicInput uniqueId='Platby'/>    
                    </div>              
                </li>
            </ul>
            <div className='export'>
            {createFile({ uniqueId: "Platby" })}
            </div> 
        </div>
    </div>
)
}