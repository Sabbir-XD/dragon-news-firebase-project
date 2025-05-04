import React from "react";
import { MdVerified } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row justify-center items-center gap-6 transition duration-300 hover:shadow-xl">
      {/* Profile Image */}
      <img
        src={user.photoURL || "https://via.placeholder.com/200"}
        alt={user.displayName || "User"}
        className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-gray-300"
      />

      {/* User Info */}
      <div className="text-center sm:text-left flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {user.displayName || "Unnamed User"}
        </h2>

        <div
          className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mb-3 ${
            user.emailVerified
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.emailVerified ? "Verified User" : "Unverified User"}
          {user.emailVerified ? (
            <MdVerified size={18} className="ml-2" />
          ) : (
            <VscUnverified size={18} className="ml-2" />
          )}
        </div>

        {user.email && (
          <p className="text-gray-600 text-base sm:text-lg">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserCard;
