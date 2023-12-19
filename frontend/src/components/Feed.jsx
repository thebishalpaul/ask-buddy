import React, { useEffect, useState } from 'react'
import FirstBox from './FirstBox'
import "./css/Feed.css"
import Post from './Post'
import axios from 'axios';
function Feed() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios.get('/questions')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.reverse());
      })
      .catch((error) => {
        console.log(error);
        setIsError(error.message);
      });
 
  }, []);
  return (
    <div className="feed">
      <FirstBox />
      {isError && <h2 className='error'>{isError}</h2>}
      {
        posts.map((eachPost, index) => (
          <Post
            key={index}
            eachPost={eachPost} />
        ))
      }
    </div>
  );
}

export default Feed