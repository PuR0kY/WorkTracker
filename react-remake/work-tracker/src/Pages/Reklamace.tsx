import { useState, useEffect } from 'react';
import '../css/index.css';
import DynamicInput from '../components/DynamicInput';
import createFile from '../components/FileSaver';

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

    const handleDecrement = (counterName:any) => {
        setCounters((prevCounters:any) => ({
            ...prevCounters,
            [counterName]: (prevCounters[counterName] || 0) - 1
        }));
    };

    return (
        <div className="tabPanel">
            <div className="title">Reklamace</div>
            <div id="canvas">
                <ul className="list">
                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('Urgence')}>Urgence</button>
                            <button className='decrement-button' onClick={() => handleDecrement('Urgence')}>-</button>
                        </div>
                        <div id="counter14" className="counter">{counters['Urgence'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('Zahájená')}>Zahájená</button>
                            <button className='decrement-button' onClick={() => handleDecrement('Zahájená')}>-</button>
                        </div>        
                        <div id="counter15" className="counter">{counters['Zahájená'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('Ukončená')}>Ukončená</button>
                            <button className='decrement-button' onClick={() => handleDecrement('Ukončená')}>-</button>
                        </div>
                        <div id="counter16" className="counter">{counters['Ukončená'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('Vratka')}>Vratka</button>
                            <button className='decrement-button' onClick={() => handleDecrement('Vratka')}>-</button>
                        </div>                        
                        <div id="counter17" className="counter">{counters['Vratka'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('Batch')}>Batch</button>
                            <button className='decrement-button' onClick={() => handleDecrement('Batch')}>-</button>
                        </div>                         
                        <div id="counter18" className="counter">{counters['Batch'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('Spoluřešitelka')}>Spoluřešitelka</button>
                            <button className='decrement-button' onClick={() => handleDecrement('Spoluřešitelka')}>-</button>
                        </div>                        
                        <div id="counter19" className="counter">{counters['Spoluřešitelka'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('Třídění')}>Třídění</button>
                            <button className='decrement-button' onClick={() => handleDecrement('Třídění')}>-</button>
                        </div>                        
                        <div id="counter20" className="counter">{counters['Třídění'] || 0}</div>
                    </li>

                    <li className="counter-container">
                        <div className='buttons'>
                            <button onClick={() => handleIncrement('SDE požadavek')}>SDE požadavek</button>
                            <button className='decrement-button' onClick={() => handleDecrement('SDE požadavek')}>-</button>
                        </div>                        
                        <div id="counter21" className="counter">{counters['SDE požadavek'] || 0}</div>
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
                        <DynamicInput uniqueId='Reklamace'/>    
                    </div>              
                </li>
            </ul>
            <div className='export'>
            {createFile({ uniqueId: "Reklamace" })}
            </div> 
        </div>
    </div>
    );
}
