import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext=createContext();

export const useTheme=()=>useContext(ThemeContext);

export const ThemeProvider=({children})=>{
    // check local storage or system prefrence on initial load
    const [theme,setTheme]=useState(()=>{
        const savedTheme=localStorage.getItem("theme");
        return savedTheme || "Light";
    })

    useEffect(()=>{
        // update the data-theme attribute on the document element
        document.documentElement.setAttribute("data-theme",theme);
        // save to local storge
        localStorage.setItem("theme",theme);
    },[theme]);

    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==="light"?'dark':'light'));
    };

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
