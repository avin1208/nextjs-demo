import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

const Blog = (props: any) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return <div className={styles.container}>
    <main className={styles.main}>
      {blogs.map((blogitem: any) => {
        return <div key={blogitem.slug} className={styles.grid}>
          <div className={styles.card}>
            <Link href={`/blogpost/${blogitem.slug}`} >
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
            <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
          </div>
        </div>
      })}
    </main>
  </div>
}

export async function getServerSideProps() {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  return {
    props: { allBlogs },
  }
}

export default Blog;
