import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'


function App() {
  return (
    <>
     <Header></Header>
     <div className={styles.wrapper}>
       <Sidebar></Sidebar>
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam doloremque totam nam, error ex voluptatem eligendi reprehenderit quasi voluptatum maiores consectetur quaerat. Odit, ipsam minima labore harum facilis reiciendis.</p>
        </main>
     </div>
    </>
  )
}

export default App
