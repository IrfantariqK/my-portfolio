import React from 'react';
import styles from '@/styles/About.module.css';
import Header from '../../../components/Header/Header';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.hearder}>
      <Header />

      <main>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <h1>About Me</h1>
            <p>My name is Irfan Tariq, and I am a fresh MERN stack developer with a passion for creating dynamic and responsive web applications. As a self-taught developer, recently i completed my 3 month training in contour software I have learned the fundamentals of HTML, CSS, and JavaScript, and I have honed my skills in React/Next.js, Node.js, Express, and MongoDB.</p>
            <div className={styles.textContainer}></div>
            <p>Throughout my journey as a MERN stack developer, I have built several small projects that have allowed me to put my skills to the test and solve real-world challenges. For example, I built a web application that allows users to search for recipes based on dietary restrictions and preferences. I also built a social media platform that uses React and Node.js to allow users to create profiles, connect with friends, and share updates and photos.</p>
            <div className={styles.textContainer}></div>
            <p>As a team player, I have enjoyed collaborating with other developers on MERN stack projects, and I have learned the importance of clear communication, code documentation, and version control. I am excited to continue building my skills as a MERN stack developer and to work on larger and more complex projects in the future.</p>
            <div className={styles.textContainer}></div>
            <p>In my free time, I enjoy exploring new technologies and attending local hackathons and meetups. I am also passionate about giving back to the developer community by contributing to open source projects and volunteering at local coding events.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/image.gif" alt="My Image" width={500} height={500} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

