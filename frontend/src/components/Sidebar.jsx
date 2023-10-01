import React from 'react'
import "./css/Sidebar.css"
import SidebarOptions from './SidebarOptions'
import items from "../json/sidebarItems.json"
function Sidebar() {
  return (
      <div className="sidebar">
          { items.map((item, index) => <SidebarOptions key={index} item={item} />) }
        </div>
  )
}

export default Sidebar