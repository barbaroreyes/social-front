import './topbar.css';
import {Link} from 'react-router-dom'
import {Search , Person ,Chat, Notifications} from '@material-ui/icons'
const TopBar = () => {
  return (
    <div className="topBarContainer">
     <div className="topBar-left">
         <Link to='/' style ={{textDecoration:'none'}}>
         <span className="logo">Example-Social</span>
         </Link>
         
         </div>
     <div className="topBar-center">
         <div className="searchbar">
             <Search className='searchIncon'/>
             <input type="text" className="inputSearch" placeholder="Search fror friend or post , video"/>
         </div>
         </div>
     <div className="topBar-rigth">
     <div className='topbarlinks'>HomePage</div>
     <div className='topbarlinks'>TimeLine</div>
     <div className='topbaricons'>
         <div className='topbariconsItems'>
         <Person/>
         <span className='topbarIconBadge'>1</span>
         </div>
         <div className='topbariconsItems'>
         <Chat/>
         <span className='topbarIconBadge'>2</span>
         </div>
         <div className='topbariconsItems'>
         <Notifications/>
         <span className='topbarIconBadge'>3</span>
         </div>
     </div>
     <img src='/assets/usa.jpg' className="imageProfile " alt="alt" />
         </div>
    </div>
  );
}

export default TopBar;
