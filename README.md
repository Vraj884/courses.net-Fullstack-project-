# 🎓 Courses.net — Full Stack Platform (React + Node.js + MongoDB)

**Courses.net** is a full-stack web application that allows users to browse trending YouTube course playlists, search for specific topics, and manage user accounts. It uses a **React.js frontend**, **Express.js backend**, and **MongoDB** for the database.

---

## 🧰 Tech Stack

| Layer       | Tech Used                              |
|-------------|-----------------------------------------|
| Frontend    | React.js, Tailwind CSS, Context API     |
| Backend     | Node.js, Express.js, Nodemailer         |
| Database    | MongoDB (with Mongoose)                 |
| Auth        | Basic MongoDB-based auth (no JWT)       |
| API         | YouTube Data API v3 (Playlist endpoint) |
| Env Config  | dotenv                                  |

---

## 🌐 Live URL (Optional)

> Not deployed yet — Run locally using the steps below.

---

## 🗂️ Project Structure

```
courses-net/
│
├── fsd/                        # Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── App.jsx
│
├── server/                     # Backend (Node + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
├── screenshots/                # Screenshot images for README
│   ├── home.png
│   ├── search.png
│   ├── login.png
│   └── profile.png
│
├── .env                        # Environment variables
├── package.json
```

---

## 🚀 Features

### 🖥️ Frontend

- 🔍 **Search Courses:** Fetches playlists via YouTube API
- 🎥 **Render Playlists:** Auto-fetch thumbnails, titles, and links
- 🧑‍💻 **User Auth (Sign Up / Log In / Update / Delete)**
- 🌗 **Dark/Light Mode:** Manual toggle
- 🌐 **Fully Responsive:** Mobile-first design via Tailwind
- 🧠 **React Context API:** For global state & auth
- 🎯 **Trending Courses:** Shown by default on homepage

### 🖧 Backend

- ✅ User signup `/api/users/signup`
- ✅ Login via query `/api/users/login`
- ✅ Delete account `/api/users/delete`
- ✅ Check password `/api/users/check`
- ✅ Update name/email `/api/users/update`
- ✅ Email notifications for login & signup (via Nodemailer)

---

## 🛠️ Getting Started Locally

### 📁 1. Clone the Repository

```bash
git clone https://github.com/your-username/courses-net.git](https://github.com/Vraj884/courses.net-Fullstack-project-.git
cd courses-net
```

---

### 🖥️ 2. Setup Frontend (React)

```bash
cd fsd
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

> ⚠️ Replace the **YouTube API Key** in `Input.jsx` with your own:  
> [Get it here](https://console.cloud.google.com/apis)

```js
const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace this
```

---

### 🌐 3. Setup Backend (Express)

```bash
cd server
npm install
```

#### Create `.env` file in `/server`:

```env
USERNAME=your.email@gmail.com
PASS=your_gmail_app_password
```

> ⚠️ Use a [Gmail App Password](https://myaccount.google.com/apppasswords) if you have 2FA.

#### Start backend server:

```bash
node index.js
```

Backend runs at:

```
http://localhost:7000
```

---

## 📬 Backend API Endpoints

| Method | Endpoint              | Description                      |
|--------|-----------------------|----------------------------------|
| GET    | `/api/users/login`    | Log in user via query params     |
| POST   | `/api/users/signup`   | Register new user                |
| POST   | `/api/users/delete`   | Delete user by email             |
| POST   | `/api/users/check`    | Check password validity          |
| POST   | `/api/users/update`   | Update user name and email       |

---

## 🖼️ Screenshots

> Place these inside `/screenshots/` at the project root for proper rendering.

```md
### Homepage
![Homepage Screenshot](https://github.com/Vraj884/courses.net-Fullstack-project-/blob/main/screenshots/home.png?raw=true)

### Search Results
![Search Results](https://github.com/Vraj884/courses.net-Fullstack-project-/blob/main/screenshots/search.png?raw=true)

### Login Page
![Login Page](https://github.com/Vraj884/courses.net-Fullstack-project-/blob/main/screenshots/login.png?raw=true)

### Profile Update
![Profile Update](https://github.com/Vraj884/courses.net-Fullstack-project-/blob/main/screenshots/profile.png?raw=true)

```

---

## ❗ Notes

- ❌ No JWT or session — Auth is simple MongoDB-based check
- 📮 Email notifications require valid Gmail + app password
- 🔐 Keep your `.env` file safe and don’t expose credentials

---

## 👤 Author

**Made by [Vraj Patel]**  
📧 vraj884@yahoo.com  

---

## 📢 Contributing

Pull requests and suggestions are welcome! Please fork the repo and open a PR.

---

## 📃 License

MIT © 2025
