import {useEffect, useState} from "react";

let globalDraggedCard = null;
let listeners = []
const useDraggedCard = ( ) => {
    const [draggedCard, setDraggedCard] = useState(globalDraggedCard);

    //const Dragged

    useEffect(() => {
        listeners.push(setDraggedCard)

        return () => {
            listeners = listeners.filter(listener => listener !== setDraggedCard);
        }

    }, []);

    return [draggedCard, setDraggedCard];
}


export default useDraggedCard;