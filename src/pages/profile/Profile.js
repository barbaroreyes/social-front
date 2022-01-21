import  './profile.css';
import TopBar from '../components/topbar/TopBar';
import Feed from '../components/feed/Feed';
import Sidebar from '../components/sidebar/Sidebar';
import Rigth from '../components/rigth/RIgth';
const Profile = () => {
  return (
    <>
    <TopBar/>
     <div className = 'profile'>
     <Sidebar/>
     <div className = 'profileRight'>
         <div className = 'profileRigthTop'>
             ewgp ogerg[ep r]
         </div>
         <div className = 'profileRigthBottom'>
         <Feed/>
        <Rigth/>
         </div>
    
     </div>
      
     </div>
    </>
  );
}

export default Profile;
