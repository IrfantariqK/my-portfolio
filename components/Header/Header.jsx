import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${menuOpen ? styles.open : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <button className={styles.toggle} onClick={toggleMenu}>
        </button>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/Home/home" passHref={true} legacyBehavior={true}>
              <a onClick={toggleMenu}>Home</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/About/about" passHref={true} legacyBehavior={true}>
              <a onClick={toggleMenu}>About</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/Projects/projects" passHref={true} legacyBehavior={true}>
              <a onClick={toggleMenu}>Projects</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/Skills/skills" passHref={true} legacyBehavior={true}>
              <a onClick={toggleMenu}>Skills</a>
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;

