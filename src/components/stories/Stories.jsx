import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { HiPlus } from "react-icons/hi";

import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  // Dummy data
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story my-user">
        <img src={currentUser.profilePicture} alt="" />
        <p>{currentUser.name}</p>
        <button>
            <HiPlus />
        </button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
