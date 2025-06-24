import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            <span className='font-bold text-2xl text-[#4ea677] leading-tight prata-regular'>Urban Fit</span> was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we&apos;ve worked firelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from frusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {' '}
            Our Mission Our mission of Urban Fit is to empower customers with
            choice, convenience, and confidence. We`\re dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

        {/* Why Choose Us Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {/* Block 1 */}
        <div className="bg-gradient-to-br from-[#4ea677]/10 to-white p-10 rounded-2xl shadow hover:shadow-md transition">
          <div className="mb-4">
            <img src={assets.quality_icon} alt="quality" className="w-12 h-12" />
          </div>
          <h4 className="text-[#4ea677] font-semibold text-lg mb-2">Quality Assurance</h4>
          <p className="text-gray-600 text-sm">
            Every product is quality-checked and backed by our promise of performance and satisfaction.
          </p>
        </div>

        {/* Block 2 */}
        <div className="bg-gradient-to-br from-[#4ea677]/10 to-white p-10 rounded-2xl shadow hover:shadow-md transition">
          <div className="mb-4">
            <img src={assets.exchange_icon} alt="convenience" className="w-12 h-12" />
          </div>
          <h4 className="text-[#40a56f] font-semibold text-lg mb-2">Convenience</h4>
          <p className="text-gray-600 text-sm">
            Easy navigation, fast checkout, and mobile access—designed for a smooth experience anytime, anywhere.
          </p>
        </div>

        {/* Block 3 */}
        <div className="bg-gradient-to-br from-[#4ea677]/10 to-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="mb-4">
            <img src={assets.support_img} alt="support" className="w-12 h-12" />
          </div>
          <h4 className="text-[#4ea677] font-semibold text-lg mb-2">24/7 Customer Support</h4>
          <p className="text-gray-600 text-sm">
            Our friendly support team is available around the clock to assist with all your needs.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;

