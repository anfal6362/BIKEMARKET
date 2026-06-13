
import { Link } from "react-router-dom";
function Card_comp(props) {
    return (
        <>
            <div className="col-12 col-md-5 col-lg-4 mt-5">
                <Link to={"/"+props.id} className="text-decoration-none text-dark">
                    <div className="card h-100 shadow-sm">

                        <img
                            src={props.thumbnailImage}
                            className="card-img-top"
                            alt="Card Image"
                        ></img>

                        <div className="card-body">
                            <h5 className="card-title">{props.bikeName}</h5>

                            <p className="card-text">
                               {props.modelYear}
                               {props.kilometersTraveled}
                            </p>
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}
export default Card_comp;