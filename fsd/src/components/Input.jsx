import React, { useState, createContext, useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import Content from './Content';

export const UserContext = createContext();

const Input = () => {
  const [arr, setArr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef();

  const apikey = "Your api key here..";
  const Playlist = [
    "PLMwCFr4NqgMqeQs4i-bc5dxd2GJYLJZwx", // FSD
    "PL_2HnWNGs12EVn58KVfQSyR4Me9iKJRSX", // Projects
    "PLaNNx1k0ao1v8I2C8DAxXOayC3dG00xtj", // English
    "PL_2HnWNGs12Fe9JedpuQd2BfsQG9ryYte", // Trending
    "PLPIwNooIb9vgfXs-QkRYqqZbDXX-yLf59", // Blockchain
    "PLjVLYmrlmjGe-xLyoCdDrt8Nil1Alg_L3", // Machine learning
  ];

  const mapInputToPID = (input) => {
    switch (input) {
      case 'projects':
      case 'project':
      case 'website projects':
      case 'fsd projects':
      case 'projects tutorial':
      case 'tutorial':
        return 1;
      case 'webdev':
      case 'website':
      case 'website development':
      case 'full stack development':
      case 'fsd':
        return 0;
      case 'english':
      case 'ielts':
      case 'toefl':
        return 2;
      case 'trending':
      case 'trendings':
      case 'trend':
        return 3;
      case 'block chain':
      case 'block':
        return 4;
      case 'machine':
      case 'machine learning':
      case 'ml':
        return 5;
      default:
        return null;
    }
  };

  const dothis = () => {
    const userInput = inputRef.current?.value.trim().toLowerCase();
    const pid = mapInputToPID(userInput);

    if (pid === null) {
      setArr(null);
      setError("Please enter a valid topic.");
      return;
    }

    setLoading(true);
    setError('');
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=100&playlistId=${Playlist[pid]}&key=${apikey}`)
      .then((res) => res.json())
      .then((data) => {
        setArr(data.items || []);
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong while fetching data.");
        setArr(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex gap-2 justify-center md:justify-end py-10 md:py-4 px-4 flex-wrap">
        <input
          type="text"
          ref={inputRef}
          className="w-full md:w-[30%] h-14 border-2 border-black dark:border-[#e100ff] bg-[#E7E8D1] dark:bg-black px-6 rounded-full text-lg dark:text-[#008cff] font-bold"
          placeholder="Search Anything You Want..."
        />
        <button
          onClick={dothis}
          className="h-14 w-14 md:w-[10%] rounded-full border-2 border-black dark:border-0 bg-[#E7E8D1] dark:bg-myblack text-black dark:text-white flex justify-center items-center"
        >
          <FaSearch />
        </button>
      </div>

      {loading && <p className="text-center text-lg dark:text-white">Loading...</p>}
      {error && <p className="text-center text-red-600 font-semibold">{error}</p>}
      {arr && arr.length > 0 && (
        <UserContext.Provider value={arr}>
          <Content />
        </UserContext.Provider>
      )}
    </>
  );
};

export default Input;
