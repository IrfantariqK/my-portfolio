import Image from 'next/image'
import styles from '@/styles/Skills.module.css'
import Header from '../../../components/Header/Header'

const skills = [
  {
    title: 'Node JS',
    imageSrc: '/img1.png'
  },
  {
    title: 'React js',
    imageSrc: '/img2.png'
  },
  {
    title: 'Javascript',
    imageSrc: '/img3.png'
  },
  {
    title: 'CSS',
    imageSrc: '/img4.png'
  },
  {
    title: 'Next js',
    imageSrc: '/img5.png'
  },
  {
    title: 'HTML',
    imageSrc: '/img6.png'
  },
  {
    title: 'Express js',
    imageSrc: '/img7.png'
  },
  {
    title: 'MongoDB',
    imageSrc: '/img8.png'
  },
]


export default function Skills() {
  return (
    <div className={styles.container}>
      <Header />
      <div/>
      <div className={styles.textContainer}>
        <h1>What I Can Do</h1>
        </div>
    <div className={styles.grid}>
      {skills.map((skill) => (
        <div key={skill.title} className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src={skill.imageSrc} alt={skill.title} layout="fill" objectFit="cover" className={styles.image} />
          </div>
          <h2 className={styles.title}>{skill.title}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}
