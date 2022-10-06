import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { counterContext } from "./../context/context";

export default function Nav() {
  const list = useSelector((state) => state.favorit.favouritsMovie);

  const click = useContext(counterContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top opacity-75">
      <div className="container">
        <Link className="navbar-brand" to="movies">
          Movielist
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link mx-3 active" to="favorits">
                <span>{list.length > 0 ? list.length : ""}</span>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="LogIn">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
