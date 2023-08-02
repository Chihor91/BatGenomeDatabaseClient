import React, { useContext } from "react";
import "./Profile.css";
import AuthContext from "../../context/AuthContext";

export default function Profile(){
  let { user } = useContext(AuthContext)
    return (
      <div className="profile_container">
        <div className="profile_header">
          <div className="profile_header_left">
            <div className="pic_container">picture</div>
            <div className="name_container">
              {user.first_name} {user.last_name}
            </div>
          </div>

          <div className="profile_header_right"></div>
        </div>

        <div className="profile_information">
          <div className="profile_item">
            username <i>{user.username}</i>
          </div>
          <div className="profile_item">
            email <i>{user.email}</i>
          </div>
          <div className="profile_item">
            mobile_number <i>{user.mobile_number}</i>
          </div>
          <div className="profile_item">
            landline_number <i>{user.landline_number}</i>
          </div>
          <div className="profile_item">
            address <i>{user.address}</i>
          </div>
          <div className="profile_item">
            role <i>{user.role}</i>
          </div>
        </div>
      </div>
    );
}