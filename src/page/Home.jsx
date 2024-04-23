import React from 'react'
import '../App.css'

const Home = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);

  return (
   <>
   <nav>
    <h1>FaceGram</h1>

    <h4>{userData.username}</h4>
   </nav>
   </>
  )
}

export default Home