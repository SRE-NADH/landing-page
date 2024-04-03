import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
const navigate = useNavigate();

  return (
    <div className='home'>
    <div >
    <h1>Welcome to popX</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic eaque assumenda, reiciendis debitis nisi necessitatibus illo! Cumque, sapiente, consectetur saepe quia porro officiis assumenda optio hic placeat quibusdam sint.</p>
    <div className="button-container">
    <button onClick={()=>{navigate("/signup")}}  id='create'>Create Account</button>
    <button onClick={()=>{navigate("/login")}} id='login'>Already Registerd?Login</button>
    </div>
    </div>
 </div>
  )
}

export default Home