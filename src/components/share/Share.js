import  './share.css';
import {PermMedia} from '@material-ui/icons'
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
          <div className="shareTop">
              <img  className = "sharePicture"src='/assets/usa.jpg' alt ='person'/>
              <input placeholder='wat in your mind' className="shareInput"/>
          </div>
          <hr className="shareHr"/>
          <div className="shareBotton">
             <div className="shareOption">
                 <PermMedia className="shareIcon"/>
                 <span className="shareOptionText">Photo or video</span>

             </div>
          </div>
      </div>
    </div>
  );
}

export default Share;
