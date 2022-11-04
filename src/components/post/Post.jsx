import "./post.scss";
import {
  HiOutlineDotsHorizontal,
  HiOutlineHeart,
  HiHeart,
  HiOutlineChat,
  HiOutlineShare,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  //dummmy
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePicture} alt="profile_picture" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <HiOutlineDotsHorizontal />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="post_img" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <HiHeart /> : <HiOutlineHeart />}
            30 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <HiOutlineChat />1 Comments
          </div>
          <div className="item">
            <HiOutlineShare />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
