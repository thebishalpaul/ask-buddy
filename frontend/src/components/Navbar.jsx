//Header named as Navbar
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Input } from '@mui/material';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SelectTopic from "./SelectTopic"
import topics from "../json/topics.json"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./css/Navbar.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from '../feature/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState("");
  const dispatch = useDispatch();

  // const [inputUrl,setInputUrl]=useState("");
  const handleTopicChange = (event, newValue) => {
    setTopic(newValue);
    // console.log(newValue.title);
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
        topic: topic.title
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
  const handleLogout= () => {
    if(window.confirm("Are you sure to logout ?"))
    {
    signOut(auth).then(() =>{
      dispatch(logout())
      console.log("Logged out");
    })
    .catch(() => {
      console.log("error in logout");
    });
   }
  };
  return (
    <div className='nav'>
      <div className="content">
        <div className="navLogo">
          <img className='logoImg' src="https://blogger.googleusercontent.com/img/a/AVvXsEgxBSPQVcDsoUUdQFVgIqeQcDIQYp7BnF2nDH_Sktb8-YibUv_YySngFuv7VrmqAUUKf90Rqdct7FRVwr5HJZ6csu06m35oJsHVamS_K4qCYyAgkpdxYW7D8kMpqJUL7eEUGFpp2M8bnttLyukdf56CGy8N3QQWhURRK-047aqP4CQGn7oZ4xC9jaxurA=s760" alt="" srcset="" />
        </div>
        <div className="subContent1">
          <div className="navIcons">
            <HomeIcon />
          </div>
          <div className="searchBar">
            <SearchIcon />
            <input type="text" name="" id="" placeholder='Search Questions' />
          </div>
        </div>

        <div className="subContent2">
          <div className="dp">
            <span onClick = {handleLogout}><Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}/>
            </span>
          </div>
          <Button variant="contained" sx={{ background: "black" }}
            onClick={() => setIsModalOpen(true)}
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
              {/* <h5>Share Link</h5> */}
            </div>
            <div className="modalInfo">
              <Avatar className='avatar' />
              <div className="modalScope">
                <PeopleAltIcon />
                <p>Public</p>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="modalField">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder='ask your question here...'
              />
              {/* <div className="inputForLink">
                <input 
                type="text" 
                value={inputUrl}
                onChange={(e)=>setInputUrl(e.target.value)}
                placeholder='Optional: include a link that give context' />
                {
                  inputUrl!=="" && <img src={inputUrl} alt="urlImage" />
                }
                
              </div> */}

              {/* <SelectTopic
                style={{ marginTop: "2rem" }}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onChange={handleTopicChange}
              /> */}

              {/*-------------------- Select Topic------------- */}
              <Autocomplete
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                value={topic}
                onChange={handleTopicChange}
                sx={{ width: 300, marginTop: "2rem" }}
                aria-required
                renderInput={(params) => <TextField {...params} label="Select Topic" />}
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