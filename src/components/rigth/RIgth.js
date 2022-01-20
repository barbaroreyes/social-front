import  './rigth.css';

const Rigth = () => {
  return (
    <div className ='right'>
      <div className="rigthWrapper">
        <div className="birthContainer">
          <img className="birthImg"  src='/assets/birthDay.jpg'   alt="profile"/>
          <span className="birthText">
            <b>pepe gomez</b><hr/>and <b>3 other </b>have  a birthDay Today
          </span>
        </div>
        <img className="rigtAdd" src='/assets/ad.png' alt="profile"/>
        <h4 className="rigth">Online Frieds</h4>
        <ul className="rigthFriendsList">
          <li className="friend">
            <div className="friendProfileContainer">
              <img className="friendProfileImage" src ='/assets/ratoncito.jpg' alt ='profile' />
              <span className="friendOnline"></span>
            </div>
            <span className="friendUsername">Papo Reyes</span>
          </li>
          <li className="friend">
            <div className="friendProfileContainer">
              <img className="friendProfileImage" src ='/assets/ratoncito.jpg' alt ='profile' />
              <span className="friendOnline"></span>
            </div>
            <span className="friendUsername">Papo Reyes</span>
          </li>
           <li className="friend">
            <div className="friendProfileContainer">
              <img className="friendProfileImage" src ='/assets/ratoncito.jpg' alt ='profile' />
              <span className="friendOnline"></span>
            </div>
            <span className="friendUsername">Papo Reyes</span>
          </li>
          <li className="friend">
            <div className="friendProfileContainer">
              <img className="friendProfileImage" src ='/assets/ratoncito.jpg' alt ='profile' />
              <span className="friendOnline"></span>
            </div>
            <span className="friendUsername">Papo Reyes</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rigth;
