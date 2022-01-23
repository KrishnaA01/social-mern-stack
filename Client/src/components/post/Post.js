import { useState } from "react";
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../Data"


export default function Post({post}) {
    
  const [like,setLike] = useState(post.like)
  const [isLike,setIsLike] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  const likeHandler = () => {
        setLike(isLike ? like -1 : like + 1)
        setIsLike(!isLike)
  }


  return (
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                      <span className="postUsername">
                          {Users.filter((u)=>u.id === post?.userId)[0].username}
                          </span>
                      <span className="postDate">{post.date}</span>
                  </div>
                  <div className="postTopRight">
                  <MoreVertIcon/>
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">{post?.desc}</span>
                  <img className="postImg" src={PF+post.photo} alt="" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img onClick={likeHandler} className="likeIcon" src={`${PF}like.png`} alt="" />
                      <img onClick={likeHandler} className="likeIcon" src={`${PF}heart.png`} alt="" />
                      <span className="postLikeCounter">{like} people liked it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">{post.comment} comments</span>
                  </div>
              </div>
          </div>
      </div>
  )
}
