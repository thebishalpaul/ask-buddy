import React from 'react'
import FirstBox from './FirstBox'
import "./css/Feed.css"
import Post from './Post'

function Feed({isError,searchInput}) {
  
  return (
    <div className="feed">
      <FirstBox />
      {isError && <h2 className='error'>{isError}</h2>}
      {
        searchInput.map((eachPost, index) => (
          <Post
            key={index}
            eachPost={eachPost} />
        ))
      }
    </div>
  );
}

export default Feed