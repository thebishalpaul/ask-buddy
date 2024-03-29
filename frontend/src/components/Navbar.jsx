import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Input } from '@mui/material';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import topics from "../json/topics.json"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./css/Navbar.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../feature/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from "react-router-dom";


function Navbar({ setSearchInput, posts, isModalOpen, setIsModalOpen }) {

  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.value);

  const handleTopicChange = (event, newValue) => {
    setTopic(newValue);
  }

  const options = topics.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const handleSubmit = async () => {
    if (question !== "") {

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      const body = {
        questionName: question,
        topic: topic.title,
        user: user
      }
      await axios
        .post('/questions', body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = '/';
        })
        .catch((e) => {
          console.log("Error while adding question: " + e);
          alert('Error in adding question');
        })
    }
  }

  const closeIcon = <CloseIcon />;
  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth).then(() => {
        dispatch(logout())
        console.log("Logged out");
      })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };



  const filter = (e) => {
    setSearchInput(posts.filter(f => f.questionName.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <div className='nav'>
      <div className="content">
        <div className="navLogo">
          <img className='logoImg' src="https://blogger.googleusercontent.com/img/a/AVvXsEgxBSPQVcDsoUUdQFVgIqeQcDIQYp7BnF2nDH_Sktb8-YibUv_YySngFuv7VrmqAUUKf90Rqdct7FRVwr5HJZ6csu06m35oJsHVamS_K4qCYyAgkpdxYW7D8kMpqJUL7eEUGFpp2M8bnttLyukdf56CGy8N3QQWhURRK-047aqP4CQGn7oZ4xC9jaxurA=s760" alt="" srcset="" />
        </div>
        <div className="subContent1">
          <div className="navIcons">
            <a href="/"
              style={{ color: "black" }}
            >
              <HomeIcon
                sx={{ width: 33, height: 33 }}
              />
            </a>
          </div>
          <div className="aboutUs">
            <Link to="/aboutUs">About Us</Link>
          </div>
          <div className="searchBar">
            <SearchIcon />
            <input type="text" name="" id="" placeholder='Search Questions'
              onChange={filter}
            />
          </div>
        </div>

        <div className="subContent2">
          <div className="dp">
            <span onClick={handleLogout}>
              <Avatar
                alt="Remy Sharp"
                src={user?.photo}
                sx={{ width: 56, height: 56 }} />
            </span>
          </div>
          <Button variant="contained" sx={{ background: "black" }}
            onClick={
              (e) => {
                e.preventDefault();
                setIsModalOpen(true)
              }
            }
          >Ask Question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={closeIcon}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
          >
            <div className="modalTitle">
              <h5>Add Question</h5>
            </div>
            <div className="modalInfo">
              <Avatar src={user?.photo} className='avatar' />
            </div>
            <div className="modalField">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder='ask your question here...'
              />

              {/*-------------------- Select Topic------------- */}
              <Autocomplete
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                onChange={handleTopicChange}
                value={topic}
                sx={{ width: 300, marginTop: "2rem" }}
                aria-required
                renderInput={(params) =>
                  <TextField {...params} label="Select Topic" />}
                renderGroup={(params) => (
                  <li key={params.key}>
                    <h4>{params.group}</h4>
                    <p>{params.children}</p>
                  </li>
                )}
              />
              {/* ------------------------------------------------ */}

            </div>
            <div className="modalButtons">
              <button className='cancel' onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                type='submit'
                className='askButton'>
                Ask Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Navbar