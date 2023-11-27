import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import "./css/Home.css"
function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="allComponents">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </>
  )
}

export default Home