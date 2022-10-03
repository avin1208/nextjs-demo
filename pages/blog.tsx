import React, { FC, useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GetStaticProps } from 'next';

const Blog: FC = (props: any) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  };

  return <div className={styles.container}>
    <main className={styles.main}>
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blogitem: any) => {
          return <div key={blogitem.slug} className={styles.grid}>
            <div className={styles.card}>
              <Link href={`/blogpost/${blogitem.slug}`}  >
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
              <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
          </div>
        })}
      </InfiniteScroll>
    </main>
  </div>
};


export const getStaticProps:GetStaticProps = async (context: any) => {
  let data = await fs.promises.readdir("blogdata");
  console.log(data);
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs, allCount },
  }
}

export default Blog;