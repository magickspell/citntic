import React, {useEffect, useState} from 'react';
import {MainPage} from "./views/MainPage/MainPage";
import "normalize.css";
import './index.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";

function App() {

    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    useEffect(() => {
        document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark')
        document.body.classList.remove(theme === 'light' ? 'theme-dark' : 'theme-light')
    }, [theme])

    return (
        <div
            className={"wrapper"}
        >
            <Navbar/>

            <MainPage/>

            <Footer
                theme={theme}
                setTheme={setTheme}
            />
        </div>
    );
}

export default App;
