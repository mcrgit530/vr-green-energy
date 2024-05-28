import React from 'react';
import Header from './Header';
import Section from './Section';
import Services from './Services';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section id="home" >
        <p><strong>Founder & CEO:</strong> D. Venka Reddy</p>
        <p><strong>Cell:</strong> 81849 91033</p>
      </Section>
      
      <div className="bg-gray-100 py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">About Solar Energy</h2>
        <p>Solar energy is a renewable energy source that can be harnessed to generate electricity, provide hot water, and power various devices. It is a clean and sustainable way to meet energy needs without harming the environment.</p>
      </div>
      
      <Section id="services" title="Services">
        <Services />
      </Section>
      
      <div className="bg-gray-100 py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Solar Energy</h2>
        <p>Using solar energy can significantly reduce electricity bills, lower carbon footprint, and increase energy independence. It's a wise investment for the future and contributes to a healthier planet.</p>
      </div>
      
      <Section id="contact-us" title="Contact Us">
        <p><strong>Address:</strong> Corporate Off.: Mangamur Road, Ongole, Prakasam Dist - 523002</p>
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
