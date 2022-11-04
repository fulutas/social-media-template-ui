import "./profile.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineGlobeAlt,
  HiOutlineMail,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";


import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cover"
        />
        <img
          className="profilePic"
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="profile_picture"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <HiOutlineLocationMarker />
                <span>Turkey</span>
              </div>
              <div className="item">
                <HiOutlineGlobeAlt />
                <span>example.com</span>
              </div>
              </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <HiOutlineMail />
            <HiOutlineDotsHorizontal />
          </div>
        </div>
        <h5>My Posts</h5>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
