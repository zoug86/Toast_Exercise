import React, { useState, createContext, useEffect } from 'react';
import { onMessage, fetchLikedFormSubmissions } from '../service/mockServer';


export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {

    const [open, setOpen] = useState(false);
    const [vertical, setVertical] = useState('');
    const [horizontal, setHorizontal] = useState('');
    const [formInfo, setFormInfo] = useState({});
    const [likedForms, setLikedForms] = useState([]);

    useEffect(() => {
        const getMessage = () => {
            onMessage(message => {
                setFormInfo(message.data);
            });
        };
        getMessage();
    }, [open]);

    useEffect(() => {
        const getLikedForms = async () => {
            try {
                const response = await fetchLikedFormSubmissions();
                setLikedForms(response.formSubmissions);
            } catch (error) {
                const id = setInterval(async () => {
                    const response = await fetchLikedFormSubmissions();
                    if (response.formSubmissions.length > 0) {
                        setLikedForms(response.formSubmissions);
                        clearInterval(id);
                    }
                }, 3000);
            }

        };
        getLikedForms();
    }, [formInfo]);

    return (
        <ToastContext.Provider value={{ open, vertical, horizontal, formInfo, likedForms, setFormInfo, setVertical, setHorizontal, setOpen }}>
            {children}
        </ToastContext.Provider>
    )
}
