import  './share.css';
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
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
            <div className="shareOptions">
            <div className="shareOption">
                 <PermMedia htmlColor='tomato' className="shareIcon"/>
                 <span className="shareOptionText">Photo or video</span>

             </div>
             <div className="shareOption">
                 <Label  htmlColor='tomato' className="shareIcon"/>
                 <span className="shareOptionText">Tag</span>

             </div>
             <div className="shareOption">
                 <Room htmlColor='tomato' className="shareIcon"/>
                 <span className="shareOptionText">Location</span>

             </div>
             <div className="shareOption">
                 <EmojiEmotions htmlColor='tomato' className="shareIcon"/>
                 <span className="shareOptionText">Feeling</span>

             </div>
             <div className="shareOption">
                 <PermMedia htmlColor='tomato' className="shareIcon"/>
                 <span className="shareOptionText">Photo or video</span>

             </div>
            </div>
             
          </div>
      </div>
    </div>
  );
}

export default Share;
