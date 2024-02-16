import "./styles.scss"

export const Marquee = () => {
    return (
        <div className="marquee">
            <div className="marquee__line above">
                <span className="marquee__text">
                    FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
                </span>
                <span className="marquee__text">
                    FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
                </span>
            </div>
            <div className="marquee__line below">
                <span className="marquee__text">
                    FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
                </span>
                <span className="marquee__text">
                    FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
                </span>
            </div>
        </div>
    )
}