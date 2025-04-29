import AppList from "./AppList.jsx"
import CreateModal from "./modals/CreateModal.jsx";
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ApplicationBody({ref}) {

    const [List , setList] = useState([
        {id : uuidv4() , name: "برنامه ریزی شده" , cards : []} ,
        {id : uuidv4() , name: "در حال انجام" , cards : [{id : uuidv4() , name : "گزارش" } , {id : uuidv4() , name : "کد نویسی"} , {id : uuidv4() , name : "دیباگ"} , {id:uuidv4() , name : "دیپلوی"}]} ,
        //{id : uuidv4() , name: "انجام شده" , cards : []} ,
        //{id : uuidv4(), name : "آرشیو" , cards : []} ,
    ]);

    const [openCardModal , setOpenCardModal ] = useState(false);
    const [listSelected, setListSelected] = useState(-1);

    const [startDrag , setStartDrag ] = useState([-1 , -1]);
    const [endDrag , setEndDrag ] = useState([-1 , -1]);

    const [modal_labels, setModalLabels] = useState(
        {
            header : "لطفا نام کارت مورد نظر خود را وارد نمایید" ,
            text_label : "نام کارت" ,
            button_label : "ایجاد کارت جدید",
        }
    );





    const createNewList = (listname) => {

        if (List .length >= 4) return; // show limit list
        List.push({id : uuidv4() , name : listname , cards : []});
        setList(List)
    }

    if (ref) {
        ref.current = {
            createNewList ,
        }
    }

    useEffect(() => {
        console.log("start-drag-changes : " ,  startDrag)
    }, [startDrag]);

    useEffect(() => {
        console.log("end-drag-changes : " ,  endDrag)
    }, [endDrag]);

    useEffect(() => {
        console.log("re render after drag" , " start : " , startDrag , " end : " , endDrag)
        if (startDrag[0] >= 0 && startDrag[1] >= 0 && endDrag[0] >= 0  && endDrag[1] >= 0) {
            if (startDrag[0] === endDrag[0] ) {
                // drag in one list
                let targetCard = List[startDrag[0]].cards[startDrag[1]]
                List[startDrag[0]].cards.splice(startDrag[1])
                List[endDrag[0]].cards.splice(endDrag[1] , 0 , targetCard)
                setList(List);
                console.log (List )


                console.log("target card : ", targetCard)
            }
        }


    } , [startDrag , endDrag]);





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
        handleAddNewCardToList(newElementName);
    }



    const handleAddNewCardToList = (cardname) => {
        if( listSelected < 0 ) {
            return false;
        }
        let desireIndex = -1;

        List.forEach((item,index) => {
            if (item.id === listSelected){
                desireIndex = index;

            }
        })
        console.log(desireIndex);
        if(desireIndex >= 0){
            List[desireIndex].cards.push({id : uuidv4() , name: cardname});
            console.log(" new List : " , List );
            setList(List);
            setListSelected(-1);
            return true;
        }

        return false;
    }

    return (
        <div className="show-list ">
            <ul className="list main-list-section" >
                {List.map((item, listIndex) => <AppList list={item} key={item.id} listIndex={listIndex}  openModal={handleOpenCreateCardModal} startDrag={setStartDrag} endDrag={setEndDrag} />)}

            </ul>
            <CreateModal open={openCardModal} onClose={handleCloseCreateCardModal} onSubmit={handleOnSubmitCreateCardModal} labels={modal_labels} />
        </div>
    )
}