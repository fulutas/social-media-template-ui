import Button from "../Buttons/Button";
import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <Button bgColor='bgGreen' textColor='white'>Follow</Button>
              <Button bgColor='bgRed' textColor='white'>Dismiss</Button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
             <p>
              <span>Jane Doe</span> changed their cover picture.
             </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
             <p>
              <span>Christina Luno</span> Jane doe followed.
             </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
             <p>
              <span>Ali Veli</span> uploaded new photo.
             </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
        <span>Online Friends</span>
        <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online"></div>
              <span>Christina Luno</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online"></div>
              <span>Ali Veli</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
