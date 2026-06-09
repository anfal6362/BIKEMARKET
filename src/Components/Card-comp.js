
function Card_comp(props) {
    return (
        <>
            <div className="col-12 col-md-5 col-lg-4 mt-5">
                <a href="/#" className="text-decoration-none text-dark">
                    <div className="card h-100 shadow-sm">

                        <img
                            src={props.image_link}
                            className="card-img-top"
                            alt="Card Image"
                        ></img>

                        <div className="card-body">
                            <h5 className="card-title">{props.nick_name}</h5>

                            <p className="card-text">
                               {props.model}
                               {props.model_details}
                            </p>
                        </div>

                    </div>
                </a>
            </div>
        </>
    )
}
export default Card_comp;