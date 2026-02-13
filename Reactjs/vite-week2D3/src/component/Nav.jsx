import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <>
        <h1>This is Nav</h1>
        <div>
            {/* If we use Anchor tag, before going to every other page it gets refreshed. */}
            {/* <a href='/'>Home</a> {" | "}
            <a href='/about'>About</a>{" | "} 
            <a href='/contact'>Contact</a> */}

            {/* Where as Link Tag helps us to travel across pages without refreshing */}

            <Link to='/home'>Home</Link> {" | "}
            <Link to='/about'>About</Link>{" | "}
            <Link to='/contact'>Contact</Link>
        </div>
    </>
  )
}















