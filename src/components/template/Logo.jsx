import './Logo.css'
import logo from '../../assets/imgs/bolo_rosa.jpg'
import React from 'react'
import Image from 'next/image'


export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <Image src={logo} alt="logo" />
        </a>
    </aside>