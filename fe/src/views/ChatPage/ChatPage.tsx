import React, {useState} from "react";


require('./chat-page.scss')

export const ChatPage = () => {

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