import React from 'react';
import './nav.css';
import { ImHome } from 'react-icons/im';
import { FaUserSecret } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import { RiServiceLine } from 'react-icons/ri';
import { MdOutlineContactMail } from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a href='#'><ImHome size={'2rem'} /></a>
      <a href='#about'><FaUserSecret size={'2rem'} /></a>
      <a href='#experience'><MdWorkOutline size={'2rem'} /></a>
      <a href='#services'><RiServiceLine size={'2rem'} /></a>
      <a href='#contact'><MdOutlineContactMail size={'2rem'} /></a>
    </nav >
  )
}

export default Nav
