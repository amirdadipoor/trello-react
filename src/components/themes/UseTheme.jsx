import { useState, useEffect } from "react";

const useTheme = () => {
    // Function to detect system theme
    const getSystemTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    // Retrieve saved theme or detect system theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || getSystemTheme()
    );

    // Apply theme when it changes
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
};

export default useTheme;