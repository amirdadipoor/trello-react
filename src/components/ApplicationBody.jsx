import AppList from "./AppList.jsx"
import CreateModal from "./modals/CreateModal.jsx";
import {useEffect, useState} from "react";
import {useDropControl} from "./hooks/useDropControl.jsx";
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from "./hooks/useLocalStorage.js";

export default function ApplicationBody({ref}) {

    const [storage, setStorage] = useLocalStorage();
    //console.log(storage);

    const [List , setList] = useState(storage/*[
        {id : uuidv4() , name: "برنامه ریزی شده" , cards : []} ,
        {id : uuidv4() , name: "در حال انجام" , cards : [{id : uuidv4() , name : "گزارش" } , {id : uuidv4() , name : "کد نویسی"} , {id : uuidv4() , name : "دیباگ"} , {id:uuidv4() , name : "دیپلوی"}]} ,
        //{id : uuidv4() , name: "انجام شده" , cards : []} ,
        //{id : uuidv4(), name : "آرشیو" , cards : []} ,
    ]*/);

    const [openCardModal , setOpenCardModal ] = useState(false);
    const [listSelected, setListSelected] = useState(-1);

    const [startDrag , setStartDrag ] = useState([-1 , -1]);
    const [endDrag , setEndDrag ] = useState([-1 , -1]);
    const [startDragging , setStartDragging ] = useState(false);

    const [modal_labels, setModalLabels] = useState(
        {
            header : "لطفا نام کارت مورد نظر خود را وارد نمایید" ,
            text_label : "نام کارت" ,
            button_label : "ایجاد کارت جدید",
        }
    );


    useEffect(() => {
        ///console.log(endDrag ,  startDrag)
        setStorage(List)
        //console.log("list changes watch with use effect");
    }, [List]);


    const createNewList = (listname) => {

        if (List .length >= 4) return; // show limit list
        let newList = [...List];
        newList.push({id : uuidv4() , name : listname , cards : []});
        //let newList = [...List];
        setList(newList)
    }

    if (ref) {
        ref.current = {
            createNewList ,
        }
    }





    useEffect(() => {
        //console.log("re render after drag" , " start : " , startDrag , " end : " , endDrag)
        //console.log(useDropControl)
        if (startDrag[0] >= 0 && startDrag[1] >= 0 && endDrag[0] >= 0  && endDrag[1] >= 0 && useDropControl.draggingInProgress) {
           // console.log("start drag race");
            if (startDrag[0] === endDrag[0] && useDropControl.target === false ) {
                //console.log("start drag changes : " , startDrag ,  endDrag )
                // drag in one list
                let newList = [...List];
                let newCards = [...List[endDrag[0]].cards];
                let targetCard = List[startDrag[0]].cards[startDrag[1]]

                newCards.splice(startDrag[1], 1)
                let newCardsFormation = [...newCards.slice(0, endDrag[1]), targetCard, ...newCards.slice(endDrag[1])];

                newList[endDrag[0]].cards = newCardsFormation;

                useDropControl.draggingInProgress = false
                useDropControl.target = false

                setList(newList)

                //setStartDrag([-1,-1])
                //setEndDrag([-1 , -1])

                //List[endDrag[0]].cards.splice(endDrag[1] , 0 , targetCard)

                //console.log("target card : ", targetCard)
            } else if(startDrag[0] !== endDrag[0] && useDropControl.target === false){
                //console.log("re render after drag" , " start : " , startDrag , " end : " , endDrag)

                let newList = [...List];
                let targetCard = List[startDrag[0]].cards[startDrag[1]]
                let startDragCardList = [...List[startDrag[0]].cards];
                let destinateCardList = [...List[endDrag[0]].cards];
                startDragCardList.splice(startDrag[1] , 1)
                newList[startDrag[0]].cards = startDragCardList
                let newCardsFormation = [...destinateCardList.slice(0, endDrag[1]), targetCard, ...destinateCardList.slice(endDrag[1])];
                newList[endDrag[0]].cards = newCardsFormation;

                useDropControl.draggingInProgress = false
                useDropControl.target = false

                //let newList = [...List];
                setList(newList)

            } else if (startDrag[0] !== endDrag[0] && useDropControl.target === true ) {
                //if
                //console.log("handle drag over list called" , startDrag ,  endDrag );
                let newList = [...List];
                let targetCard = List[startDrag[0]].cards[startDrag[1]]
                let startDragCardList = [...List[startDrag[0]].cards];
                startDragCardList.splice(startDrag[1] , 1)
                newList[startDrag[0]].cards = startDragCardList
                newList[endDrag[0]].cards.push(targetCard)

                useDropControl.draggingInProgress = false
                useDropControl.target = false

                setList(newList)

                //console.log(startDragCardList)
                /*List[startDrag[0]].cards.splice(startDrag[1])
                List[endDrag[0]].cards.push(targetCard)
                setList(List);
                console.log(List)*/
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
        //console.log(newElementName);
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
        //console.log(desireIndex);
        if(desireIndex >= 0){
            let newList = [...List];
            newList[desireIndex].cards.push({id : uuidv4() , name: cardname});
            //console.log(" new List : " , List );
            setList(newList);
            setListSelected(-1);
            return true;
        }

        return false;
    }

    return (
        <div className="show-list ">
            <ul className="list main-list-section" >
                {List.map((item, listIndex) => <AppList list={item} key={item.id} listIndex={listIndex}  openModal={handleOpenCreateCardModal} startDraggingProp={startDragging} setStartDragging={setStartDragging} startDrag={setStartDrag} endDrag={setEndDrag} />)}

            </ul>
            <CreateModal open={openCardModal} onClose={handleCloseCreateCardModal} onSubmit={handleOnSubmitCreateCardModal} labels={modal_labels} />
        </div>
    )
}