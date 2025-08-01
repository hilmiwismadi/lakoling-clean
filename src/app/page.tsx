import React from 'react';
import Gallery from './sections/gallery';
import Location from './sections/location';
import Learning from './sections/module';
import Hero from './sections/hero';
import Videoprofile1 from './sections/videoprofile';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Videoprofile1/>
      <Learning />
      <Gallery />
      <Location />
    </div>
  );
};

export default IndexPage;