import React, {useEffect, useState} from "react";
import io from 'socket.io-client';

require('./chat-page.scss')

const username = 'react'

const socket = io('http://localhost:4080/chat', {query: {userName: username}});

export const ChatPage = () => {

    const [chat, setChat] = useState<{ text: string, name: string }[]>([{name: 'bot', text: '...'}])
    const [message, setMessage] = useState<string>('')

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
            console.log('ponged')
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);

    useEffect(() => { // we need use stand alone hook cause we need update chatArray
        socket.on('message:bot', (args) => {
            console.log('message:bot')
            console.log(args)
            let newMesArr = chat.map(i => i)
            newMesArr.push({name: 'bot', text: args.rus})
            setChat(prevState => {
                return newMesArr
            });
        });

        return () => { // clear socket on action when trigger effect
            socket.off('message:bot');
        };
    }, [chat])


    const sendPing = () => {
        socket.emit('ping');
        console.log(isConnected)
        console.log(lastPong)
    }

    function HandleMessage(newMes: string) {
        let newMesArr = chat.map(i => i);
        newMesArr.push({name: username, text: newMes});
        setChat(prevState => {
            return newMesArr
        });
        setMessage('');
        socket.emit('message', {text: newMes});
    }

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
                                        if (i.name === username) {
                                            return <div className={'message_me'}
                                                        key={`message-${n}`}><span>{i.text}</span></div>
                                        } else {
                                            return <div className={'message_not-me'}
                                                        key={`message-${n}`}><span>{i.text}</span></div>
                                        }
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
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                            ></textarea>
                            <div className={"chat-page__content__grid__answer"}>
                                <div className={"chat-page__content__grid__answer__img"}>user</div>
                                <button
                                    className={message.length !== 0 ? "chat-page__content__grid__answer__btn" : 'chat-page__content__grid__answer__btn_dis'}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (message.length > 0) HandleMessage(message)
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