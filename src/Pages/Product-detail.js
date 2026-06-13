import { useParams } from "react-router-dom";
import bikes from "../Database/bikes_sample.json";
import Main_title from "../Components/Main-title";

function Product_detail() {
  const { id } = useParams();

  const mybike = bikes.find(
    (bike) => bike.id === Number(id)
  );

  if (!mybike) {
    return (
      <div className="container pt-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Main_title title={mybike.bike_name} />

      <div className="container py-5">
        <div className="row g-5">
          {/* Images Section */}
          <div className="col-lg-6">
            <div
              id={`bikeCarousel-${mybike.id}`}
              className="carousel slide"
            >
              <div className="carousel-inner">
                {mybike.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <img
                      src={image}
                      className="d-block w-100 rounded"
                      alt={mybike.bike_name}
                    />
                  </div>
                ))}
              </div>

              {mybike.images.length > 1 && (
                <>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#bikeCarousel-${mybike.id}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#bikeCarousel-${mybike.id}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="col-lg-6">
            <h1 className="mb-3">{mybike.bike_name}</h1>

            <h4 className="text-muted mb-4">
              {mybike.brand}
            </h4>

            <h2 className="text-success mb-4">
              ₹{mybike.pricing.toLocaleString("en-IN")}
            </h2>

            <div className="card mb-4">
              <div className="card-body">
                <p>
                  <strong>Model Year:</strong>{" "}
                  {mybike.model_year}
                </p>

                <p>
                  <strong>Kilometers Driven:</strong>{" "}
                  {mybike.kilometers_traveled.toLocaleString("en-IN")} km
                </p>
              </div>
            </div>

            <h5>Description</h5>
            <p>{mybike.description}</p>

            <h5>Additional Details</h5>
            <p>{mybike.content}</p>

            <button className="btn btn-primary btn-lg mt-3">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_detail;