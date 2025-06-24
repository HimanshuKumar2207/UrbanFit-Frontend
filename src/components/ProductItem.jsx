import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="block group cursor-pointer bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-75 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="p-4 space-y-1">
          <p className="text-base font-semibold text-gray-800 group-hover:text-navcolor transition">
            {name}
          </p>
          <p className="text-lg font-bold text-navcolor tracking-wide">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Define prop types for the component
ProductItem.propTypes = {
  id: PropTypes.string.isRequired, // Assuming 'id' is a string, change to PropTypes.number if it's numeric
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming 'image' is an array of strings
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired, // Assuming 'price' is a number
};

export default ProductItem;
