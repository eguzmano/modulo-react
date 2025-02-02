import formatNumber from "../utils/formatNumber";
import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Pizzería Mamma Mia!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="btn btn-outline-light"
                aria-current="page"
                href="#"
              >
                🍕 Home
              </a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="btn btn-outline-light" href="#">
                    🔓 Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-light" href="#">
                    🔒 Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="btn btn-outline-light" href="#">
                    🔐 Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-light" href="">
                    🔐 Register
                  </a>
                </li>
              </>
            )}
          </ul>
          <button className="btn btn-outline-light" type="submit">
            🛒 Total: ${formatNumber(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
