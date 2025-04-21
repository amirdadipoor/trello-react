import {Button, ListItem} from "flowbite-react";
import AppCard  from "./AppCard.jsx";

export default function AppList () {
    return (
        <li className="list-style">
            <h6 className="mb-2">عنوان لیست اول</h6>
            <ul className="drag-zone dropzone my-8 min-h-32">
                <AppCard></AppCard>
                <AppCard></AppCard>
                <AppCard></AppCard>
            </ul>
            <span className="mt-5">
                <Button type="button"
                        className="text-gray bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center stark:bg-blue-600 stark:hover:bg-blue-700 stark:focus:ring-blue-800">
                    <span className="ml-3">افزودن آیتم جدید</span>
                    <svg className="w-6 h-6 text-gray-800 stark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14m-7 7V5"/>
                    </svg>
                </Button>
            </span>
            <button className="close">
                <svg className="w-6 h-6 text-gray-800 stark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
            </button>
        </li>
    )
}