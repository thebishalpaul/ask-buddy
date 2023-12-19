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
import ReactTimeAgo from 'react-time-ago';
import './css/Post.css'
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

function LastSeen({ date }) {
    return (
        <div>
            <ReactTimeAgo date={date}
                locale="en-US"
                timeStyle="round"
            />
        </div>
    )
}
function Post({ eachPost }) {
    const [isAnsModalOpen, setIsAnsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const [toggle, setToggle] = useState(false);

    const user = useSelector(selectUser);

    const handleQuill = (value) => {
        setAnswer(value);
    }

    console.log(answer);

    const handleSubmit = async () => {
        if (eachPost?._id && answer !== "") {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const body = {
                answer: answer,
                questionId: eachPost?._id,
                user: user,
            }
            await axios.post('/answers', body, config)
                .then((res) => {
                    console.log(res.data);
                    alert("Answer added successfully");
                    window.location.href = '/'
                })
                .catch((error) => {
                    console.log("Error in post ans " + error);
                })
        }
    }
    const closeIcon = <CloseIcon />;
    var toolbarOptions = [{ 'size': ['small', false, 'large', 'huge'] }, 'bold', 'italic', 'link', 'image', 'underline', 'code-block', { 'list': 'ordered' }, { 'list': 'bullet' },];
    const module = {
        toolbar: toolbarOptions,
    }
    return (
        <div className="post">
            <div className="postInfo">
                <Avatar src={eachPost?.user?.photo} />
                <h4>{eachPost?.user?.userName}</h4>
                <small>
                    <LastSeen
                        date={eachPost?.createdAt}
                    />
                </small>
            </div>
            <div className="postBody">
                <div className="postQuestion">
                    <p>
                        {eachPost?.questionName}
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
                            <h1>{eachPost?.questionName}</h1>
                            <p>Asked by <span className='name'>{eachPost?.user?.userName}</span> on <span className='name'>{new Date(eachPost?.createdAt).toLocaleString()}</span></p>
                        </div>
                        <div className="modalAns">
                            <ReactQuill
                                modules={module}
                                placeholder='Enter your answer'
                                value={answer}
                                onChange={handleQuill}
                            />
                        </div>
                        <div className="modalButtons">
                            <button className='cancel' onClick={() => setIsAnsModalOpen(false)}>
                                Cancel
                            </button>
                            <button type='submit' className='ansButton'
                                onClick={handleSubmit}
                            >
                                Aswere
                            </button>
                        </div>
                    </Modal>
                </div>
                {/* image here of post */}
                {/* {
                   eachPost.imageUrl && <img src="" alt="" srcset="" />
                } */}
            </div>
            <div className="postFooter">
                <div className="postFooterAction">
                    <ArrowCircleUpIcon />
                    <ArrowCircleDownIcon />
                </div>
                <InsertCommentIcon
                    style={{ marginLeft: "2rem" }}
                    onClick={() => setToggle(!toggle)}
                />
            </div>
            <p
                style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "12px",
                    fontWeight: "bold",
                    margin: "10px 0",
                }}
            >
                Answer {eachPost?.allAnswersToQuestion.length}
            </p>
            <div className="postAnsDiv">
                {
                    toggle && eachPost?.allAnswersToQuestion?.map((a) => (
                        <>
                            <div className="postAnsBox">
                                <div className="answeredBy">
                                    <Avatar src={a?.user?.photo} />
                                    <div className="postInfo"
                                        style={{
                                            margin: "0px 10px",
                                            flexDirection: "column"
                                        }}
                                     >
                                        <p>{a.user?.userName}</p>
                                        <span>
                                            <LastSeen
                                                date={a?.createdAt}
                                            />
                                        </span>
                                    </div>
                                </div>

                                <div className="postAns">
                                    {ReactHtmlParser(a?.answer)}
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </div>
    )
}

export default Post