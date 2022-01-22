import React from 'react';

const Closefriends = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FORDER ;
  return (
    <li className="sidebarFriendItem">
    <img className="friendProfile"  src ={PF + user.profilePicture} alt=""/>
    <span className="friendProfileName">{user.username}</span>
  </li>
  );
}

export default Closefriends;
