# 📡 Courses.net Backend (Node.js + Express + MongoDB)

This is the backend for the **Courses.net** platform — a simple user system with registration, login, email notifications, profile updates, and more. Built with **Node.js**, **Express**, **MongoDB**, and **Nodemailer**.

---

## 🔧 Tech Stack

- **Backend Framework**: Express.js  
- **Database**: MongoDB (Mongoose)  
- **Email Notifications**: Nodemailer  
- **Language**: ECMAScript Modules (ESM)  
- **Environment Variables**: `.env`

---

## 📁 Project Structure

```
project-root/
│
├── index.js                    # App entry point
├── routes/
│   └── userRoutes.js           # Express routes
├── controllers/
│   └── userController.js       # Business logic
├── models/
│   └── User.model.js           # Mongoose schema
├── utils/
│   └── mail.js                 # Email utility
├── .env                        # Environment variables
├── package.json
```

---

## 🚀 Features

- ✅ User registration (`/api/users/signup`)
- ✅ User login (`/api/users/login`)
- ✅ User deletion (`/api/users/delete`)
- ✅ Password verification (`/api/users/check`)
- ✅ Profile update (`/api/users/update`)
- ✅ Email notifications for login and signup
- ❌ No JWT or session authentication (basic validation only)

---

## 🛠️ Getting Started

### 1. 📥 Clone the repository

```bash
git clone https://github.com/your-username/courses-backend.git
cd courses-backend
```

### 2. 📦 Install dependencies

```bash
npm install
```

### 3. ⚙️ Create `.env` file in the root

```env
USERNAME=your.email@gmail.com
PASS=your_gmail_app_password
EMAIL_USER=your.email@gmail.com
```

> ⚠️ Use a [Gmail App Password](https://myaccount.google.com/apppasswords) if you use 2FA.

### 4. ▶️ Run the server

```bash
node index.js
```

Server runs on:

```
http://localhost:7000
```

---

## 📬 API Endpoints

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| GET    | `/api/users/login`   | Log in user via query params   |
| POST   | `/api/users/signup`  | Register new user              |
| POST   | `/api/users/delete`  | Delete user by email           |
| POST   | `/api/users/check`   | Check password validity        |
| POST   | `/api/users/update`  | Update email and name          |

---

## 📄 Example `.env`

```env
USERNAME=your.email@gmail.com
PASS=your_gmail_app_password
```

---

## 📜 Notes

- 📌 MongoDB is expected at `mongodb://localhost:27017/admin`
- 📌 This project does not use JWT or sessions. Only plain password check (basic setup).
- 📌 All data is sent as JSON in POST body or query params (for login).

---

## ❗ Important

> If you want to use this project, don’t forget to configure your own **email credentials** in `.env`. Without a valid Gmail + app password, the email notifications won’t work.

---

## ✉️ Author

**Made by [Vraj patel]**  
📧 vraj884@yahoo.com  

---


