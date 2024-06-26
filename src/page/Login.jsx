import React, { useState } from 'react'
import axios from '../utils/axios'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const[formData, setFormData] = useState({
        'username' : '',
        'password' : ''
    })
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response =  await axios.post('auth/login',formData)
            localStorage.setItem('tokens', response.data.tokens)
            localStorage.setItem('userData', JSON.stringify(response.data.user)); // Menyimpan seluruh data respons
            console.log(response.data.user);
            setFormData({
                'username' : '',
                'password' : ''
            })
            navigate('/home')
        }catch(error){
            console.log('gagal login');
        }
    }
  return (
 <>
       <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            <label>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange}/>
            <button type='submit'>Login</button>
            <Link to={'/register'}>don't have a account? register now!</Link>
       </form>
 </>
  )
}

export default Login