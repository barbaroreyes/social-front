import './post.css';
import { MoreVert } from '@material-ui/icons';
const Post = () => {
  return (
    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
        <div className="postLeft">
            <img className="postImage" src="/assets/usa.jpg" alt="profile" />
            <span className="postUserName">Name</span>
            <span className="postDate">5 min ago</span>
        </div>
        <div className="postRigth">
            <MoreVert/>
        </div>
        </div>
        <div className="postCenter">
            <span className="postText">My First Post</span>
            <img className="postImag" src="/assets/caridad.jpg" alt="profile" />
        </div>
        <div className="postBottom">
        <div className="postBottomleft">
        <img  src="/assets/like.png" alt="profile" />
        <img  src="/assets/heart.png" alt="profile" />

        </div>
        <div className="postBottomRigth"></div>
        </div>
    </div>
    </div>
  );
}

export default Post;
