 import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useEffect } from "react";

export default function TaxSidebar({ sidebar, setSidebar }){
    const [active, setActive] = useState("sidebar_inactive")
    useEffect(() =>
      sidebar ? setActive("sidebar") : setActive("sidebar_inactive")
    , [sidebar])
    return (
      <div className="sidebarFormat" onClick={() => setSidebar(!sidebar)}>
        <div className={active}>
          <Link to="/taxonomy/domain">Domain</Link>
          <Link to="/taxonomy/phylum">Phylum</Link>
          <Link to="/taxonomy/class">Class</Link>
          <Link to="/taxonomy/order">Order</Link>
          <Link to="/taxonomy/family">Family</Link>
          <Link to="/taxonomy/genus">Genus</Link>
          <Link to="/taxonomy/species">Species</Link>
        </div>
      </div>
    )
}
