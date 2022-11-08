import {Route, Routes} from "react-router-dom";
import {MainPage} from "../../views/MainPage/MainPage";
import React from "react";
import {getRouteFunc} from "./RouterFunc";
import {ChatPage} from "../../views/ChatPage/ChatPage";
import {QuotesPage} from "../../views/QuotesPage/QutesPage";
import {SettingsPage} from "../../views/SettingsPage/SettingsPage";

export const Router = () => {
    return (
        <Routes>
            <Route element={<MainPage/>} path={getRouteFunc({code: 'main'})}/>
            <Route element={<ChatPage/>} path={getRouteFunc({code: 'chat'})}/>
            <Route element={<QuotesPage/>} path={getRouteFunc({code: 'quotes'})}/>
            <Route element={<SettingsPage/>} path={getRouteFunc({code: 'settings'})}/>
        </Routes>
    )
}