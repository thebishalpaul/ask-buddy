import React from 'react'
import "./css/Sidebar.css"
import SidebarOptions from './SidebarOptions'
import items from "../json/sidebarItems.json"

function Sidebar({ setSearchInput, posts }) {
  return (
    <div className="sidebar">
      {
        items.map((item, index) =>
          <SidebarOptions
            key={index}
            item={item}
            setSearchInput={setSearchInput}
            posts={posts}
          />)
      }
    </div>
  )
}

export default Sidebar