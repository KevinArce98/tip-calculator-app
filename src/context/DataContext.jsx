import { createContext, useState } from 'react';

const initialValue = { bill: '', tipPercentage: { isCustom: false, value: '' }, people: ''  };

export const DataContext = createContext(initialValue);

export const DataContextProvider = ({ children }) => {

    const [state, setState] = useState(initialValue)

    return (
        <DataContext.Provider value={{ data: state, changeData: setState }}>
            {children}
        </DataContext.Provider>
    )
}
