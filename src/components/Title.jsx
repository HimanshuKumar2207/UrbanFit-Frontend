import PropTypes from "prop-types"; // Import PropTypes

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-4 items-center mb-6 group ">
      <p className="text-xl sm:text-2xl lg:text-3xl uppercase font-bold text-[#4ea677] leading-tight prata-regular transition-all">
        {text1}
        <span className="ml-2 text-gray-900 sm:text-3xl font-semibold leading-tight prata-regular">{text2}</span>
      </p>
    </div>
  );
};

// Define prop types for the component
Title.propTypes = {
  text1: PropTypes.string.isRequired, // Assuming 'text1' is a required string
  text2: PropTypes.string.isRequired, // Assuming 'text2' is a required string
};

export default Title;
