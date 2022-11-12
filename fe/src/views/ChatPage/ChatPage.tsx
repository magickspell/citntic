import React, {useEffect, useState} from "react";
import io from 'socket.io-client';

require('./chat-page.scss')

const socket = io('http://localhost:4080/chat', {transports: ['websocket']});

export const ChatPage = () => {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState<null | string>(null);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);

    const sendPing = () => {
        socket.emit('ping');
        console.log(isConnected)
        console.log(lastPong)
    }

    const [chat, setChat] = useState<string[]>(['are u winning son?'])

    return (
        <div className={"wrapper_chat-page"}>
            <section>
                <div className={"chat-page__content"}>

                    <article className={"chat-page__content__text"}>
                        <p>...leather bag, your chat below.</p>
                    </article>

                    <div className={"chat-page__content__grid"}>
                        <div className={"chat-page__content__grid__text"}>
                            <div className={"chat-page__content__grid__text__list"}>
                                {
                                    chat.map((i, n) => {
                                        return (
                                            <p key={n}>{i}</p>
                                        )
                                    })
                                }
                            </div>
                            <div className={"chat-page__content__grid__text__img"}>
                                <img src={require("../../img/bender.jpg")} alt="robot"/>
                                <p>Robot</p>
                            </div>
                        </div>
                        <form>
                            <textarea
                                cols={30}
                                rows={8}
                            ></textarea>
                            <div className={"chat-page__content__grid__answer"}>
                                <div className={"chat-page__content__grid__answer__img"}>user</div>
                                <button className={"chat-page__content__grid__answer__btn"}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            sendPing()
                                        }}
                                >
                                    {"send"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}