// Quora named as Home this is the main page
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
// import Widget from './Widget'
import "./css/Home.css"
function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="allComponents">
          <Sidebar/>
          <Feed/>
          {/* <Widget/> */}
        </div>
      </div>

    </>
  )
}

export default Home