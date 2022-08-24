import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'; 

import "./Profile.css"
import { getProfile } from "../../JS/actions/profileActions";
import { Link } from "react-router-dom";
const Profile=()=>{
  const data = useSelector((state)=>state.userReducer.currentUser);
  const dispatch=useDispatch();
useEffect(()=> dispatch(getProfile()));
  
    return (
      <div className="container d-flex justify-content-center align-items-center">
  <div className="card">
    <div className="upper">
      <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
    </div>
    <div className="user text-center">
      <div className="profile">
        <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width={80} />
      </div>
    </div>
    <div className="mt-5 text-center">
      <h4 className="mb-0">{data.fullName}</h4>
      <span className="text-muted d-block mb-2">{data.email}</span>
      <Link to={`/editProfile/${data._id}`}>
      <button className="btn btn-primary btn-sm follow">edit</button></Link>
      <div className="d-flex justify-content-between align-items-center mt-4 px-4">
        <div className="stats">
          <h6 className="mb-0">Followers</h6>
          <span>8,797</span>
        </div>
        <div className="stats">
          <h6 className="mb-0">Projects</h6>
          <span>142</span>
        </div>
        <div className="stats">
          <h6 className="mb-0">Ranks</h6>
          <span>129</span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
    }

export default Profile;