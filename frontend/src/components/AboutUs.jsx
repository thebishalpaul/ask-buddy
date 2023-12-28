import React from 'react'
import Navbar from './Navbar'
import "./css/AboutUs.css"
function AboutUs() {
    return (
        <>
            <Navbar />
            <div class="responsive-container-block bigContainer">
                <div class="responsive-container-block Container">
                    <p class="text-blk heading">
                        About Us
                    </p>
                    <p class="text-blk subHeading">


                        The AskBuddy aims to introduce a dedicated doubt-clearing system within Assam Engineering College.
                        <br />
                        AskBuddy strives to create a centralized platform where students can confidently seek clarification on diverse subjects and academic matters. This consolidation of resources aims to streamline the learning process and enhance students' understanding of their coursework.


                    </p>
                    <div class="social-icons-container">
                        <a class="social-icon">
                            <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png" />
                        </a>
                        <a class="social-icon" href='//www.linkedin.com/in/thebishalpaul' target="_blank">
                            <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png" />
                        </a>
                        <a class="social-icon">
                            <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png" />
                        </a>
                        <a class="social-icon">
                            <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs