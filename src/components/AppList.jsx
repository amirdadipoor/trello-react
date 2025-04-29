import {Button, ListItem} from "flowbite-react";
import AppCard  from "./AppCard.jsx";

export default function AppList ({list , key ,listIndex, openModal ,startDraggingProp , setStartDragging, startDrag, endDrag}) {

    const handleClickCreateCard = () => {
        openModal(list.id)
    }

    const handleDragOverList = (event) => {
        event.preventDefault()
    }

    const handleDropCardOverList = () => {
        //console.log("Drop Over list accured" , startDragProp)
        //if (startDragProp) {}
        console.log("Drop Card over list" , /*[listIndex, list.cards.length] ,*/ startDraggingProp)
        endDrag([listIndex, list.cards.length])
    }

    return (
        <li className="list-style"  key={key}>
            <h6 className="mb-2">{list.name}</h6>
            <ul className="drag-zone dropzone my-8 min-h-32" onDragOver={handleDragOverList}   >{/* onDrop={handleDropCardOverList} */}
                {list.cards.map((item, cardindex) => (<AppCard card={item} key={item.id}  cardindex={cardindex} listIndex={listIndex} startDraggingProp={startDraggingProp} setStartDragging={setStartDragging} startDrag={startDrag}  endDrag={endDrag} />))}

            </ul>
            <span className="mt-5">
                <Button type="button" onClick={handleClickCreateCard}
                        className="text-gray bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-400">
                    <span className="ml-3">افزودن آیتم جدید</span>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 12h14m-7 7V5"/>
                    </svg>
                </Button>
            </span>
            <button className="close">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
            </button>
        </li>
    )
}