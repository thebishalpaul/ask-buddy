import React from 'react'
import "./css/SidebarOptions.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react"


function SidebarOptions({ item }) {
    const [open, setOpen] = useState(false)


    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    {/* Parent Menu */}
                    <span>
                        {item.title}
                    </span>
                    <ArrowDropDownIcon className="toggle-btn" onClick={() => setOpen(!open)} />
                    {/* ----- */}
                </div>

                {/* Sub Menu */}
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarOptions key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.icon && <img src={item.icon} alt=''/>
                }
                {item.title}
            </a>
        )
    }
}
export default SidebarOptions