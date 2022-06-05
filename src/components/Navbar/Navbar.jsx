import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const items = [{value: 'Обо мне', href: '/about', icon: 'person'}]
  const [active, setActive] = useState(false)
  return (
    <>
    <div className='nav'>
        <div onClick={()=>setActive(!active)} className='bg_btn'>
          <span></span>
        </div>
        <div className='logo'><Link to="/">PotoShow</Link></div>
    </div>
    {
      active && <Menu active={active} setActive={setActive} items={items}/>
    }
    
    </>
  )
}
