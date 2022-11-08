import React, {useEffect, useState} from 'react';
import "normalize.css";
import './index.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Routes, useNavigate} from "react-router-dom";
import {Router} from "./app/Router/Router";

export const App = () => {

    const navigate = useNavigate()

    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    useEffect(() => {
        document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark')
        document.body.classList.remove(theme === 'light' ? 'theme-dark' : 'theme-light')
    }, [theme])

    const [page, setPage] = useState<string>(document.location.pathname)

    function HandlePage(path: string): void {
        setPage(path)
        navigate(path)
    }

    return (
        <div
            className={"wrapper"}
        >
            <Navbar
                page={page}
                HandlePage={HandlePage}
            />

            <Router/>

            <Footer
                theme={theme}
                setTheme={setTheme}
                page={page}
                HandlePage={HandlePage}
            />
        </div>

    );
}