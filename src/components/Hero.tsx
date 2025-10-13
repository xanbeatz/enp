import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToContact: () => void;
}

// Property data for search functionality
const propertyData = [
  {
    id: 1,
    title: 'Ngonyama Lifestyle Estate',
    location: 'North Riding',
    price: 'R450,000',
    type: 'House',
    priceRange: '300000-500000',
    image: '/ngonyama.jpg'
  },
  {
    id: 2,
    title: 'Bhubesi Estate',
    location: 'Randfontein Greenhills',
    price: 'R849,000',
    type: 'House',
    priceRange: '800000-1000000',
    image: '/bhubesi.jpg'
  },
  {
    id: 3,
    title: 'P&S Noble Apartments',
    location: 'Randfontein Robinpark',
    price: 'R350,000',
    type: 'Apartment',
    priceRange: '300000-500000',
    image: '/p&s.jpg'
  },
  {
    id: 4,
    title: 'P&S Robin Park Estate',
    location: 'Randfontein',
    price: 'R849,000',
    type: 'Estate',
    priceRange: '800000-1000000',
    image: '/p&s2.jpg'
  },
  {
    id: 5,
    title: 'Group Buying Opportunity',
    location: 'Randfontein',
    price: 'R147,000 per investor',
    type: 'Land',
    priceRange: '0-300000',
    image: '/group.jpg'
  }
];

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [predictions, setPredictions] = useState<string[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);

  // Generate location predictions based on input
  useEffect(() => {
    if (location.length > 1) {
      const uniqueLocations = Array.from(new Set(propertyData.map(p => p.location)));
      const matches = uniqueLocations.filter(loc => 
        loc.toLowerCase().includes(location.toLowerCase())
      );
      setPredictions(matches);
      setShowPredictions(matches.length > 0);
    } else {
      setPredictions([]);
      setShowPredictions(false);
    }
  }, [location]);

  const handleSearch = () => {
    setIsSearching(true);
    
    // Filter properties based on search criteria
    const results = propertyData.filter(property => {
      const locationMatch = !location || property.location.toLowerCase().includes(location.toLowerCase());
      const typeMatch = !propertyType || property.type === propertyType;
      const priceMatch = !priceRange || property.priceRange === priceRange;
      
      return locationMatch && typeMatch && priceMatch;
    });
    
    setSearchResults(results);
    setShowResults(true);
    setShowPredictions(false);
    
    setTimeout(() => {
      setIsSearching(false);
    }, 800);
  };

  const handleResultClick = () => {
    setShowResults(false);
    scrollToContact();
  };

  const handlePredictionClick = (prediction: string) => {
    setLocation(prediction);
    setShowPredictions(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container') && !target.closest('.search-results')) {
        setShowResults(false);
        setShowPredictions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-[calc(100vh-4rem)] md:min-h-screen pt-16 pb-16 md:pt-24 md:pb-24 flex flex-col justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/ngonyama.jpg')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Find Your Dream Home in South Africa's Thriving Communities</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100">Discover properties that match your lifestyle and investment goals with Ekasi Noble Properties.</p>
          
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 search-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location (e.g. Randfontein)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {showPredictions && (
                  <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
                    {predictions.map((prediction, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-left"
                        onClick={() => handlePredictionClick(prediction)}
                      >
                        {prediction}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative">
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 appearance-none"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Estate">Estate</option>
                  <option value="Land">Land</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
              </div>
              
              <div className="relative">
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 appearance-none"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">Price Range</option>
                  <option value="0-300000">R0 - R300,000</option>
                  <option value="300000-500000">R300,000 - R500,000</option>
                  <option value="500000-800000">R500,000 - R800,000</option>
                  <option value="800000-1000000">R800,000 - R1,000,000</option>
                  <option value="1000000+">R1,000,000+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
              </div>
            </div>
            
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              onClick={handleSearch}
            >
              {isSearching ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  <span>Searching...</span>
                </div>
              ) : (
                <>
                  <Search size={18} className="mr-2" />
                  Search Properties
                </>
              )}
            </button>
            
            {/* Search Results */}
            {showResults && (
              <div className="absolute left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-xl z-50 search-results">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
                  </h3>
                </div>
                
                {searchResults.length > 0 ? (
                  <div className="max-h-60 md:max-h-80 overflow-y-auto">
                    {searchResults.map((property) => (
                      <div 
                        key={property.id} 
                        className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                        onClick={handleResultClick}
                      >
                        <div className="flex items-start">
                          <div className="w-20 h-20 flex-shrink-0 mr-4 overflow-hidden rounded-md">
                            <img 
                              src={property.image} 
                              alt={property.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-blue-900">{property.title}</h4>
                                <p className="text-sm text-gray-600">{property.location}</p>
                                <p className="text-sm text-gray-500">{property.type}</p>
                              </div>
                              <div className="text-blue-600 font-semibold">{property.price}</div>
                            </div>
                            <div className="mt-2 flex justify-end">
                              <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                                Enquire Now <ArrowRight size={14} className="ml-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-600">No properties found matching your criteria.</p>
                    <button 
                      className="mt-3 text-blue-600 hover:text-blue-800"
                      onClick={() => scrollToContact()}
                    >
                      Contact us for assistance
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
        
    
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-20 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-white cursor-pointer group"
        >
          <span className="mb-1 md:mb-2 text-xs md:text-sm font-medium">Scroll Down</span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
            <ChevronDown size={20} className="text-white" />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
