// CounterContext.js
import React, { createContext, useState, useContext } from 'react';

// Define the context
export const CounterContext = createContext<{
  counters: {
    Autorizace: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; count7: number; count8: number; count9: number; };
    SPEC: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; };
    Reklamace: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; };
    Platby: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; };
  };
  setCounters: React.Dispatch<React.SetStateAction<{
    Autorizace: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; count7: number; count8: number; count9: number; };
    SPEC: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; };
    Reklamace: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; };
    Platby: { count1: number; count2: number; count3: number; count4: number; count5: number; count6: number; };
  }>>;
}>({
  counters: {
    Autorizace: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0, count7: 0, count8: 0, count9: 0 },
    SPEC: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0 },
    Reklamace: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0 },
    Platby: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0 },
  },
  setCounters: () => {} // This is a dummy function, it will be replaced when used
});

// Define the provider component
export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [counters, setCounters] = useState({
    Autorizace: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0, count7: 0, count8: 0, count9: 0 },
    SPEC: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0 },
    Reklamace: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0 },
    Platby: { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0 },
  });

  return (
    <CounterContext.Provider value={{ counters, setCounters }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to consume the context
export const useCounter = () => useContext(CounterContext);
