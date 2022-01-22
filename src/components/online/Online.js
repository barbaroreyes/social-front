import './online.css';

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FORDER ;
  return (
    <li className="friend">
    <div className="friendProfileContainer">
      <img className="friendProfileImage" src ={ PF + user.profilePicture} alt ='profile' />
      <span className="friendOnline"></span>
    </div>
    <span className="friendUsername">{user.username}</span>
  </li>
  );
}

export default Online;
