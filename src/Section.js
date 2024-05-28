// Section.js
import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="section-content">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Section;
