import React from 'react';
import { MapPin, Users, Home } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">About Ekasi Noble Properties</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            As growing property developers, we've overcome challenges to establish ourselves in the South African market. 
            Our mission is to make history by changing lives and providing everyone an opportunity to own a home. 
            We even assist financially restricted individuals through our innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Strategic Locations</h3>
            </div>
            <p className="text-gray-600">
              Prime properties in developing areas with high growth potential, carefully selected for maximum investment returns.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Inclusive Solutions</h3>
            </div>
            <p className="text-gray-600">
              Innovative financing options including Rent-to-Own and group investments, making homeownership accessible to everyone.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Home size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Quality Developments</h3>
            </div>
            <p className="text-gray-600">
              Modern homes and apartments built to high standards, ensuring comfort, security, and long-term value for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;