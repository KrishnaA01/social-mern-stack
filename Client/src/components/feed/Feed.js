import { useEffect, useState } from "react";
import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import axios from "axios"

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/61ddfaf0317997c4a07642d8");
      console.log(res);
    }
     fetchPosts();   
  }, []);



  return (
      <div className="feed">
          <div className="feedWrapper">
            <Share/>
            {/* {Posts.map((item) => (
              <Post key={item.id} post={item} />
                ))} */}
            
            
          </div>
      </div>
  )
}
