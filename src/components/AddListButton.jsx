import {Button} from "flowbite-react";

export default function AddListButton({openModal}) {

   const handleOpenCreateListModal = () => {
       openModal()
   }

    return (/*<Button className="new-list-button">{'ایجاد لیست جدید +'}</Button>*/

        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <button id="floating-btn" onClick={handleOpenCreateListModal}  className="bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-xl p-4 rounded-full shadow-lg" >
                +
            </button>
            <span className="bg-gray-700 text-white text-sm px-2 py-1 rounded shadow hidden sm:block">{'ایجاد لیست جدید '}</span>
        </div>
    )
}