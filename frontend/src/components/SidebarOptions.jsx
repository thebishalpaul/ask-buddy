import React from 'react'
import "./css/SidebarOptions.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react"

function SidebarOptions({ item }) {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1280px-RedCat_8727.jpg" alt='' height={20} width={20}/> */}
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
            <div className="sidebarItem">
                {item.icon && <img src={item.icon} alt='' height={50} width={60} />}
                <a href={item.path || "#"} className="sidebar-item plain">
                    {item.title}
                </a>
            </div>
        )
    }
}
export default SidebarOptions