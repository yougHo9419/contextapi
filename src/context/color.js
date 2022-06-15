import { createContext, useState } from "react";

const yhColorContext = createContext({
    state: {color:'black', subcolor:'red'},
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color,setColor] = useState('green')
    const [subcolor,setSubColor] = useState('yellow')

    const value = {
        state: {color,subcolor},
        actions: {setColor,setSubColor}
    }

    return (
        <yhColorContext.Provider value={value}>{children}</yhColorContext.Provider>
    )
}

const {Consumer : ColorConsumer} = yhColorContext;
export {ColorProvider, ColorConsumer} ;
