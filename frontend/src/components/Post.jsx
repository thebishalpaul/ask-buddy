import { Avatar } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import React from 'react'
import './css/Post.css'
function Post() {
    return (
        <div className="post">
            <div className="postInfo">
                <Avatar />
                <h4>Name</h4>
                <small>timestamp</small>
            </div>
            <div className="postBody">
                <div className="postQuestion">
                    <p>
                        Question Here
                    </p>
                    <button className='ansBtn'>Answer</button>
                </div>
            </div>
            <div className="postFooter">
                <div className="postFooterAction">
                    <ArrowCircleUpIcon />
                    <ArrowCircleDownIcon />
                </div>
                <InsertCommentIcon 
                style={{    marginLeft: "2rem"}}
                />
                <ShareIcon />
                <div className="postFooterRight">
                    <MoreHorizIcon />
                </div>
            </div>
            <p
                style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "12px",
                    fontWeight: "bold",
                    margin: "10px 0",
                }}
            >1 Answer(s)</p>
            <div className="postAnsDiv">
                <div className="postAnsBox">

                    <div className="answeredBy">
                        <Avatar />
                        <div className="postInfo"
                            style={{
                                margin: "0px 10px",
                                flexDirection:"column"
                            }}
                        >
                            <p>Username</p>
                            <span>Timestamp</span>
                        </div>

                    </div>

                    <div className="postAns">
                        This is test ans
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post