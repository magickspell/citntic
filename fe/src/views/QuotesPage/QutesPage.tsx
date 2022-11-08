import React, {useState} from "react";

require('./quotes-page.scss')

export const QuotesPage = () => {

    const [quotes, setQuotes] = useState<string[]>(['quote 1', 'quote 2'])

    return (
        <div className={"wrapper_quotes-page"}>
            <section>
                <div className={"quotes-page__content"}>

                    <article className={"quotes-page__content__text"}>
                        <p>Here is a quotes list, enjoy =)</p>
                    </article>

                    <div className={"quotes-page__content__grid"}>
                        <div className={"quotes-page__content__list"}>
                            {
                                quotes.map((i, n) => {
                                    return(
                                        <div className={"quotes-page__content__list__item"}
                                             key={n}
                                        >
                                            <article>
                                                <p>{i}</p>
                                                <i>author: author</i>
                                            </article>
                                            <div className={"quotes-page__content__list__item__btns"}>
                                                <div className={"quotes-page__content__list__item__btns_like"}>
                                                    <button>+</button>
                                                    <p>like: 4</p>
                                                </div>
                                                <div className={"quotes-page__content__list__item__btns_dislike"}>
                                                    <button>+</button>
                                                    <p>dis: 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}