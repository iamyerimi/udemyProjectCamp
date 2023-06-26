import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  yerim: {
    id: 1,
    name: "Yerim Son",
    description: "still working...",
  },
  harry: {
    id: 2,
    name: "minho",
    description: "Chairman of the insideOut.",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
    const profile = ProfileData[username];

//   console.log('username:', username);
//   console.log('useParams:', useParams());
//   console.log('useNavigate:', useNavigate());
  return (<div>
    <h3>{profile.name}({username}) is... {profile.description}</h3>
    <div onClick={() => navigate(-1)}>뒤로가기</div>
    
  </div>);
};

export default Profile;
