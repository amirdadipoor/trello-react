import AppList from "./AppList.jsx"

export default function ApplicationBody() {
    return (
        <div className="show-list ">
            <ul className="list main-list-section" >
                <AppList></AppList>
                <AppList></AppList>
                <AppList></AppList>
                <AppList></AppList>
            </ul>
        </div>
    )
}