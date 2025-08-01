import React from 'react';
import Gallery from './sections/gallery';
import Location from './sections/location';
import Learning from './sections/module';
import Hero from './sections/hero';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Learning />
      <Gallery />
      <Location />
    </div>
  );
};

export default IndexPage;