import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

require('./navbar.scss')

interface navbarPropsI {
    page: string,
    HandlePage: (path: string) => void,
}

export const Navbar = (props: navbarPropsI) => {

    const navigate = useNavigate()

    return (
        <nav className={'navbar'}>
            <button
                className={(props.page === '/') ? 'active' : ''}
                onClick={() => {
                    props.HandlePage('/')
                }}
            >Butler
            </button>

            <button
                className={(props.page === '/quotes') ? 'active' : ''}
                onClick={() => {
                    props.HandlePage('/quotes')
                }}
            >Quotes
            </button>

            <button
                className={(props.page === '/chat') ? 'active' : ''}
                onClick={() => {
                    props.HandlePage('/chat')
                }}
            >Chat
            </button>
        </nav>
    )
}