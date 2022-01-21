import './online.css';

const Online = ({user}) => {
  return (
    <li className="friend">
    <div className="friendProfileContainer">
      <img className="friendProfileImage" src ={user.profilePicture} alt ='profile' />
      <span className="friendOnline"></span>
    </div>
    <span className="friendUsername">{user.username}</span>
  </li>
  );
}

export default Online;
