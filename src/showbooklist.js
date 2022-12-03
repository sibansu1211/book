import React from 'react'


    const showbooklist = () => {
        return (
          <div><button>showbooklist</button>
          <h1>Add Book</h1>
          <h2>Create A new book</h2>
          
          <form>
          <input className='form' type="text" placeholder='title'/>
          <input className='form' type="text" placeholder='isbn'/>
          <input className='form' type="text" placeholder='author'/>
          <input className='form' type="text" placeholder='describe the book'/>
          <input className='form' type="text" placeholder='publish date'/>
          <input className='form' type="text" placeholder='publish book'/>
          </form>
          <button>Submit</button></div>
        )
      }
    
        
    



export default showbooklist;
