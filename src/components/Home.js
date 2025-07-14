import React from 'react';
import Heroslider from './Heroslider';
import Services from './Services';
import Whychooseus from './Whychooseus';
import Features from './Features';
import Whatwedo from './Whatwedo';
import Progresssection from './Progresssection';
import Testimonials from './Testimonials';
import Blogsection from './Blogsection';

const Home = () => {
  return (
    <>
      <Heroslider />
      <Services />
      <Whychooseus />
      <Features />
      <Whatwedo />
      <Progresssection />
      <Testimonials />
      <Blogsection />
    </>
  );
};

export default Home;
