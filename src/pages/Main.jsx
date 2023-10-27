import React from 'react';
import GraphEditor from '../pages/GraphEditor'; // Import the GraphEditor component

const Main = () => {
  // Sample HTML content
  const htmlContent = '<p>Your HTML content goes here.</p>';

  return (
    <div>
      {/* Render the GraphEditor component with the HTML content */}
      <GraphEditor htmlContent={htmlContent} />
    </div>
  );
};

export default Main;
