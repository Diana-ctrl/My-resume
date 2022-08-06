import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './header.css';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/diana-lyah-7332641a2/' target='_blank' rel="noreferrer" ><BsLinkedin /></a>
      <a href='https://github.com/Diana-ctrl' target='_blank' rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials
