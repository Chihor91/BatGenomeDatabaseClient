import React, { Component } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import history from "../..//history";
import Sidebar from "../sidebar/Sidebar";
import { Button } from "@mui/material";

console.log("topbar logged_in", localStorage.logged_in);

const styles = {
  color: "#101010",
  fontWeight: "bold",
  fontFamily: "Monospace",
  fontSize: 20,
  '&:hover': {
    backgroundColor: "#d4b66c"
  }
};

export default class Topbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: localStorage.logged_in,
    };
  }

  componentDidMount() {
    this.setState({
      login: localStorage.logged_in,
    });
  }

  render() {
    return (
      <div className="topBar">
        <div className="topBarWrapper">
          <div className="topLeft">
            <Sidebar />
            <h1>
              <a className="logo" href="/">
                Bat Genome Database
              </a>
            </h1>
          </div>
          <div className="topRight">
            <ul className="pages">
              <li className="topBarButton">
                
                <Link className="topBarOption" to="/">
                  <Button size="large" variant="text" sx={styles}>
                    Home
                  </Button>
                </Link>
              </li>
              <li className="topBarButton">
                <Link className="topBarOption" to="/dashboard">
                <Button size="large" variant="text" sx={styles}>
                    Dashboard
                  </Button>
                </Link>
              </li>
              <li className="topBarButton">
                <Link className="topBarOption" to="/about">
                <Button size="large" variant="text" sx={styles}>
                    About
                  </Button>
                </Link>
              </li>
              <li className="topBarButton">
                <Link className="topBarOption" to="/strain">
                <Button size="large" variant="text" sx={styles}>
                    Strain
                  </Button>
                </Link>
              </li>
              <li className="topBarButton">
                <Link className="topBarOption" to="/taxonomy">
                <Button size="large" variant="text" sx={styles}>
                    Taxonomy
                  </Button>
                </Link>
              </li>
              <li className="topBarButton">
                <Link
                  className="topBarOption"
                  to={
                    localStorage.logged_in === undefined ||
                    localStorage.logged_in === "false"
                      ? "/login"
                      : "/profile"
                  }
                >
                  <Button size="large" variant="text" sx={styles}>
                  {
                    localStorage.logged_in === undefined ||
                    localStorage.logged_in === "false"
                      ? "Login"
                      : "Profile"
                  }
                  </Button>
                </Link>
              </li>
              {localStorage.logged_in === undefined ||
              localStorage.logged_in === "false" ? (
                <div></div>
              ) : (
                <li
                  className="topBarButton"
                  onClick={() => {
                    localStorage.clear();
                    history.push("/login");
                    window.location.reload();
                  }}
                >
                  <Link className="topBarOption" to="/home">
                    <svg
                      className="w-6 h-6 logout_button"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
