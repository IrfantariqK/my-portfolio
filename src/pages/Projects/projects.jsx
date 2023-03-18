import Link from 'next/link';
import Header from '../../../components/Header/Header';
import styles from '@/styles/Project.module.css';


function Projects() {
    return (
        <div className={styles.header}>
            <Header />
            <br />
            <main>
        <div className={styles.container}>
          <div className={styles.row}>
          <Link href="https://exercise-app-stable.vercel.app/" passHref={true} legacyBehavior={true}>
          <a target="_blank" rel="noopener noreferrer">
         <div className={styles.linkCard}>
      <img src="/pro1.jpg" alt="Exercise App"/>
      <h3>Exercise App</h3>
      <p> I have developed an exercise tracking web application using the MERN stack and Next.js 13. The application has a login page and a registration page. The home page of the application includes a dashboard and four activities, which are hiking, biking, cycling, swimming, and running.
       On the dashboard, users can set a challenge for each activity. When a user completes an activity, the application stores the data in the database and displays it on the user's activity page. Users can then edit or delete the activity as needed.</p>
    </div>
  </a>
</Link>
<Link href="https://exercise-app-stable.vercel.app/" passHref={true} legacyBehavior={true}>
          <a target="_blank" rel="noopener noreferrer">
         <div className={styles.linkCard}>
      <img src="/pro2.PNG" alt="My Portfolio"/>
      <h3>Portfolio App</h3>
      <p>I have created a portfolio application using Next.js 13. The application includes a header with links to the home, about, projects, and skills pages. On the about page, I have provided information about myself. On the projects page, I have listed the projects I have worked on along with information and links to their websites. On the skills page, I have listed the skills that I possess.
         In summary, this portfolio application is designed to showcase my work and skills to potential clients or employers.       
      </p>
      <p></p>
      <p></p>


    </div>
  </a>
</Link>
<Link href="" passHref={true} legacyBehavior={true}>
          <a target="_blank" rel="noopener noreferrer">
         <div className={styles.linkCard}>
      <img src="/pro3.gif" alt="Exercise App"/>
      <h3>Coming Soon</h3>
      <p> I have many projects that are currently under construction, and you plan to add them to your portfolio application soon. I wish you the best of luck with completing those projects</p>
    </div>
  </a>
</Link>
      </div>
    </div>
            </main>
        </div>
    );
}

export default Projects;