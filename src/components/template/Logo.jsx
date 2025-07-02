import './Logo.css'
import logo from '../../assets/imgs/bolo_rosa.jpg'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default props => 
    <aside className="logo">
        <Link href="/" className="logo">
            <Image src={logo} alt="logo" />
        </Link>
    </aside>