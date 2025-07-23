import React from 'react';
import Gallery from './sections/gallery';
import Location from './sections/location';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen">
    
      <Gallery />
      <Location />
    </div>
  );
};

export default IndexPage;