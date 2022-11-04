import { useContext } from "react";
import {
  HiOutlineHome,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineViewGrid,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineBell

} from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { DarkModeContext } from "../../context/darkModeContext";

import "./navbar.scss";

const Navbar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to='/'>
          <span>Brave Social.</span>
        </Link>
        <Link to='/'>
          <HiOutlineHome />
        </Link>
          {darkMode ? <HiOutlineSun onClick={toggle} /> : <HiOutlineMoon onClick={toggle} /> }
          <HiOutlineViewGrid />
      </div>
      <div className="center">
         <div className="search">
            <HiOutlineSearch />
            <input type="text" placeholder="Search..." />
          </div>
      </div>
      <div className="right">
      <HiOutlineUser />
      <HiOutlineMail />
      <HiOutlineBell />
      <div className="user">
        <img src={currentUser.profilePicture} alt="" />
        <span>{currentUser.name}</span>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
