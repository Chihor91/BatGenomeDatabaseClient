import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import AuthContext from "../../context/AuthContext";

export default function Sidebar({ sidebar, setSidebar, taxSidebar, setTaxSidebar }) {
  let {user, logoutUser} = useContext(AuthContext)
  const [active, setActive] = useState("sidebar_inactive");
  useEffect(() => {
    sidebar ? setActive("sidebar") : setActive("sidebar_inactive")
  })

  return(
    <div className="sidebarFormat">
        <IconButton className="togglebtn" onClick={() => setSidebar(!sidebar)} sx={{color: "#101010"}}>
          <MenuIcon/>
        </IconButton>
        {/* &emsp; <Breadcrumb Crumb={this.props.Crumb} Match={this.props.Match} /> */}
        <div className={active} onClick={() => setSidebar(!sidebar)}>
          <Link to="/">Home</Link>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          <Link to="/about">About</Link>
          <Link to="/strain">Strain</Link>
          <a onClick={() => setTaxSidebar(!taxSidebar)}>Taxonomy</a>
          {
            user ?
            <>
            <Link to="/profile">Profile</Link>
            <a onClick={logoutUser}>Logout</a>
            </>
            :
            <Link to="/login">Login</Link>
          }
        </div>
    </div>
  );
}