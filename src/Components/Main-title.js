import bgImage from "../Photos/at.jpeg";
function Main_title(props) {
  return (
    <>
      <section className="main-title d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center">
          <h1 className="text-center pt-5 pb-5">{props.title}</h1>
        </div>
      </section>
    </>
  );
}
export default Main_title;