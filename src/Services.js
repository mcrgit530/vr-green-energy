import React from 'react';
import epcImage from './images/epc.png';
import icImage from './images/I&C.png';
import rooftopImage from './images/rooftop.png';
import waterHeaterImage from './images/water heater.png';
import batteryImage from './images/battery.png';
import fencingImage from './images/fencing.png';

const services = [
  { id: 1, title: "EPC", description: "Description of service 1", imageUrl: epcImage },
  { id: 2, title: "I&C", description: "Description of service 2", imageUrl: icImage },
  { id: 3, title: "SOLAR ROOFTOP", description: "Description of service 3", imageUrl: rooftopImage },
  { id: 4, title: "WATER HEATER", description: "Description of service 4", imageUrl: waterHeaterImage },
  { id: 5, title: "SOLAR BATTERY", description: "Description of service 5", imageUrl: batteryImage },
  { id: 6, title: "FENCING", description: "Description of service 6", imageUrl: fencingImage },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {services.map(service => (
        <div key={service.id} className="bg-white p-8 border rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <img src={service.imageUrl} alt={service.title} className="w-24 h-24 object-cover rounded-full" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default Services;
