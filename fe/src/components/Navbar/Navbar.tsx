import React from "react";

require('./navbar.scss')

export const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <button>Butler</button>
            <button>Quotes</button>
            <button>Chat</button>
        </nav>
    )
}