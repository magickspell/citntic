import React, {useState} from "react";
import {EarthBall} from "../../components/EarthBall/EarthBall";

require('./main-page.scss')

export const MainPage = () => {

    function submitQuestion() {
        console.log('submit')
    }
    const [question, setQuestion] = useState<string>('')

    return (
        <div className={"wrapper_main-page"}>
            <section>
                <div className={"main-page__content"}>

                    <article className={"main-page__content__text"}>
                        <p>Greetings, stranger.</p>
                        <h1>I am Butler... Ask me anything you want, and may be i will help you...</h1>
                        <h2>Also, you can read some random quotes and chat with my mmm... robot.</h2>
                    </article>

                    <div className={"main-page__content__ball_grid"}>
                        <div className={"main-page__content__ball"}>
                            <EarthBall/>
                        </div>
                        <div className={"main-page__content__form"}>
                            <textarea
                                placeholder={"answer will be here..."}
                                name="answer"
                                cols={30}
                                rows={4}
                            />
                            <form>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    submitQuestion()
                                }}>Ask
                                </button>
                                <input
                                    placeholder={"input question"}
                                    type="text"
                                    value={question}
                                    onChange={(e) => {
                                        setQuestion(e.currentTarget.value)
                                    }}
                                />
                            </form>
                        </div>
                    </div>

                    <div className={"main-page__content__quote"}>
                        "random quote" - author
                    </div>
                </div>
            </section>
        </div>
    )
}