import AppList from "./AppList.jsx"
import CreateModal from "./modals/CreateModal.jsx";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ApplicationBody() {

    const [List , setList] = useState([
        {id : uuidv4() , name: "برنامه ریزی شده" , cards : []} ,
        {id : uuidv4() , name: "در حال انجام" , cards : [{id : uuidv4() , name : "گزارش" } , {id : uuidv4() , name : "کد نویسی"} , {id : uuidv4() , name : "دیباگ"} , {id:uuidv4() , name : "دیپلوی"}]} ,
        {id : uuidv4() , name: "انجام شده" , cards : []} ,
        {id : uuidv4(), name : "آرشیو" , cards : []} ,
    ]);

    const [openCardModal , setOpenCardModal ] = useState(false);
    const [listSelected, setListSelected] = useState(0);
    const [modal_labels, setModalLabels] = useState(
        {
            header : "لطفا نام کارت مورد نظر خود را وارد نمایید" ,
            text_label : "نام کارت" ,
            button_label : "ایجاد کارت جدید",
        }
    );




    const handleOpenCreateCardModal = (listId) => {

        setListSelected(listId);
        setOpenCardModal(true);
    }

    const handleCloseCreateCardModal = () => {
        setOpenCardModal(false);
    }

    const handleOnSubmitCreateCardModal = (newElementName) => {
        console.log(newElementName);
        setOpenCardModal(false);
    }

    const handleAddNewCardToList = () => {

    }

    return (
        <div className="show-list ">
            <ul className="list main-list-section" >
                {List.map((item, index) => <AppList list={item} key={index} openModal={handleOpenCreateCardModal} />)}

            </ul>
            <CreateModal open={openCardModal} onClose={handleCloseCreateCardModal} onSubmit={handleOnSubmitCreateCardModal} labels={modal_labels} />
        </div>
    )
}