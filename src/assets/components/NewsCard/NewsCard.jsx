import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, thumbnail_url, details } =
    news;

  const formattedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={author.img}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-800">
              {author.name}
            </h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM19.5 8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zM4.5 20.25a8.25 8.25 0 0115 0"
            ></path>
          </svg>
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.25h13.5v13.5H5.25z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="px-4">
        <h3 className="text-lg font-bold text-gray-900 my-3">{title}</h3>
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="w-full h-52 object-cover rounded-md"
        />
        <p className="text-sm text-gray-700 mt-3 line-clamp-4">{details}</p>
        <Link
          to={`/Details/${id}`}
          className="text-sm text-orange-600 font-medium mt-2 cursor-pointer"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 px-4 pb-4 text-sm text-gray-500">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.958c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.387c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.949-.69l1.287-3.96z" />
            </svg>
          ))}
          <span className="ml-1 text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
