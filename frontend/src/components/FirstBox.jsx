import React from 'react'
import { Avatar } from '@mui/material';
import "./css/FirstBox.css"
import { selectUser } from '../feature/userSlice';
import {useSelector } from 'react-redux/es/hooks/useSelector';



function FirstBox({setIsModalOpen}) {
    const user = useSelector(selectUser);
    return (
        <div className="mainBox" onClick={(e)=>setIsModalOpen(true)}>
            <div className="boxAvatar">
                <Avatar 
                 src={user?.photo}/>
            </div>
            <div className="askBox">
                <p>What is your question or answer?</p>
            </div>
        </div>
    )
}

export default FirstBox