import React, { useEffect } from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
function UpVoteDownVote(props) {

    if (props.question) {
        const body = {
            question: props.questionId,
            user: props.user
        }
    } else {
        const body = {
            answer: props.ans?._id,
            user: props.user
        }
    }
    // fetch upVotes downVotes
    useEffect(() => {
        axios.post('/get')
    }, [])
    return (
        <div className="postFooterAction">
            <ArrowCircleUpIcon
                onClick
            />
            <p>4</p>
            <ArrowCircleDownIcon
                className='downVote'
                onClick
            />
            <p>5</p>
        </div>
    )
}

export default UpVoteDownVote