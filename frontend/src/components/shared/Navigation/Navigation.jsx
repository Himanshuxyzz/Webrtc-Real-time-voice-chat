import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

//inline css
const Navigation = () => {
  const logoStyle = {
    color:'#FFF',
    textDecoration:'none',
    fontSize:'20px',
    fontWeight:'700',
    display:'flex',
    alignItems:'center',
  }

  const logoText = {
    marginLeft:'10px'
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={logoStyle} to="/">
        <img src="/images/logo.png" alt="logo"/>
        <span style={logoText}>MERNstack</span>
      </Link>
    </nav>
  );
}

export default Navigation;