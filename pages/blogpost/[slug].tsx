import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';

const Slug = (props: any) => {
  const [blog, setBlog] = useState(props.myBlog);
  

  function createMarkup(c: any) {
    return { __html: c };
  }
  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </main>
  </div>;
};

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  console.log(slug);

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  // console.log(data);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  }
}

export default Slug;
