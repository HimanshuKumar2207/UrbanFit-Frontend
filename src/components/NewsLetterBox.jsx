import React from "react";

const NewsLetterBox = () => {
  // Handler function for form submission
  const onSubmitHandler = () => {
    event.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <div className="text-center">
      {/* Section heading */}
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      {/* Brief description */}
      <p className="text-gray-400 mt-3">
        Subscribe now to get 20% off your first order and access exclusive
        member offers.
      </p>
      {/* Subscription form */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-0 mx-auto my-6  pl-3"
      >
        {/* Input field for the email address */}
        <input
          className="w-full sm:flex-1 outline-non border px-10 py-[13px] border-r-0  "
          required
          type="email"
          placeholder="Enter your Email"
        />
        {/* Submit button */}
        <button
          type="submit"
          className="bg-[#4ea677] text-white text-sm px-10 py-4 font-medium cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
