import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="f">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-24 sm:mt-40 text-sm ">
        <div className="mt-[-12px]">
          <img
            src={assets.logo}
            alt=""
            className="mb-5 w-36 "
            onClick={scrollToTop}
          />
          <p className="w-full sm:w-2/3 text-gray-600">
            Shop with Forever and discover the ultimate convenience of online
            shopping. Enjoy a seamless experience, exclusive deals, fast
            delivery, and top-quality products—all from the comfort of your
            home, anytime you want.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col flex-1 text-gray-600 cursor-pointer">
            <li onClick={scrollToTop} className="mb-2">
              Home
            </li>
            <li onClick={scrollToTop} className="mb-2">
              About Us
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Delivery
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Privacy policy
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col flex-1 text-gray-600">
            <li className="mb-2">+91 7479867857</li>
            <li className="mb-2">contact@urbanfit.com </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          This website is created by{" "}
          <span className="text-[#4ea677] font-bold"> Himanshu Kumar </span>
          -copyright © {new Date().getFullYear()}
          <Link to={"/"}>
            <span className="hover:text-red-600 hover:underline underline-offset-4" onClick={scrollToTop}>
              {""} urbanfit.com
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
