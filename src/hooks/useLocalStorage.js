import { useEffect, useState } from "react";

const useLocalStorage = (initialValue, key) => {
    const getValue = () => {
        const storage = localStorage.getItem(key); // string || null
        
        if (storage) {
            return Number.isInteger(storage) ? storage : JSON.parse(storage); // '[]', '{}', ''
        }

        return initialValue;

    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        Number.isInteger(value) ? localStorage.setItem(key, value) : localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default useLocalStorage