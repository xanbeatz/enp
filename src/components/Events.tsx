import React, { useState, useRef } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 2,
    title: "Greengate Investment Workshop",
    date: "April 26, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Greengate, Beyers Naude",
    description: "Learn about investment opportunities in our Greengate development and get expert advice on property investment.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 3,
    title: "Ngonyama Property Workshop",
    date: "May 3, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "North Riding",
    description: "Discover the exclusive Ngonyama Lifestyle Estate development and learn about available investment options.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 4,
    title: "Robin Park Group Investors Meeting",
    date: "May 10, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Robin Park, Randfontein",
    description: "Special meeting for R147k Group Investors. Learn about the investment structure and expected returns.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 5,
    title: "Greenhills Investment Workshop",
    date: "May 17, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Greenhills",
    description: "Comprehensive workshop about investment opportunities in the Greenhills area.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 6,
    title: "Kocksoord Apartments Workshop",
    date: "May 24, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Kocksoord",
    description: "Learn about our new apartment development in Kocksoord and various investment options available.",
    image: "/android-chrome-192x192.png"
  },
  

  
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Events: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const currentYear = new Date().getFullYear();
  const monthsContainerRef = useRef<HTMLDivElement>(null);

  // Filter events by selected month
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === selectedMonth;
  });

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at our upcoming events to learn more about property investment and homeownership.
          </p>
        </div>

        <div className="mb-8 relative">
          <div 
            ref={monthsContainerRef}
            className="flex justify-start md:justify-center overflow-x-auto py-2 px-8 md:px-0 no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {monthNames.map((month, index) => (
                <button
                  key={index}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    index === 0 ? 'rounded-l-lg' : ''
                  } ${
                    index === 11 ? 'rounded-r-lg' : ''
                  } ${
                    selectedMonth === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } whitespace-nowrap`}
                  onClick={() => setSelectedMonth(index)}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-gray-600 mt-2">
            <p>Showing events for {monthNames[selectedMonth]} {currentYear}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:w-3/5">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Calendar size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{event.date}</span>
                  </div>

                  <div className="flex items-start">
                    <Clock size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>

                  <div className="flex items-start">
                    <MapPin size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>

                {event.link ? (
  <a 
    href={event.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors text-center block"
  >
    Register Now
  </a>
) : (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
    Register Now
  </button>
)}

              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No events scheduled for {monthNames[selectedMonth]} {currentYear}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
