import Link from 'next/link';
import Image from 'next/image';
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
                  <Image src="/pro1.jpg" alt="Exercise App" width={600} height={400} />
                  <h3>Exercise App</h3>
                  <p>I&apos;ve developed an exercise tracking web application using the MERN stack and Next.js 13. The application has a login page and a registration page. The home page of the application includes a dashboard and four activities: hiking, biking, cycling, swimming, and running. On the dashboard, users can set a challenge for each activity. When a user completes an activity, the application stores the data in the database and displays it on the user&apos;s activity page. Users can then edit or delete the activity as needed.</p>
                </div>
              </a>
            </Link>
            <Link href="https://my-portfolio-cm45.vercel.app/" passHref={true} legacyBehavior={true}>
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.linkCard}>
                  <Image src="/pro2.PNG" alt="My Portfolio" width={600} height={400} />
                  <h3>Portfolio App</h3>
                  <p>I&apos;ve created a login and registration page for Taxi using Next.js 13. Inside the registration page, there are fields for name, email, password, phone number, state, and city. You have used a library called "geo location" which can determine the user's state and city based on their location.You have also utilized MongoDB, which is a NoSQL database. MongoDB allows for easy storage, retrieval, and manipulation of data.</p>
                </div>
              </a>
            </Link>
            <Link href="https://taxi-app-login.vercel.app/" passHref={true} legacyBehavior={true}>
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.linkCard}>
                  <Image src="/pro4.PNG" alt="Texi" width={600} height={400} />
                  <h3>Texi App Login and Registration page </h3>
                  <p>I&apos;ve created a portfolio application using Next.js 13. The application includes a header with links to the home, about, projects, and skills pages. On the about page, I&apos;ve provided information about myself. On the projects page, I&apos;ve listed the projects I&apos;ve worked on along with information and links to their websites. On the skills page, I&apos;ve listed the skills that I possess. In summary, this portfolio application is designed to showcase my work and skills to potential clients or employers.</p>
                </div>
              </a>
            </Link>
            <Link href="" passHref={true} legacyBehavior={true}>
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.linkCard}>
                  <Image src="/pro3.gif" alt="Comeing soon" width={600} height={400} />
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

