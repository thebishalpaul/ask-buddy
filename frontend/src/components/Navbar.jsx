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
import "./css/Navbar.css"
function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [inputUrl,setInputUrl]=useState("");
  const closeIcon = <CloseIcon />;
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
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
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
                type="text"
                placeholder='ask your question here...' />
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
            </div>
            <div className="modalButtons">
              <button className='cancel' onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type='submit' className='askButton'>
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