
import './App.css';
import login from './login';

function App() {
  return (
    <div className='app'>
      <div className='title'>
        Register
      </div> 
      <form >
        <input className='form' type="text" placeholder='username'/> <br></br> <br></br>
        <input className='form' placeholder='password'/> <br></br> <br></br>
        <input className='form' placeholder='confirm password'/>

      </form>
      <button className='btn1'>Register</button> <br></br> <br></br>
      <button  onClick={login}     className='btn2'>Member Login</button> <br></br>
    </div>
  );
}

export default App;
