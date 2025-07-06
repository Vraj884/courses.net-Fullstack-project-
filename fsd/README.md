# 🎓 Courses.net

**Courses.net** is a responsive, beginner-to-intermediate full-stack learning platform built with **React.js** and **Node.js**, offering curated YouTube course playlists across trending tech and skill domains. It includes basic user authentication (MongoDB-based, without JWT) and global state management via React Context.

> ⚠️ **Note:** If you want to use this project, make sure to **replace the YouTube API key** in the `Input.jsx` component with your own.  
> You can get a free API key from: https://console.cloud.google.com/apis

---

## 🚀 Features

- 🔍 **Course Search Engine**
  - Search by keywords like `fsd`, `project`, `blockchain`, `ml`, etc.
  - Fetches results from **YouTube Playlist API**

- 🎥 **Dynamic Playlist Rendering**
  - Auto-fetches playlists and renders video thumbnails, titles, and creators
  - Clickable links to YouTube

- 🧑‍💻 **User Authentication**
  - Sign up / Log in / Log out
  - MongoDB-based authentication (no JWT or session)
  - Update and delete account functionality

- 🌗 **Theme Toggle**
  - Switch between **light** and **dark** themes manually

- 🧠 **React Context API**
  - For managing global user state and auth status

- 📱 **Responsive Design**
  - Fully mobile-friendly using **Tailwind CSS**

- 🎯 **Trending Courses on Homepage**
  - Fetches trending playlist by default on load

---

## 🖼️ Screenshots

> Add screenshots in `./public/screenshots/` folder and use these:

```md
![Home Page](./screenshots/home.png)
![Search Results](./screenshots/search.png)
![Login Page](./screenshots/login.png)
![Profile Update](./screenshots/profile.png)
