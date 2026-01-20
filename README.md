# 🛍️ AppShop – Premium Product Discovery Platform

**AppShop** is a modern full-stack web application built with **Next.js (App Router)** and **Express.js**, designed to help users discover premium products curated just for them. From cutting-edge electronics to everyday essentials, AppShop delivers a clean, fast, and user-friendly shopping experience.

(Live Link:https://shopapp-lovat.vercel.app/ )
---

## 📌 Project Description

This project demonstrates a complete frontend and backend workflow using Next.js and Express.js.  
It includes a public landing page, mock authentication, public item listings, detailed item pages, and an optional protected page for adding new items.

The goal of this project is to showcase:
- Routing with Next.js App Router
- Authentication & route protection
- API integration with Express.js
- Clean UI and component structure
- Best practices for full-stack development

---

## 🚀 Features

### 1️⃣ Landing Page
- Publicly accessible (no authentication required)
- Clean and responsive design
- Navbar includes navigation links to:
  - Login
  - Items

---

### 2️⃣ Authentication
- Login credentials stored in **cookies**
- Protected routes for authenticated users
- Redirect unauthenticated users to login
- Redirects to **Items page after successful login**

🔐 **Optional (Recommended Enhancement):**
- NextAuth.js integration
- Google or credentials-based login

---

### 3️⃣ Item List Page
- Publicly accessible
- Fetches item data from an **JSON**
- Displays items in card format
- Each item card includes:
  - Item name
  - Description
  - Price
  - Image 

---

### 4️⃣ Item Details Page
- Publicly accessible
- Displays full details of a selected product
- Uses dynamic routing with Next.js App Router

---
---

## 🛠️ Technologies Used

### Frontend
- **Next.js 15/16 (App Router)**
- React
- Tailwind CSS
- Cookies for authentication
- Toast notifications

### Backend
- **Express.js**
 JSON

---
Git Repo : https://github.com/Shaifuzzman-Ratul/shop-app-a-modern-shopping-website-

