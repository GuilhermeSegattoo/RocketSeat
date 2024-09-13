import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Post from './components/Post.jsx'


function App() {
  return (
    <>
     <Header></Header>
     <div className={styles.wrapper}>
       <Sidebar></Sidebar>
        <main>
          <Post></Post>
          <Post></Post>
        </main>
     </div>
    </>
  )
}

export default App
