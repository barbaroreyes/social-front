import React ,{useState , useEffect} from 'react'
import './post.css';
import { MoreVert } from '@material-ui/icons';
import {format} from 'timeago.js' 
import {Link} from 'react-router-dom'
import axios from 'axios';

const Post = ({post}) => {
const [like ,setLike] = useState(post.likes.length)
const [isLike ,setIsLike] = useState(false)
const [user ,setUser] = useState({})
const PF = process.env.REACT_APP_PUBLIC_FORDER ;

useEffect(() => {
  const fetchUser = async() => {
    const res =  await axios.get(`/users/${post.userId}`)
    setUser(res.data)
  }
  fetchUser()
},[post.userId])

 const LikeHandle = () => {
     setLike(isLike ? like - 1 : like + 1)
     setIsLike(!isLike)
}
  return (
    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
        <div className="postLeft">
          <Link to ={`profile/${user.userName}`}>
            <img className="postImage" src={ user.profilePicture || PF + 'noAvatar.png'} alt="profile" />
            </Link>
            <span className="postUserName">{user.userName}</span>
            <span className="postDate">{ format(post.createdAt) }</span>
        </div>
        <div className="postRigth">
            <MoreVert/>
        </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img className="postImag" src={PF + post.img} alt="profile" />
        </div>
        <div className="postBottom">
        <div className="postBottomleft">
        <img className='likeIcon' src={`${PF}like.png`} onClick={LikeHandle}  alt="profile" />
        <img className='likeIcon' src={`${PF}heart.png`} alt="profile" />
        <span className='postLikeCounter'>{like} peorple like this post</span>

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
