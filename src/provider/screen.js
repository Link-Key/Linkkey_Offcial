import { useMediaQuery } from "@mui/material";
import { createContext, useContext } from "react";


const ScreenContext = createContext();

const ScreenContextProvider = ({ children }) => {

    const isXl = useMediaQuery('(min-width: 1280px)')
    const isLg = useMediaQuery('(min-width: 1024px)')
    const isMd = useMediaQuery('(min-width: 768px)')
    const isSm = useMediaQuery('(min-width: 375px)')

    return (
        <ScreenContext.Provider value={{
            isXl,
            isLg,
            isMd,
            isSm
        }}>
            {children}
        </ScreenContext.Provider>
    )
}

const useScreen = () => ({ ...useContext(ScreenContext) })

export {
    useScreen,
    ScreenContextProvider
}
