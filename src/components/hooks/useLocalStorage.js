import { useState, useEffect } from "react";
const useLocalStorage = ( ) => {
    const storageName = "trelloReactLocalStorage";
    const [storage , setStorage] = useState(localStorage.getItem(storageName) || []);

    useEffect(() => {
        localStorage.setItem(storageName, storage);
    }, [storage]);

    return [storage , setStorage]
}

export default useLocalStorage;