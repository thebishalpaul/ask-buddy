import React from 'react'
import FirstBox from './FirstBox'
import "./css/Feed.css"
import Post from './Post'
function Feed() {
  return (
    <div className="feed">
      <FirstBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed