import  './profile.css';
import TopBar from '../../components/topbar/TopBar';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rigth from '../../components/rigth/RIgth';
const Profile = () => {
  
  return (
    <>
    <TopBar/>
     <div className = 'profile'>
     <Sidebar/>
     <div className = 'profileRight'>
         <div className = 'profileRigthTop'>
             <div className = 'profileCover'>
             <img className = 'profileCoverImg' src='/assets/post/028.jpg' alt=''/>
             <img className = 'profileUserimg' src='/assets/usa.jpg' alt=''/>
             </div>
            <div className = 'profileInfo'>
                <h4 className = 'profileInfoName'>Name</h4>
                <p className = 'profileInfoDesc'>Hello my friend</p>
            </div>
         </div>
         <div className = 'profileRigthBottom'>
             
         <Feed/>
        <Rigth profile/>
         </div>
    
     </div>
      
     </div>
    </>
  );
}

export default Profile;
