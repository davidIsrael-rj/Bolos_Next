import Header from './Header'
import './Main.css'
import React from 'react'

export default props =>
    <>
        <Header {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </>