const CardLoader = () => {
    return (
        <div className="cards__item">
            <div className="cards__card card">
                <div className="card__group">
                    <div className="card__theme _loader">
                        <p className="_loader" style={{ width: "82px" }}></p>
                    </div>

                        <div className="_loader" style={{ width: "18px", height: "4px"}}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                </div>
                <div className="card__content">
                    <a href="" target="_blank">
                        <h3 className="card__title _loader" style={{ width: "113px", height: "13px"}}></h3>
                    </a>
                    <div className="card__date  _loader" style={{ width: "58px", height: "13px"}}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardLoader;