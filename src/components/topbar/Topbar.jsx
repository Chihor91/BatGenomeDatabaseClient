import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_1.png";
import history from "../../history";
import { Button } from "@mui/material";
import "./Topbar.css";
import TaxSidebar from "../sidebar/TaxSidebar";
import Sidebar from "../sidebar/Sidebar";
import AuthContext from "../../context/AuthContext";

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
    let {user, logoutUser} = useContext(AuthContext);
    const [sidebar, setSidebar] = useState(false);
    const [taxSidebar, setTaxSidebar] = useState(false);
    const [showOptions, setShowOptions] = useState(true);

    useEffect(() => {
        window.innerWidth <= 1280 ?
            setShowOptions(false)
            : setShowOptions(true)
    }, [])

    const windowResize = () => {
        window.innerWidth <= 1280 ?
            setShowOptions(false)
            : setShowOptions(true)
    }
    window.addEventListener('resize', windowResize)

    const resetSidebar = () => {
        taxSidebar && setTaxSidebar(false)
    }

    return(
        <div className="topBar" onClick={resetSidebar}>
            <div className="topLeft">
                { 
                    !showOptions && 
                    <Sidebar 
                        sidebar={sidebar} 
                        setSidebar= {setSidebar} 
                        taxSidebar={taxSidebar}
                        setTaxSidebar={setTaxSidebar}
                    /> 
                }
                <TaxSidebar sidebar={taxSidebar} setSidebar={setTaxSidebar} />
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
                        <Button size="large" variant="text" sx={styles} onClick={() => setTaxSidebar(!taxSidebar)}>
                            Taxonomy
                        </Button>
                </li>
                {
                    user ?
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
                            onClick={logoutUser}
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