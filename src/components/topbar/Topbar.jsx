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
              <>
                {
                  localStorage.logged_in === undefined ||
                  localStorage.logged_in === "false"  ?
                  <>
                    <li className="topBarButton">
                      <Link
                        className="topBarOption"
                        to="/login"
                      >
                        <Button size="large" variant="text" sx={styles}>
                          Login
                        </Button>
                      </Link>
                    </li>
                  </>
                  :
                  <>
                    <li className="topBarButton">
                      <Link
                        className="topBarOption"
                        to="/profile"
                      >
                        <Button size="large" variant="text" sx={styles}>
                          Profile
                        </Button>
                      </Link>
                    </li>
                    <li className="topBarButton">
                      <Link
                        className="topBarOption"
                        to="/profile"
                      >
                        <Button 
                          size="large" 
                          variant="text" 
                          sx={styles} 
                          onClick={() => {
                            localStorage.clear();
                            history.push("/login");
                            window.location.reload();
                          }}
                        >
                          Logout
                        </Button>
                      </Link>
                    </li>
                  </>
                }
              </>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
