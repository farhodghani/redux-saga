import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu({active, setActive, items}) {
    console.log(items)
  return (
    <div className='menu'>
        <ul>
        {
            items.map(item=>(
                <li key={Math.random()}>
                    <Link onClick={()=>setActive(!active)} to={item.href}>{item.value}</Link>
                </li>
            ))
        }
        </ul>
    </div>
  )
}
