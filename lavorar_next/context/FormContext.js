import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
    const [data, setData] = useState({});

    const setFormValues = (values) => {
        console.log('valores', values)
        setData((prevValues) => ({
            ...prevValues,
            ...values,
        }));
        console.log('datos', data)
    };

    return (
        <FormContext.Provider value={{ data, setFormValues }}>
            {children}
        </FormContext.Provider>
    );
}

export const UseFormData = () => useContext(FormContext);
