import  './rigth.css';
import {Users} from '../../data';
import Online from '../online/Online';
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
        <h4 className="rigthTitle">Online Friends</h4>
        <ul className="rigthFriendsList">
         {Users.map((user,i)=>{
          return ( <Online key={i} user ={user}/>)
         })}
          
        </ul>
      </div>
    </div>
  );
}

export default Rigth;
