import React from 'react'
import styles from './Sidebar.module.css'
import {PencilLine } from 'phosphor-react'

const Sidebar = () => {
  return (
   <aside className={styles.sidebar}>
    <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/GuilhermeSegattoo.png" />
        <strong>Guilherme Segatto</strong>
        <span>Web Developer</span>
    </div>

    <footer>
        <a href="#">
            <PencilLine size={20}></PencilLine>
            Editar seu perfil
        </a>
    </footer>
   </aside>
  )
}

export default Sidebar