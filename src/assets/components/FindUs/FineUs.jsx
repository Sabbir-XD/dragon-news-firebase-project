import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
      <div className="rounded-lg">
        <a href="#" className="flex items-center gap-3 p-4 hover:bg-gray-100 transition">
          <div className="bg-[#E8F0FE] text-blue-600 p-2 rounded-full">
            <FaFacebookF />
          </div>
          <span className="text-gray-700 font-medium">Facebook</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 hover:bg-gray-100 transition">
          <div className="bg-[#E8F5FD] text-sky-500 p-2 rounded-full">
            <FaTwitter />
          </div>
          <span className="text-gray-700 font-medium">Twitter</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 hover:bg-gray-100 transition">
          <div className="bg-[#FDE9E9] text-pink-500 p-2 rounded-full">
            <FaInstagram />
          </div>
          <span className="text-gray-700 font-medium">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default FindUs;
