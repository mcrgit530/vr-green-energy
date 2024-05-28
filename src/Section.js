import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="py-32 px-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default Section;
