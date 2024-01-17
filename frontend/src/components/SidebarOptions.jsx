import React from 'react'
import "./css/SidebarOptions.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react"

function SidebarOptions({ item, setSearchInput, posts }) {
    const [open, setOpen] = useState(false);
    const filter = (e) => {
        e.preventDefault();
        setSearchInput(posts.filter(f => f.topic.includes(e.target.textContent)));
    }

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
                    {
                        item.childrens.map(
                            (child, index) =>
                                <SidebarOptions
                                    key={index}
                                    item={child}
                                    posts={posts}
                                    setSearchInput={setSearchInput}
                                />
                        )
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="sidebarItem">
                {item.icon && <img src={item.icon} alt='' height={50} width={60} />}
                <div className="sidebar-item plain" onClick={filter}>
                    {item.title}
                </div>
            </div>
        )
    }
}
export default SidebarOptions