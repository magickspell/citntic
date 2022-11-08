import React from "react";
import {useNavigate} from "react-router-dom";

require('./footer.scss');

interface footerI {
    theme: "light" | "dark",
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>,
    page: string,
    HandlePage: (path: string) => void,
}

export const Footer = (props: footerI) => {

    // const navigate = useNavigate()

    return (
        <footer>
            <div className={'footer'}>
                <button
                    className={(props.theme === 'light') ? 'footer__btn_theme_light' : 'footer__btn_theme_dark'}
                    onClick={() => {
                        props.setTheme(props.theme === 'light' ? 'dark' : 'light')
                    }}>theme
                </button>
                <p className={'footer__btn_settings'}
                   onClick={() => {props.HandlePage('/settings')}}
                >settings</p>
                <p><a href="https://github.com/magickspell" target={"_blank"}>GIT</a></p>
            </div>
        </footer>
    )
}