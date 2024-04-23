import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router';
import PostList from '../components/Post';

const Home = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);

    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Hapus token dari localStorage
      localStorage.removeItem('tokens');
      localStorage.removeItem('userData'); // Opsional: Hapus data pengguna lainnya jika ada
  
      // Redirect ke halaman login atau halaman lainnya
      navigate('/login');
    }
  return (
   <>
   <nav>
    <h1>FaceGram</h1>

    <div className='menu'>
      <h4>{userData.username}</h4>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
   </nav>
   <main>
      <PostList/>
   </main>
   </>
  )
}

export default Home