import Header from '../../../components/Header/Header'
import styles from '@/styles/Home.module.css'
import Icons from '../../../components/Icons/icons';
import HeadingHome from './heading_home';
import ParagraphHome from './paragraph_home';



const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      
      <br></br>
      <main>
        <HeadingHome/>
        <ParagraphHome/>
        <Icons/>
    </main>
    </div>

  )
}

export default Home