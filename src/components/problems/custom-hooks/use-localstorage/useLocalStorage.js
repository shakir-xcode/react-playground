import { useState } from "react"


const useLocalStorage = (key, initialValue) => {
    if (!key) throw new Error('Key is required')

    const [value, setDataValue] = useState(JSON.parse(window.localStorage.getItem(key)) || initialValue || "");

    const setItem = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Could not store the item: ', error.message);
        }
    }

    const setValue = (value) => {
        setDataValue(value);
        setItem(value);
    }


    return [value, setValue];
}

export default useLocalStorage;












/*

 const [value, setValue] = React.useState(() => {
        try {
        const item = window.localStorage.getItem("myValue");
        return item ? JSON.parse(item) : "";
        } catch (error) {
        console.error("Error reading localStorage:", error);
        return "";
        }
    });
    
    React.useEffect(() => {
        try {
        window.localStorage.setItem("myValue", JSON.stringify(value));
        } catch (error) {
        console.error("Error writing to localStorage:", error);
        }
    }, [value]);
    
    return [value, setValue];

*/