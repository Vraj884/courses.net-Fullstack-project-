import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&maxResults=1000&playlistId=PL_2HnWNGs12Fe9JedpuQd2BfsQG9ryYte&key=AIzaSyCrv92xSL235hzgpZVC5MjiQV87hOOcRcU`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items || []);
      })
      .catch((err) => {
        console.error('Failed to fetch videos', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderCards = videos.map((data, index) => {
    const videoId = data.snippet?.resourceId?.videoId;
    const videoUrl = `https://youtu.be/${videoId}?feature=shared`;
    const title = data.snippet?.title || 'No title';
    const creator = data.snippet?.videoOwnerChannelTitle || 'Unknown';
    const thumbnails = data.snippet?.thumbnails;
    const thumbnailUrl =
      thumbnails?.maxres?.url ||
      thumbnails?.standard?.url ||
      thumbnails?.high?.url ||
      thumbnails?.medium?.url ||
      thumbnails?.default?.url ||
      '';

    return (
      <div
        key={index}
        className="bg-white dark:bg-[#1f1f1f] border-2 border-black dark:border-[tomato] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <Link to={videoUrl} target="_blank" rel="noopener noreferrer">
          <img src={thumbnailUrl} alt={title} className="w-full h-52 object-cover" />
        </Link>
        <div className="bg-[#E7E8D1] dark:bg-[#2A3132] dark:text-mywhite p-4">
          <div className="font-bold text-base md:text-lg line-clamp-2 border-y border-black dark:border-[tomato] py-2">
            {title}
          </div>
          <p className="pt-2 text-sm">
            Creator: <b>{creator}</b>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full px-4 md:px-8 py-8">
      {loading ? (
        <p className="text-center text-lg font-semibold dark:text-white">Loading trending courses...</p>
      ) : (
        <>
          <h3 className="text-center text-[1.5em] font-mono font-bold text-black dark:text-yellow-400 bg-[#E7E8D1] dark:bg-myblack py-3 mb-6 rounded-md">
            Trending Courses
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
            {videos.length > 0 ? renderCards : <p className="text-center">No trending videos found.</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
