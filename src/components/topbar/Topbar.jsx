import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_1.png";
import history from "../../history";
import { Button } from "@mui/material";
import "./Topbar.css";
import TaxSidebar from "../sidebar/TaxSidebar";

const styles = {
    color: "#101010",
    fontWeight: "bold",
    fontFamily: "Monospace",
    fontSize: "1.5vw",
    '&:hover': {
      backgroundColor: "#d4b66c"
    }
};

export default function TopBar() {

    const [loggedIn, setLoggedIn] = useState(localStorage.logged_in);
    const [sidebar, setSidebar] = useState(false);


    return(
        <div className="topBar">
            <div className="topLeft">
                <TaxSidebar sidebar={sidebar} setSidebar={setSidebar} />
                <a className="logo" href="/">
                    {/* Bat Genome Database */}
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="topRight">
                <ul className="pages">
                    <li className="topBarButton">
                        <Link className="topBarOption" to="/">
                            <Button variant="text" sx={styles}>
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
                            <Button size="large" variant="text" sx={styles} onClick={() => setSidebar(!sidebar)}>
                                Taxonomy
                            </Button>
                    </li>
                    {
                        loggedIn ?
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
                            </li>
                        </>
                        :
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
                    }
                </ul>
            </div>
        </div>
    )

}