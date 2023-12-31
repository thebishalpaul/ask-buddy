import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import axios from 'axios';
import "./css/Home.css"
function Home() {
  //Feed
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [isError, setIsError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    axios.get('/questions')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.reverse());
        setSearchInput(res.data.reverse());
      })
      .catch((error) => {
        console.log(error);
        setIsError(error.message);
      });
  }, []);
  // ------------------

  return (
    <>
      <div className="home">
        <Navbar
          setSearchInput={setSearchInput}
          posts={posts}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <div className="allComponents">
          <Sidebar
            setSearchInput={setSearchInput}
            posts={posts}
          />
          <Feed
            isError={isError}
            searchInput={searchInput}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </>
  )
}

export default Home