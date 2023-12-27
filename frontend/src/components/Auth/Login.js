import React, { useState } from 'react';
import "./Login.css";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
// import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../../firebase";


function Login() {

  // const handleSubmit = async () => {
  //   await signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const closeIcon = <CloseIcon
    style={{ color: "white" }}
    sx={{ width: "23px", height:"24px" }}
  />;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="login-container">
      <div className="login-content">
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgxBSPQVcDsoUUdQFVgIqeQcDIQYp7BnF2nDH_Sktb8-YibUv_YySngFuv7VrmqAUUKf90Rqdct7FRVwr5HJZ6csu06m35oJsHVamS_K4qCYyAgkpdxYW7D8kMpqJUL7eEUGFpp2M8bnttLyukdf56CGy8N3QQWhURRK-047aqP4CQGn7oZ4xC9jaxurA=s760"
          alt="logo" />
        <button
          className="btn-login"
          onClick={
            (e) => {
              e.preventDefault();
              setIsModalOpen(true)
            }
          }>
          Login to continue
        </button>
        <Modal
          open={isModalOpen}
          closeIcon={closeIcon}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
        >
          <LoginForm />
        </Modal>
      </div>
    </div>
  );
}

export default Login;
