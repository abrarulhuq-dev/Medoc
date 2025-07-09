
# <img src='./frontend/public/icon.png' alt='logo' sizes="20"> MEDOC 

> **Transforming Healthcare, Empowering Every Patient Journey**

![Last Commit](https://img.shields.io/github/last-commit/abrarulhuq-dev/Medoc)
![Languages](https://img.shields.io/github/languages/count/abrarulhuq-dev/Medoc)
![JavaScript](https://img.shields.io/badge/javascript-99%25-blue)

---

## 🧰 Tech Stack

| Frontend | Backend | Database | Tools & Others |
|----------|---------|----------|----------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) | ![Express](https://img.shields.io/badge/-Express-000000?logo=express) | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) | ![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?logo=postcss&logoColor=white) |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white) | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) |  | ![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448C5?logo=cloudinary) ![Razorpay](https://img.shields.io/badge/-Razorpay-528FF0?logo=razorpay) ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite) |

---

## 📋 Table of Contents

- [Overview](#overview)
- [Quickstart](#quickstart)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🧠 Overview

**Medoc** is a full-stack Doctor Appointment Booking Platform built using the MERN stack.  
It allows patients to search for doctors by specialization, book appointments based on availability, and securely pay using Razorpay.  

Built with scalability and modern design in mind, Medoc aims to make healthcare more accessible and connected.

---

## ⚡ Quickstart

```bash
# Clone the repository
git clone https://github.com/abrarulhuq-dev/Medoc.git
cd Medoc

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Setup environment variables (see below)

# Start backend server
npm run dev

# Start frontend dev server
npm run dev
```

---

## 🚀 Features

- ✅ Secure user & doctor authentication (JWT-based)
- ✅ Doctor dashboard with appointment controls
- ✅ Patient dashboard with history and booking
- ✅ Real-time booking availability
- ✅ Razorpay payment gateway integration
- ✅ Cloudinary for secure image uploads
- ✅ Fully responsive UI with Tailwind + React
- ✅ Modular backend with Express & Mongoose

---

## ⚙️ Environment Variables

Create a `.env` file in both the `backend/` and `frontend/` directories with the following:

```env
# Backend (.env)
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Frontend (.env)
VITE_API_URL=http://localhost:5000
```

---

## 🖼️ Screenshots

> (📌 Add your actual screenshots in the `screenshots/` folder)

```markdown
![Home Page](./screenshots/home.png)
![Doctor Profile](./screenshots/doctor-profile.png)
![Booking Page](./screenshots/booking.png)
```

---

## 🤝 Contributing

We welcome contributions!  
Here’s how you can help:

```bash
# 1. Fork the repo
# 2. Create your branch
git checkout -b feature/awesome-feature

# 3. Make your changes
# 4. Commit and push
git commit -m "Added new awesome feature"
git push origin feature/awesome-feature

# 5. Submit a pull request 🚀
```

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abrarul Huq**  
📬 [GitHub Profile](https://github.com/abrarulhuq-dev)
