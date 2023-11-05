import React from 'react'
import { Avatar } from '@mui/material';
import "./css/FirstBox.css"
function FirstBox() {
    return (
        <div className="mainBox">
            <div className="boxAvatar">
                <Avatar />
            </div>
            <div className="askBox">
                <p>What is your question or answere?</p>
            </div>
        </div>
    )
}

export default FirstBox