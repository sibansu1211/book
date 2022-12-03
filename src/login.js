import React from 'react';
import './App.css';


    const log = () => {
        return (
          <div><div className='login'>
          <div className='title'>
            Member Login
          </div> 
          <form >
            <input className='form' type="text" placeholder='username'/> <br></br> <br></br>
            <input className='form' placeholder='password'/> <br></br> <br></br>
            
      
          </form>
          <button className='btn1'>Login</button> <br></br> <br></br>
          <button className='btn2'>Forget password </button> <br></br>
        </div></div>
        )

}
export default log;