import { assets } from "../assets/assets.js"; // Importing asset paths from the assets module

const OurPolicy = () => {
  return (
    <div className=" mt-16 mb-16 bg-white py-20 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {/* Policy 1: Easy Exchange */}
        <div className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={assets.exchange_icon}
            alt="exchange_icon"
            className="w-14 h-14 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#4ea677] mb-2">Easy Exchange Policy</h3>
          <p className="text-gray-500 text-sm">
            We offer a hassle-free exchange experience with fast processing.
          </p>
        </div>

        {/* Policy 2: 7 Days Return */}
        <div className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={assets.quality_icon}
            alt="quality_icon"
            className="w-14 h-14 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#4ea677] mb-2">7 Days Return Policy</h3>
          <p className="text-gray-500 text-sm">
            We provide a 7-day free return policy for your convenience.
          </p>
        </div>

        {/* Policy 3: Customer Support */}
        <div className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={assets.support_img}
            alt="support_img"
            className="w-14 h-14 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#4ea677] mb-2">Best Customer Support</h3>
          <p className="text-gray-500 text-sm">
            Reach us anytime. We offer dedicated 24/7 support for all your queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
