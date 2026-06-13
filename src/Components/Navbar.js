function Navbar() {
  return (
    <>
      <div className="navbar-dark bg-dark">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              AARVA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Edit
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="##">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="##">
                    Sing in / Sing out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
