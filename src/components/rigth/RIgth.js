import  './rigth.css';
import {Users} from '../../data';
import Online from '../online/Online';

const Rigth = ({profile}) => {
  const PF = process.env.REACT_APP_PUBLIC_FORDER ;
  // {`${PF}like.png`}
  const HomeRigthBar = () =>  {
      return (
        <>
         <div className="birthContainer">
          <img className="birthImg"  src={`${PF}birthDay.jpg`}   alt="profile"/>
          <span className="birthText">
            <b>pepe gomez</b><hr/>and <b>3 other </b>have  a birthDay Today
          </span>
        </div>
        <img className="rigtAdd" src={`${PF}ad.png`} alt="profile"/>
        <h4 className="rigthTitle">Online Friends</h4>
        <ul className="rigthFriendsList">
         {Users.map((user,i)=>{
          return ( <Online key={i} user ={user}/>)
         })}
          
        </ul>
        </>

      )
  }
  const ProfileRightBar = () => {
    return(
      <>
      <h4 className ="rigthBarTitle">user Infomation</h4>
      <div className="rigthbarInfo">
      <div className="rigthbarInfoItem">
        <span className ='rigthbarInfoIKey'>City</span>
        <span className ='rigthbarInfoIValue'>New York</span>
      </div>
      <div className="rigthbarInfoItem">
        <span className ='rigthbarInfoIKey'>From:</span>
        <span className ='rigthbarInfoIValue'>Madrid</span>
      </div>
      <div className="rigthbarInfoItem">
        <span className ='rigthbarInfoIKey'>Relationship</span>
        <span className ='rigthbarInfoIValue'>Single</span>
      </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rigthbarfallowings">
      <div className="rigthbarfallowing">
        <img  className="rigthbarfallowingsImg" src ={`${PF}usa.jpg`} alt=''/>
        <span className ='rigthbarfallowingsName'> Bebo reyes</span>
      </div>
      <div className="rigthbarfallowing">
        <img  className="rigthbarfallowingsImg" src ={`${PF}shark.jpg`} alt=''/>
        <span className ='rigthbarfallowingsName'> Bebo reyes</span>
      </div>
      <div className="rigthbarfallowing">
        <img  className="rigthbarfallowingsImg" src ={`${PF}redcar.jpg`} alt=''/>
        <span className ='rigthbarfallowingsName'> Bebo reyes</span>
      </div>
      <div className="rigthbarfallowing">
        <img  className="rigthbarfallowingsImg" src ={`${PF}leon.jpg`} alt=''/>
        <span className ='rigthbarfallowingsName'> Bebo reyes</span>
      </div>
      <div className="rigthbarfallowing">
        <img  className="rigthbarfallowingsImg" src ={`${PF}canguro.jpg`} alt=''/>
        <span className ='rigthbarfallowingsName'> Bebo reyes</span>
      </div>
      <div className="rigthbarfallowing">
        <img  className="rigthbarfallowingsImg" src ={`${PF}orangeCar.jpg`} alt=''/>
        <span className ='rigthbarfallowingsName'> Bebo reyes</span>
      </div>
      </div>
      </>
    )
  }
  return (
    <div className ='right'>
      <div className="rigthWrapper">
       {profile ?<ProfileRightBar/> :<HomeRigthBar/>}
      </div>
    </div>
  );
}

export default Rigth;
