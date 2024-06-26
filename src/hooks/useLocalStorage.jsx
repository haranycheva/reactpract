import { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
       return JSON.parse(localStorage.getItem(key)) || defaultValue;
    })
    useEffect(() => {
        if(value){
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [key, value])
    return [value, setValue]
}

export default useLocalStorage