import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute bottom-4 right-1/2 transform translate-x-10 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-gray-700 transition z-10"
        onClick={onClick}
      >
        <FaArrowRight size={24} />
      </div>
    );
  };
  
  export const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-20 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-gray-700 transition z-10"
        onClick={onClick}
      >
        <FaArrowLeft size={24} />
      </div>
    );
}