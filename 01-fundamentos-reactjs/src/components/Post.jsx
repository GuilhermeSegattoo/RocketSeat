import React from 'react'
import styles from './Post.module.css'

const Post = () => {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img src="https://github.com/GuilhermeSegattoo.png" className={styles.avatar} />
                <div className={styles.authorInfo}>
                    <strong>Guilherme Segatto</strong>
                    <span>Web developer</span>
                </div>
            </div>

            <time dateTime='2024-09-12 15:08:50'>Publicado há 1h</time>

        </header>

        <div className={styles.content}>
         <p>Fala galeraa 👋</p>

         <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

         <p>👉{'  '}<a href="#"> jane.design/doctorcare</a></p>

         <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder='Deixe um comentário'></textarea>
          <footer>
            <button type='submit'>Comentar</button>
          </footer>
        </form>

    </article>
  )
}

export default Post