import React from 'react';
import Header from '../../../components/Header/Header';
import Icons from '../../../components/Icons/icons';
import HeadingHome from './heading_home';
import ParagraphHome from './paragraph_home';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <br />
      <main>
        <HeadingHome />
        <ParagraphHome />
        <Icons />
      </main>
    </React.Fragment>
  );
};

export default Home;
