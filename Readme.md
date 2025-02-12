# Railway Management System API

This project provides a simple **Railway Management System API** using **Node.js, Express, and MySQL**.

## 🚀 Features
- **User Authentication** (JWT-based login & registration)
- **Train Management** (Add, Search Trains)
- **Seat Booking System** (Book & Get Booking Details)

## 🏗️ Project Structure
```
/railway-management
  |-- /config
  |-- /routes
  |-- /middlewares
  |-- /controllers
  |-- server.js
  |-- .env
  |-- package.json
```

## ⚡ Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/railway-management.git
   cd railway-management
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up the `.env` file
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=password
   DB_NAME=railway_db
   JWT_SECRET=your_secret_key
   ```

4. Start the server
   ```bash
   npm start
   ```

## 🔗 API Endpoints

### **Authentication**
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → User login

### **Trains**
- `POST /api/trains/add` → **(Admin only)** Add a train
- `GET /api/trains/search?source=Delhi&destination=Mumbai` → Search trains

### **Bookings**
- `POST /api/bookings/book` → Book a train seat
- `GET /api/bookings/:bookingId` → Get booking details

## 📌 Notes
- Ensure MySQL is running and `railway_db` is created.
- Use **Postman** or any API testing tool to test endpoints.

### 💡 Enjoy coding! 🚀
```

---

## **Final Steps to Run the Project**
1. **Start MySQL Server** and create the database:
   ```sql
   CREATE DATABASE railway_db;
   ```
2. **Run the API**:
   ```bash
   npm start
   ```
3. **Test with Postman** by calling endpoints.

🚀 **Your project is now fully ready!** Let me know if you need any modifications!