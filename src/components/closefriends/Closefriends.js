import React from 'react';

const Closefriends = ({user}) => {
  return (
    <li className="sidebarFriendItem">
    <img className="friendProfile"  src ={user.profilePicture} alt=""/>
    <span className="friendProfileName">{user.username}</span>
  </li>
  );
}

export default Closefriends;
