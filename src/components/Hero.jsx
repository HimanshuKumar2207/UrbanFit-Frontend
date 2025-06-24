import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-start gap-5 text-[#1e1e1e]">
        {/* Tagline */}
        <div className="flex items-center gap-2">
          <span className="w-15 h-[2px] bg-[#4ea677]"></span>
          <p className="uppercase tracking-wide text-xs sm:text-sm font-medium text-gray-700">
            Our Bestsellers
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight prata-regular">
          Discover the Latest Arrivals in Style
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
          Elevate your wardrobe with our newest collections — featuring timeless
          essentials, premium fabrics, and signature fits for all.
        </p>

        {/* CTA Button */}
       <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base ">SHOP NOW</p>
            <p className="w-8 md:w-15 h-[1px] bg-red-600"></p>
          </div>
      </div>

      {/* Hero Image (Right Side) */}
      <div className="w-full sm:w-[45%] px-6 pt-6 sm:pt-0">
        <img
          src={assets.hero2_img}
          alt="Hero visual"
          className="w-full h-auto object-contain rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Hero;
