import React, { useContext } from 'react';
import { UserContext } from './Input.jsx';
import { Link } from 'react-router-dom';

const Content = () => {
  const arr = useContext(UserContext);

  const output = arr.map((data, index) => {
    const videoId = data.snippet?.resourceId?.videoId;
    const title = data.snippet?.title;
    const creator = data.snippet?.videoOwnerChannelTitle;
    const thumbnails = data.snippet?.thumbnails;

    const thumbnailUrl =
      thumbnails?.maxres?.url ||
      thumbnails?.standard?.url ||
      thumbnails?.high?.url ||
      thumbnails?.medium?.url ||
      thumbnails?.default?.url ||
      '';

    const videoUrl = `https://youtu.be/${videoId}?feature=shared`;

    return (
      <div
        key={index}
        className="bg-white dark:bg-[#1f1f1f] border-2 border-black dark:border-[tomato] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <Link to={videoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="w-full h-52 md:h-60 lg:h-64 object-cover"
          />
        </Link>

        <div className="bg-[#E7E8D1] dark:bg-[#2A3132] dark:text-mywhite font-sans p-4 space-y-2">
          <div className="font-bold text-[1.1rem] md:text-[1.2rem] line-clamp-2 border-y border-black dark:border-[tomato] py-2">
            {title}
          </div>
          <h2 className="text-sm md:text-base">
            Creator: <b>{creator}</b>
          </h2>
        </div>
      </div>
    );
  });

  return (
    <div className="w-[95%] max-w-screen-xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
      {arr?.length > 0 ? output : (
        <p className="text-center text-gray-600 dark:text-gray-300">No videos found.</p>
      )}
    </div>
  );
};

export default Content;
