import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('tokens'); // Ambil token dari localStorage

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Panggil endpoint API untuk mendapatkan data postingan
        const response = await axios.get('posts', {
          headers: {
            Authorization: `Bearer ${token}` // Sertakan token dalam header Authorization
          }
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Cek apakah token tersedia sebelum melakukan panggilan API
    if (token) {
      fetchPosts();
    }
  }, [token]); // Gunakan token sebagai dependensi untuk menjalankan efek setiap kali token berubah

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
