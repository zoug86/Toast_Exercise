import React, { useState, createContext, useEffect } from 'react';
import { onMessage, saveFormSubmission } from '../service/mockServer';


export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {

    const [open, setOpen] = useState(false);
    const [vertical, setVertical] = useState('');
    const [horizontal, setHorizontal] = useState('');
    const [formInfo, setFormInfo] = useState({});

    useEffect(() => {
        const getMessage = () => {
            try {
                onMessage(message => {
                    setFormInfo(message.data);
                });
            } catch (error) {
                console.error(error);
            }
        };
        getMessage();
    }, [open]);

    console.log(formInfo)
    return (
        <ToastContext.Provider value={{ open, vertical, horizontal, formInfo, setFormInfo, setVertical, setHorizontal, setOpen }}>
            {children}
        </ToastContext.Provider>
    )
}
