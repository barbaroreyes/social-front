import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import {Posts} from '../../data'
const Feed = () => {
  
  return (
    <div className ='feed'>
    <div className ='feedWrapper'>
      <Share/>
      {Posts.map((post , i )=>{
       return ( <Post key={i} post={post}/>)
      })}
      
      
    </div>
    </div>
  );
}

export default Feed;
