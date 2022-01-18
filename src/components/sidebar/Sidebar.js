import './sidebar.css';
import { RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School} from '@material-ui/icons'

const Sidebar = () => {
  return (
    <div className ='sidebar'>
      <div className='sideWrapper'>
        <ul className='sidebarList'>
        <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="slideButton">Show More</button>
        <hr className="slideHr"/>
        <ul className="friendsList">
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/grencar.jpg"/>
            <span className="friendProfileName">name1</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/shark.jpg"/>
            <span className="friendProfileName">name2</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/redcar.jpg"/>
            <span className="friendProfileName">name3</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/orangeCar.jpg"/>
            <span className="friendProfileName">name4</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/profile.jpg"/>
            <span className="friendProfileName">name5</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/grencar.jpg"/>
            <span className="friendProfileName">name1</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/shark.jpg"/>
            <span className="friendProfileName">name2</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/redcar.jpg"/>
            <span className="friendProfileName">name3</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/orangeCar.jpg"/>
            <span className="friendProfileName">name4</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/profile.jpg"/>
            <span className="friendProfileName">name5</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/grencar.jpg"/>
            <span className="friendProfileName">name1</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/shark.jpg"/>
            <span className="friendProfileName">name2</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/redcar.jpg"/>
            <span className="friendProfileName">name3</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/orangeCar.jpg"/>
            <span className="friendProfileName">name4</span>
          </li>
          <li className="sidebarFriendItem">
            <img className="friendProfile" alt="profile" src="/assets/profile.jpg"/>
            <span className="friendProfileName">name5</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;