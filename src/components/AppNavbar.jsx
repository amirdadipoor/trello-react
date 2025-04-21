import ThemeToggle from "./themes/ThemeToggle.jsx";

export default function AppNavbar() {
    return (
        <nav className="bg-white fixed top-0 left-0 w-full border-gray-200 stark:bg-gray-900 z-50" id="nav-style">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <ThemeToggle></ThemeToggle>
                <a href="https://github.com/amirdadipoor/trello-react" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white stark:text-white">Trello react (AMD ver)</span>
                </a>
                <div className="flex md:order-2">
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 stark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 stark:bg-gray-700 stark:border-gray-600 stark:placeholder-gray-400 stark:text-white stark:focus:ring-blue-500 stark:focus:border-blue-500" placeholder="جستوجو ..."/>
                    </div>
                </div>
            </div>
        </nav>
    );
}