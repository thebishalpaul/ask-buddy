import { Avatar } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './css/Post.css'
function Post() {
    const [isAnsModalOpen, setIsAnsModalOpen] = useState(false);
    const closeIcon = <CloseIcon />;
    var toolbarOptions = [{ 'size': ['small', false, 'large', 'huge'] },'bold', 'italic', 'link', 'image', 'underline', 'code-block', { 'list': 'ordered' }, { 'list': 'bullet' }, ];
    const module = {
        toolbar: toolbarOptions,
    }
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
                    <button
                        className='ansBtn'
                        onClick={() => setIsAnsModalOpen(true)}
                    >Answer</button>
                    <Modal
                        open={isAnsModalOpen}
                        closeIcon={closeIcon}
                        onClose={() => setIsAnsModalOpen(false)}
                        closeOnEsc
                        center
                        closeOnOverlayClick={false}
                    >
                        <div className="modalQuestion">
                            <h1>Question Here</h1>
                            <p>Asked by <span className='name'>Username</span> on <span className='name'>timestamp</span></p>
                        </div>
                        <div className="modalAns">
                            <ReactQuill
                                modules={module}
                                placeholder='Enter your answer'
                            />
                        </div>
                        <div className="modalButtons">
                            <button className='cancel' onClick={() => setIsAnsModalOpen(false)}>
                                Cancel
                            </button>
                            <button type='submit' className='ansButton'>
                                Aswere
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="postFooter">
                <div className="postFooterAction">
                    <ArrowCircleUpIcon />
                    <ArrowCircleDownIcon />
                </div>
                <InsertCommentIcon
                    style={{ marginLeft: "2rem" }}
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
                                flexDirection: "column"
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