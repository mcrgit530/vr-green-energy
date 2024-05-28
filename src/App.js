// App.js
import React from 'react';
import Header from './Header';
import Section from './Section';
import Services from './Services';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="App bg-gradient-to-b from-yellow-200 to-yellow-500">
      <Header />
      <Section id="home"  className="bg-gradient-to-b from-yellow-200 to-yellow-500">
        <p><strong>Founder & CEO:</strong> D. Venka Reddy</p>
        <p><strong>Cell:</strong> 81849 91033</p>
      </Section>
      <Section id="info1" title="About Solar Energy" className="bg-yellow-100">
        <p>Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants, and artificial photosynthesis.</p>
        <p>The Earth receives 174 petawatts (PW) of incoming solar radiation (insolation) at the upper atmosphere. Approximately 30% is reflected back to space while the rest is absorbed by clouds, oceans, and land masses.</p>
      </Section>
      <Section id="services" title="Our Services" className="bg-yellow-100">
        <Services />
      </Section>
      <Section id="info2" title="Advantages of Solar Energy" className="bg-yellow-100">
        <p>1. Renewable Energy Source: Solar energy is a renewable resource. It can be harnessed in all areas of the world and is available every day.</p>
        <p>2. Reduces Electricity Bills: With the installation of solar panels on your roof, you can generate free electricity, saving on your utility bills.</p>
        <p>3. Low Maintenance Costs: Solar energy systems generally don't require a lot of maintenance. You only need to keep them relatively clean, which means cleaning them a couple of times per year.</p>
      </Section>
      <Section id="contact-us" title="Contact Us" className="bg-yellow-100">
        <p><strong>Address:</strong> Corporate Off.:Mangamur Road, Ongole, Prakasam Dist - 523002</p>
        <p><strong>Cell:</strong> 81849 91033</p>
        <p><strong>Branches:</strong> HYDERABAD | VIJAYAWADA | GUNTUR | ONGOLE</p>
        <p><strong>Email:</strong> <a href="mailto:vrgreenenergyogl@gmail.com" className="text-blue-500">vrgreenenergyogl@gmail.com</a></p>
        <p><strong>Website:</strong> <a href="http://www.vrgreenenergy.com" className="text-blue-500">www.vrgreenenergy.com</a></p>
      </Section>
      <Footer />
    </div>
  );
};

export default App;
