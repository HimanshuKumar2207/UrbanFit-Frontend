import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-20">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-altext-gray-600">Our Store</p>
          <p className="text-gray-500">
            800009, Patna
            <br />
            ABC Patna - Bihar
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">+91 7479867857</span>
          </p>
          <p className=" text-gray-800">
            Email: <span className="text-gray-500">admin@urbanfit.com</span>
          </p>

          <p className="text-gray-500">Careers at UrbanFit</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500 "
            onClick={scrollToTop}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
