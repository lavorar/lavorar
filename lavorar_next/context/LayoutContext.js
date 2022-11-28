import { useState, createContext, useContext } from "react";

export const Layout = createContext();

export default function FormProvider({ children }) {
    const [open, setData] = useState({});

    const setOpenBar = () => {        
        setData(!open);        
    };

    return (
        <Layout.Provider value={{ open, setOpenBar }}>
            {children}
        </Layout.Provider>
    );
}

export const UseLayoutOpen = () => useContext(Layout);
