'use client'

import { createContext, useState, useContext } from 'react';

// Create the context
const MyContext = createContext();

// Custom hook to use the context
export const useMyContext = () => {
    return useContext(MyContext);
};

// Create a provider component
export const MyContextProvider = ({ children }) => {
    const [citiesData, setCitiesData] = useState([]);


    return (
        <MyContext.Provider value={{ citiesData, setCitiesData }}>
            {children}
        </MyContext.Provider>
    );
};
