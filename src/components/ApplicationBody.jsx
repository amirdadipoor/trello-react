import AppList from "./AppList.jsx"
import CreateModal from "./modals/CreateModal.jsx";
import {useState} from "react";

export default function ApplicationBody() {

    const [List , setList] = useState([
        {id : 1 , name: "برنامه ریزی شده" , cards : []} ,
        {id : 2 , name: "در حال انجام" , cards : [{id : 1 , name : "گزارش" } , {id : 2 , name : "کد نویسی"} , {id : 3 , name : "دیباگ"} , {id:4 , name : "دیپلوی"}]} ,
        {id : 3 , name: "انجام شده" , cards : []} ,
        {id : 4, name : "آرشیو" , cards : []} ,
    ]);

    return (
        <div className="show-list ">
            <ul className="list main-list-section" >
                {List.map((item, index) => <AppList list={item} key={index} />)}
                {/*<AppList ></AppList>
                <AppList></AppList>
                <AppList></AppList>
                <AppList></AppList>*/}
            </ul>
            {/*<CreateModal/>*/}
        </div>
    )
}