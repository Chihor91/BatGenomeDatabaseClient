import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classname: "sidebar_inactive",
    };

    this.toggle_show = this.toggle_show.bind(this);
  }

  toggle_show() {
    if (this.state.classname === "sidebar_inactive") {
      this.setState({
        classname: "sidebar",
      });
    } else {
      this.setState({
        classname: "sidebar_inactive",
      });
    }
  }

  render() {
    return (
      <div className="sidebarFormat">
        <IconButton className="togglebtn" onClick={this.toggle_show} sx={{color: "#101010"}}>
          <MenuIcon/>
        </IconButton>
        {/* &emsp; <Breadcrumb Crumb={this.props.Crumb} Match={this.props.Match} /> */}
        <div className={this.state.classname} onClick={this.toggle_show}>
          <Link to="/">Home</Link>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          <Link to="/about">About</Link>
          <Link to="/strain">Strain</Link>
          <Link to="/taxonomy">Taxonomy</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}
