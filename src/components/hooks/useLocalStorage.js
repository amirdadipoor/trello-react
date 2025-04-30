import { useState, useEffect } from "react";
const useLocalStorage = ( ) => {
    const storageName = "trelloReactLocalStorage";
    const [storage , setStorage] = useState(JSON.parse(localStorage.getItem(storageName)) || []);

    useEffect(() => {

        localStorage.setItem(storageName, JSON.stringify(storage));
    }, [storage]);

    return [storage , setStorage]
}

export default useLocalStorage;