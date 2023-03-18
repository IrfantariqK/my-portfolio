import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub, faAt } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '@/styles/Icons.module.css';

const Icons = () => {
  return (
    <div className={styles.icons}>
      <Link href="https://www.linkedin.com/" passHref={true} legacyBehavior={true}>
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Link>
      <Link href="https://wa.me/+923062376093" passHref={true} legacyBehavior={true}>
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </Link>
      <Link href="https://github.com/" passHref={true} legacyBehavior={true}>
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
     
    </div>
  );
};

export default Icons;
