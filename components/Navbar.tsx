import React from 'react'
import Image from 'next/image'
import '../styles/navstyle.css' 

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image 
              src="/etech logo new.png"
              alt="Etech Logo"
              width={40}
              height={40}
              priority
              style={{ objectFit: 'contain' }}
            />
            <span>Etech Digital Library</span>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar