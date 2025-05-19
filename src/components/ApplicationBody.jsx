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

    useEffect(async () => {
        let myList = await loadListsFromApi()
        setList(myList);
    } , [])


    useEffect(() => {
        setStorage(List)
    }, [List]);


    const createNewList = async (listname) => {

        if (List .length >= 4) return; // show limit list
        let newList = [...List];
        let newAddedList = await createListIntoApi({name: listname});
        if(!newAddedList) return false; // show error
        newList.push(newAddedList);
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

            // state 1 => drag and drop in list
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

                updateListsAndAfterDrag(newList, 1);

                setList(newList)

                //setStartDrag([-1,-1])
                //setEndDrag([-1 , -1])

                //List[endDrag[0]].cards.splice(endDrag[1] , 0 , targetCard)

                //console.log("target card : ", targetCard)

                // drag and drop between list and paste over card of another list
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

                // drop on another list
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

    const updateListsAndAfterDrag = (Lists , state) => {
        console.log(Lists , state , startDrag , endDrag);
    }








    const handleOpenCreateCardModal = (listId) => {

        setListSelected(listId);
        setOpenCardModal(true);
    }

    const handleCloseCreateCardModal = () => {
        setOpenCardModal(false);
    }

    const handleOnSubmitCreateCardModal = async (newElementName) => {
        //console.log(newElementName);
        setOpenCardModal(false);
        await handleAddNewCardToList(newElementName);
    }



    const handleAddNewCardToList = async(cardname) => {
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
            let newCards = { name: cardname , row : newList[desireIndex].cards.length + 1};
            let newAddedCards = await createCardForListIntoApi(newList[desireIndex].id , newCards);
            if (!newAddedCards) return false;
            newList[desireIndex].cards.push(newAddedCards);
            //console.log(" new List : " , List );
            setList(newList);
            setListSelected(-1);
            return true;
        }

        return false;
    }

    const loadListsFromApi = async () => {
        try {
            let response = await fetch('http://localhost:8080/api/v3/lists' , {
                method: 'GET',
            });
            let myLists = await response.json();

            return myLists;

        } catch (error) {
            //return [];
            return null
        }
    }

    const createListIntoApi = async (newList) => {
        try {
            let response = await fetch('http://localhost:8080/api/v3/lists' , {
                method: 'POST',
                headers: {'Content-Type': 'application/json'} ,
                body : JSON.stringify(newList)
            })

            let data = await response.json();
            data.cards = [];

            return data

        }catch (error) {
            return null;
        }
    }

    const createCardForListIntoApi = async (listId , data) => {
        try {
            let response = await fetch('http://localhost:8080/api/v3/lists/' + listId + '/cards/' , {
                method: 'POST',
                headers: {'Content-Type': 'application/json'} ,
                body : JSON.stringify(data)
            });

            let newCard = await response.json();
            return newCard;

        }catch (error) {
            return null;
        }
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