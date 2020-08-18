import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Auth } from 'aws-amplify';



const Navbar = ({history}) => {
  const [isOpen, setOpen] = useState(false);

  const goHome = () => {
    console.log(history)
    history.push("/");
  };

  const signOut = () => {
    Auth.signOut();
  }

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              List
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/new"
            >
              New
            </NavLink>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-white" onClick={goHome}>
                  Home
                </button>
                <button className="button is-white" onClick={signOut}>
                  Logout
                </button>
                {/*<AmplifySignOut className="button is-white"/>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
