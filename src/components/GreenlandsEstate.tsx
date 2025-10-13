import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, ShoppingBag, GraduationCap, Car, Shield, Building2, Phone, Mail, ExternalLink } from 'lucide-react';

interface GreenlandsEstateProps {
  scrollToContact: () => void;
}

const features = [
  {
    icon: Shield,
    title: 'Unparalleled Security',
    description: 'A truly secure living environment that promises peace of mind'
  },
  {
    icon: ShoppingBag,
    title: 'Mini Shopping Center',
    description: 'Stunning shopping center right within the estate for your convenience'
  },
  {
    icon: Home,
    title: 'Affordable Luxury',
    description: 'Luxury housing solutions without compromising on quality'
  },
  {
    icon: Car,
    title: 'Prime Location',
    description: '10-minute drive to schools, shops, filling stations, and town'
  }
];

const aboutPoints = [
  'Highly qualified private agents with over a decade of experience',
  'Personalized attention and expert guidance throughout the property purchasing process',
  'Stunning landscapes and luxurious amenities',
  'Premium living experience that exceeds expectations'
];

const GreenlandsEstate: React.FC<GreenlandsEstateProps> = ({ scrollToContact }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Lifestyle Private Estate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GREENLANDS LIFESTYLE PRIVATE ESTATE
          </h1>
          <div className="flex items-center justify-center text-blue-700 text-lg">
            <MapPin size={20} className="mr-2" />
            <span>Randfontein Middelvei 255iQ</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Greenlands</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Imagine owning a piece of paradise nestled in the breathtaking west rand of Gauteng, right along the main reef in Randfontein. Welcome to Greenland's private estate – where luxury meets security in the perfect harmony of a private oasis.
            </p>
            <p>
              We are not simply building a private estate; we are crafting a truly secure living environment that promises unparalleled peace of mind. Picture strolling through a stunning mini shopping center right within the estate, adding convenience and charm to your everyday life.
            </p>
            <p>
              Greenlands is committed to making your dream home a reality by offering affordable housing solutions without compromising on luxury. Let your investment speak for itself as you indulge in the ultimate residential experience.
            </p>
            <p className="font-semibold text-blue-700">
              Owning a home at Greenlands is not just a purchase; it's a seamless journey to your ideal lifestyle. Our flexible payment options cater to any financial situation, ensuring that your path to homeownership is as smooth as possible.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <feature.icon size={32} className="text-blue-700" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <Building2 size={32} className="mr-3" />
            <h2 className="text-3xl font-bold">About Our Real Estate</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              At MKH (More Key Homes), we take pride in our team of highly qualified private agents, each with over a decade of experience in the real estate industry. Our dedicated agents ensure that every client receives personalized attention and expert guidance throughout the property purchasing process.
            </p>
            <p className="text-lg leading-relaxed">
              The Greenlands Lifestyle Private Estate is a unique opportunity for individuals seeking a premium living experience. With stunning landscapes and luxurious amenities, this estate is sure to exceed your expectations. By choosing MKH as your real estate partner, you can rest assured that you will receive the best service and support every step of the way.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Land Investment Opportunity</h2>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Looking for Land to Build Your Own Home?</h3>
            <p className="text-lg text-gray-800 mb-6">
              Looking to secure a vacant land 300 SQM at R250,000 to build your dream home?
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-700 font-semibold mb-2">Securing Deposit:</p>
                <p className="text-3xl font-bold text-blue-700">R100,000</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-700 font-semibold mb-2">Balance Payable:</p>
                <p className="text-xl font-bold text-gray-900">Within 6 months</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Project</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              At Greenlands, we believe in bringing luxury to you at an affordable price point, without compromising on quality. Our estate is designed to ensure that you not only find value in your investment but also enjoy the convenience of being located close to everything you need.
            </p>
            <p>
              From top-rated schools to shopping centers, filling stations, and easy access to the town - all just a short 10-minute drive away, even during peak hours!
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
              <p className="font-semibold text-blue-900 mb-2">
                Imagine coming home to a place where luxury meets affordability, and where every detail is crafted to make your life easier and more enjoyable.
              </p>
              <p className="text-blue-800">
                That's what Greenlands Estate is all about - creating a thriving community where you can truly live your best life.
              </p>
            </div>
            <p>
              If you're looking for a place to call home that offers more than just a house, Greenlands Estate is the perfect choice for you. Come experience the luxury, convenience, and sophistication that awaits you at Greenlands.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Are you considering becoming a part of the vibrant and environmentally-conscious Greenlands community? Waste no time and contact the More Key Homes sales team now to get detailed information and access on how you can secure your spot in this exclusive neighborhood.
          </p>
          <p className="text-lg leading-relaxed mb-8 text-center">
            By joining Greenlands, you will be a part of a community that values sustainability, green living, and a strong sense of belonging. Our sales team is ready to provide you with all the necessary information to make an informed decision about your future home.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Phone size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-sm">010 226 9061</p>
              <p className="text-sm">067 776 8340</p>
              <p className="text-sm">084 321 0001</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Mail size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-2">Email</p>
              <p className="text-sm">info@morekeyhome.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <ExternalLink size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-2">Website</p>
              <a
                href="https://www.morekeyhome.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-300 transition-colors"
              >
                www.morekeyhome.com
              </a>
            </div>
          </div>

          <p className="text-center text-lg mb-4">
            Don't miss out on this incredible opportunity to be a part of a community that prioritizes a greener way of living.
          </p>
          <p className="text-center text-xl font-semibold">
            Looking forward to welcoming you to our neighborhood!
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-xl text-gray-700 mb-6">
            Ready to take the first step towards your future at Greenland's private estate?
          </p>
          <motion.button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GreenlandsEstate;
