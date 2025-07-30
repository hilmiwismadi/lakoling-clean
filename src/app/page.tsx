import React from 'react';
import Gallery from './sections/gallery';
import Location from './sections/location';
import Learning from './sections/module';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Learning />
      <Gallery />
      <Location />
    </div>
  );
};

export default IndexPage;