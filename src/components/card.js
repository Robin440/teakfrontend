
import React from "react";
import RupeeSign from "./../assets/icons/rupee.png"
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
 

const handleBuyNowClick = () => {
  // Construct the message with the product details
  const message = `I'm interested in purchasing the following product:\n\nProduct Name: ${data?.name}\nPrice: ${data?.price}`;

  // Encode the message for use in a URL
  const encodedMessage = encodeURIComponent(message);

  // Specify the phone number with the country code
  const phoneNumber = "918904088131";

  // Create the WhatsApp URL with the phone number and encoded message
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Open the WhatsApp URL in a new tab
  window.open(whatsappUrl, "_blank");
};

  return (
    <Link to={`/product/${data?.uuid}`} className="w-full h-full rounded-lg shadow-sm border flex flex-col ">
      <img
  
        className="w-full h-[220px] object-cover rounded-t cursor-pointer"
        src={process.env.REACT_APP_API_PORT + data?.image_one}
      />
      <div className=" w-full p-4  flex flex-col justify-between gap-6 ">
        <h1
          className="text-base font-medium cursor-pointer  capitalize"
        >
          {data?.name}
        </h1>
        <div className="flex justify-between items-center  ">
          <p className="text-lg font-medium flex items-center"> <img src={RupeeSign} className="h-5 w-auto"/>{data?.price}</p>
          <div className=" flex items-center gap-x-6 w-[fit-content] ">
            <button
              onClick={handleBuyNowClick}
              rel="noopener noreferrer"
              className="text-center cursor-pointer rounded-md text-base px-3 py-1.5 font-medium text-white shadow-sm bg-[#0E6B66] flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
