import React from "react";

require('./footer.scss');

interface footerI {
    theme: "light" | "dark",
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>,
}

export const Footer = (props: footerI) => {
    return (
        <footer>
            <div className={'footer'}>
                <button
                    className={(props.theme === 'light') ? 'footer__btn_theme_light' : 'footer__btn_theme_dark'}
                    onClick={() => {
                        props.setTheme(props.theme === 'light' ? 'dark' : 'light')
                    }}>theme
                </button>
                <p>info about technologies</p>
                <p><a href="https://github.com/magickspell" target={"_blank"}>GIT</a></p>
            </div>
        </footer>
    )
}