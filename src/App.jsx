import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppNavbar from "./components/AppNavbar.jsx";
import ApplicationBody from "./components/ApplicationBody.jsx";
import AddListButton from "./components/AddListButton.jsx";
import './App.css'
import CreateModal from "./components/modals/CreateModal.jsx";

function App() {

    const [openListModal, setOpenListModal] = useState(false);
    const createListRef = useRef(null);
    const [modal_labels, setModalLabels] = useState(
        {
            header : "لطفا نام لیست مورد نظر خود را وارد نمایید" ,
            text_label : "نام لیست" ,
            button_label : "ایجاد لیست جدید",
        }
    );

    const handleCloseCreateListModal = () => {
        setOpenListModal(false);
    }

    const handleOpenCreateListModal = ( ) => {
        setOpenListModal(true);
    }

    const handleOnSubmitCreateListModal = (newElementName) => {
        console.log(newElementName);
        setOpenListModal(false);
        createListRef.current?.createNewList(newElementName)
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-700">

            <AppNavbar></AppNavbar>
            <ApplicationBody ref={createListRef}/>
            <AddListButton openModal={handleOpenCreateListModal} />
            <CreateModal open={openListModal} onClose={handleCloseCreateListModal} onSubmit={handleOnSubmitCreateListModal} labels={modal_labels}/>



        </div>

    )
}

export default App
