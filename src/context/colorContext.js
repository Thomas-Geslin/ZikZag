import { createContext, useState } from "react";


export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('orange');
    const [secondaryColor, setSecondaryColor] = useState('darkBlueBackground');
 
    return (
        <ColorContext.Provider value={{ color, setColor, secondaryColor, setSecondaryColor }}>
            {children}
        </ColorContext.Provider>
    )
}