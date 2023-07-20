import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_1.png";
import history from "../../history";
import { Button } from "@mui/material";
import "./Topbar.css";
import TaxSidebar from "../sidebar/TaxSidebar";
import Sidebar from "../sidebar/Sidebar";

const styles = {
    color: "#101010",
    fontWeight: "bold",
    fontFamily: "Monospace",
    fontSize: "24px",
    '&:hover': {
      backgroundColor: "#d4b66c"
    }
};

export default function TopBar() {

    const [loggedIn, setLoggedIn] = useState(localStorage.logged_in);
    const [sidebar, setSidebar] = useState(false);
    const [showOptions, setShowOptions] = useState(true);

    useEffect(() => {
        window.innerWidth <= 1280 ?
            setShowOptions(false)
            : setShowOptions(true)
    })

    const windowResize = () => {
        window.innerWidth <= 1280 ?
            setShowOptions(false)
            : setShowOptions(true)
    }
    window.addEventListener('resize', windowResize)

    const resetSidebar = () => {
        sidebar && setSidebar(false)
    }

    return(
        <div className="topBar" onClick={resetSidebar}>
            <div className="topLeft">
                { !showOptions && <Sidebar /> }
                <TaxSidebar sidebar={sidebar} setSidebar={setSidebar} />
                <a className="logo" href="/">
                    {/* Bat Genome Database */}
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            {
                showOptions &&
                <ul className="topRight">
                <li className="topBarButton">
                    <Link  to="/">
                        <Button variant="text" sx={styles}>
                            Home
                        </Button>
                    </Link>
                </li>
                <li className="topBarButton">
                    <Link to="/about">
                        <Button size="large" variant="text" sx={styles}>
                            About
                        </Button>
                    </Link>
                </li>
                <li className="topBarButton">
                    <Link to="/strain">
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
                        <Link to="/profile">
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
                            <Link to="/login">
                                <Button size="large" variant="text" sx={styles}>
                                Login
                                </Button>
                            </Link>
                        </li>                        
                    </>
                }
            </ul>
            }
        </div>
    )
}