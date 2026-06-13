import Main_title from "../Components/Main-title";
import Navbar from "../Components/Navbar";
import Card_comp from "../Components/Card-comp";
import bikes from '../Database/bikes_sample.json'
function Home() {
  return (
    <>
      <Main_title title="!THE BIKE MARKET PLACE!"></Main_title>
      <div className="container">
        <div className="row d-flex flex-wrap g-2">
          {bikes.map((bike) => (
            <Card_comp
              key={bike.id}
              id={bike.id}
              bikeName={bike.bike_name}
              brand={bike.brand}
              thumbnailImage={bike.thumbnail_image}
              images={bike.images}
              description={bike.description}
              content={bike.content}
              pricing={bike.pricing}
              modelYear={bike.model_year}
              kilometersTraveled={bike.kilometers_traveled}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;