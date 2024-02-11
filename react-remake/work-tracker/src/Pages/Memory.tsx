import React, { createContext, useContext, useEffect, useState } from 'react';
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