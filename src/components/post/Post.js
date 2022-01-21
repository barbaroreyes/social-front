import './post.css';
import { MoreVert } from '@material-ui/icons';
import {Users} from '../../data';

const Post = ({post}) => {

  return (
    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
        <div className="postLeft">
            <img className="postImage" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="profile" />
            <span className="postUserName">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
        </div>
        <div className="postRigth">
            <MoreVert/>
        </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImag" src={post.photo} alt="profile" />
        </div>
        <div className="postBottom">
        <div className="postBottomleft">
        <img className='likeIcon' src="/assets/like.png" alt="profile" />
        <img className='likeIcon' src="/assets/heart.png" alt="profile" />
        <span className='postLikeCounter'>{post.like} peorple like this post</span>

        </div>
        <div className="postBottomRigth">
            <span className='postComentText'>{post.coment} </span>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Post;
