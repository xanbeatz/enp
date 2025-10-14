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
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/ngonyama.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col justify-center py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-sm md:text-base font-medium text-white">Welcome to Ekasi Noble Properties</span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
            Find Your Dream Home in South Africa's Thriving Communities
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 md:mb-10 text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Discover properties that match your lifestyle and investment goals with innovative financing solutions.
          </p>
          
          <motion.div
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 md:p-8 search-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location (e.g. Randfontein)"
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 transition-all"
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
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 appearance-none transition-all"
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
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 appearance-none transition-all"
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
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 md:py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-white cursor-pointer group"
        >
          
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:bg-white/30 group-hover:border-white/60 transition-all duration-300">
            <ChevronDown size={24} className="text-white" />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
