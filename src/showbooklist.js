import React from 'react'

function showbooklist() {
  return (
    <div>
        <button>showbooklist</button>
        <form>
        <input className='form' type="text" placeholder='title'/>
        <input className='form' type="text" placeholder='isbn'/>
        <input className='form' type="text" placeholder='author'/>
        <input className='form' type="text" placeholder='describe the book'/>
        <input className='form' type="text" placeholder='publish date'/>
        <input className='form' type="text" placeholder='publish book'/>
        </form>
        <button>Submit</button>
    </div>
  )
}

export default showbooklist