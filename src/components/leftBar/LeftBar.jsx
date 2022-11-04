import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { menu, yourShortcut, otherMenu } from "../../utils/constants";
import "./leftbar.scss";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePicture}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          {menu.map((menu) => (
            <div className="item" key={menu.name}>
              <img src={menu.icon} alt="menu_icon" />
              <span>{menu.name}</span>
            </div>
          ))}
          <hr />
          <div className="menu">
            <span>Your shortcuts</span>
            {yourShortcut.map((menu) => (
              <div className="item" key={menu.name}>
                <img src={menu.icon} alt="menu_icon" />
                <span>{menu.name}</span>
              </div>
            ))}
            <hr />
            <div className="menu">
              <span>Others</span>
              {otherMenu.map((menu) => (
                <div className="item" key={menu.name}>
                  <img src={menu.icon} alt="menu_icon" />
                  <span>{menu.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
