import { FC } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';


const Navbar:FC = () => {
    return (
        <nav className={styles.mainnav}>
            <ul>
                <Link href='/'><a><li>01.Home</li></a></Link>
                <Link href='/about'><a><li>02.About</li></a></Link>
                <Link href='/blog'><a><li>03.Blog</li></a></Link>
                <Link href='/contact'><a><li>04.Contact</li></a></Link>
            </ul>
        </nav>
    );
}

export default Navbar;