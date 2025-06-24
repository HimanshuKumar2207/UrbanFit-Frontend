import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";
import ProductItem from "../components/ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (
      products.length > 0 &&
      typeof category === "string" &&
      typeof subCategory === "string"
    ) {
      const relatedProducts = products
        .filter(
          (item) =>
            item.category?.toLowerCase() === category.toLowerCase() &&
            item.subCategory?.toLowerCase() === subCategory.toLowerCase()
        )
        .slice(0, 5);

      setRelated(relatedProducts);
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      {/* Title Section */}
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED " text2="PRODUCTS" />
      </div>

      {/* Conditional Rendering */}
      {related.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-8">
          No related products found.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProduct;
