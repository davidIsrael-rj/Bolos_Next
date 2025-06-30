import Link from 'next/link'
import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            <Link href="/">
                
                    <i className="fa fa-home"></i> Início
            </Link>
            <Link href="/user">
                    <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>