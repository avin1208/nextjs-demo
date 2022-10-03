import React, { FC } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';

const slug:FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.container}>
    <style jsx>
    {
      `
      h1{
        color: #0070f3;
      }
      `
    }
    </style>
        <main className={styles.main}>
            <h1>{slug} JavaScript</h1>
            <hr />
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nulla repudiandae sint facilis, sunt corrupti numquam id illo. Ut deserunt animi iste voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime rem earum repudiandae, cum possimus quae assumenda nulla culpa. Odit architecto repellendus non, unde recusandae placeat nisi perferendis quod nesciunt! Dolorum sapiente et sint consequuntur earum blanditiis iusto reprehenderit molestiae quia eligendi? Exercitationem, officia nobis!
            </div>
        </main>
    </div>
};

export default slug;