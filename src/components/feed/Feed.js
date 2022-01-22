import React ,{useState , useEffect} from 'react'
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios'

const Feed = () => {
  const [post , setPost] = useState([]);
 

  useEffect(() => {
    const fetchData = async() => {
      const res =  await axios.get('posts/timeline/61ec3711eb58ce9bdd48cace')
      setPost(res.data)
    }
    fetchData()
   
  },[])
  return (
    <div className ='feed'>
      
    <div className ='feedWrapper'>
      <Share/>
      {post.map((post , i )=>{
       return ( <Post key={i} post={post}/>)
      })}
      
      
    </div>
    </div>
  );
}

export default Feed;
