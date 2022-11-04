import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";
import Button from '../Buttons/Button'

// dummy data
const comments = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "John Doe",
    userId: 1,
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "Jane Doe",
    userId: 2,
    profilePicture:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Comments = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePicture} alt="profile_picture" />
            <input type="text" placeholder="Write a comment" />
            <Button bgColor='bgPrimary' textColor='white'>Send</Button>
        </div>
        {comments.map(comment => (
            <>
            <div className="comment">
                <img src={comment.profilePicture} alt="comment_user_img" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div> 
            </>
        ))}
    </div>
  )
};

export default Comments;
