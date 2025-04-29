import {Button} from "flowbite-react";
import {useState} from "react";
import {useDropControl} from "./hooks/useDropControl.jsx";
import useDraggedCard from "./hooks/UseDraggedCard.jsx";

export default function AppCard({card , key , cardindex , listIndex,startDraggingProp,setStartDragging, startDrag, endDrag}) {

    //const [draggedCard, setDraggedCard] = useDraggedCard();

    const [cardIndex, setCardIndex] = useState(cardindex);

    const HandleDragEvent = (event) => {

        //console.log("handle drag event" );
    }

    const HandleDragStartEvent = (event) => {

        //console.log("handle Drag Start" , [listIndex , cardindex]);

        startDrag([listIndex , cardindex])
        //event.target.classList.add("dragging-element");

    }

    const HandleDragEnterEvent = () => {
        //console.log("handle drag Enter event" , draggedCard );
    }

    const HandleDragOverEvent = (event) => {
        //console.log("handle drag Over event" );
        event.preventDefault()
    }

    const HandleDragLeaveEvent = () => {
       // console.log("handle drag leave event" );
    }

    const HandleDropEvent = () => {
        //console.log("handle drop over card " , /*[listIndex , cardindex] ,*/ useDropControl.draggingInProgress);
        if (useDropControl.draggingInProgress === false) {
            endDrag([listIndex , cardindex])
            useDropControl.draggingInProgress = true;
            useDropControl.target = false
        }


    }

    const HandleDragEndEvent = (event) => {
        //event.target.classList.remove("dragging-element");
        //console.log("handle drop end");
    }



    return (
        <li className="draggable my-2" draggable="true" onDragStart={HandleDragStartEvent} onDragEnter={HandleDragEnterEvent} onDragOver={HandleDragOverEvent} onDragLeave={HandleDragLeaveEvent} onDrag={HandleDragEvent} onDrop={HandleDropEvent} onDragEnd={HandleDragEndEvent} key={key} >
            <div
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2">
                <div className="flex justify-between items-center ">
                    <div className="flex justify-start ">
                        <h6 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h6>
                    </div>
                    <div className="flex justify-end px-1 pt-1">
                        <button id="dropdownButton21" data-dropdown-toggle="dropdown21"
                                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 16 3">
                                <path
                                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                            </svg>
                        </button>

                        <div id="dropdown21"
                             className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton21">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ویرایش</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">حذف</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/*<div className="mt-2">
                    <div className="flex justify-between items-center ">
                        <div className="flex justify-start mb-3">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h2 className="ml-1 font-normal text-gray-700 dark:text-gray-400">24th Mar</h2>
                        </div>
                        <div className="flex justify-end mb-3 items-center ltr">
                            <label htmlFor="checked-checkbox"
                                   className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-1.5">انجام
                                شده</label>
                            <input checked id="checked-checkbox21" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                    </div>
                    <span
                        className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 min-w-sm">Green</span>
                    <span
                        className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                </div>*/}
            </div>
        </li>
    )
}