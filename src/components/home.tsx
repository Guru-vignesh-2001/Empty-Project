import React from 'react'

const Home = () => {
  return (
    <div>
      Home

      <ul className='cursor-pointer'>
        <li onClick={() => window.location.href=('/about')}>About us</li>
        <li onClick={() => window.location.href=('/contact-us')}>Contact us</li>
      </ul>
    </div>
  )
}

export default Home
