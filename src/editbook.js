import React from 'react'

const editbook = () => {
  return (
    <div><div><button>showbooklist</button>
    <h1>Edit Book</h1>
    <h2>Update Book Info</h2>
    
    <form>
    <input className='form' type="text" placeholder='The Hunger Games'/>
    <input className='form' type="text" placeholder='kd422545'/>
    <input className='form' type="text" placeholder='suzane colins'/>
    <input className='form' type="text" placeholder='popular'/>
    <input className='form' type="text" placeholder='2000.15.1 '/>
    <input className='form' type="text" placeholder='noone'/>
    </form>
    <button>Update Book</button></div></div>
  )
}

export default editbook