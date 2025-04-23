import useTheme from "../hooks/UseTheme.jsx";

const ThemeToggle = () => {
    const [theme, setTheme] = useTheme();

    return (
        // <button
        //     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        //     className="p-2 rounded-md border bg-gray-200 dark:bg-gray-700"
        // >
        //     {theme === "dark" ? "🌙" : "☀️"}
        // </button>

        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} type="button" aria-label="Toggle dark mode" data-testid="dark-theme-toggle"
                className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                 stroke="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-label="Currently dark mode"
                 className="h-5 w-5 hidden dark:block">
                <path fillRule="evenodd" stroke="none"
                      d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z"
                      clipRule="evenodd"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 20 20"  aria-label="Currently light mode" className="h-5 w-5 dark:hidden">
                <path stroke="none" d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"></path>
            </svg>
        </button>
    );
}

export default ThemeToggle