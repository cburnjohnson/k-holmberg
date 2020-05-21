import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = () => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set Alert
    const setAlert = () => {
        console.log('set alert');
    };

    return (
        <AlertContext.Provider value={{ alerts: state, setAlert }}>
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
