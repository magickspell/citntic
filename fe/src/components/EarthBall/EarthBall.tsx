require("./earth-ball.scss")

// https://atuin.ru/blog/vrashhayushhijsya-zemnoj-shar/

export const EarthBall = () => {
    return(
        <div className="globe-container">
            <div className="globe">
                <div className="globe-sphere"></div>
                <div className="globe-outer-shadow"></div>
                <div className="globe-worldmap">
                    <div className="globe-worldmap-back"></div>
                    <div className="globe-worldmap-front"></div>
                </div>
                <div className="globe-inner-shadow"></div>
            </div>
        </div>
    )
}