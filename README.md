## 📘 Sales Analytics Dashboard

## 1. Overview

The Sales Analytics Dashboard is a MERN-based analytics application designed to process, filter, search, sort, and paginate large-scale sales datasets.
The backend exposes optimized REST APIs for dynamic querying, and the frontend (React + Vite) provides a modern dashboard UI for exploring sales insights.

Large dataset ingestion

Optimized backend queries with MongoDB indexes

Dynamic frontend filters and real-time updates

Production deployment on Render

## 2. Tech Stack

## Frontend

React (Vite)

Axios (API communication)

Modern CSS (Glassmorphism + Animations)

## Backend

Node.js + Express.js

MongoDB + Mongoose

Server-side filtering, sorting, pagination

## Dev Tools

Git & GitHub

Render (Backend Hosting)

Render Static Site Hosting (Frontend)

## 3. Search Implementation Summary

The dashboard supports global keyword search across major fields:

productName

customerName

brand

orderStatus

## How it works:

## The frontend sends a query parameter:

?search=phone


## The backend applies:

{ productName: { $regex: search, $options: "i" } }

## 4. Filter Implementation Summary

Users can filter by:

Region

Gender

Category

Payment Method

Customer Type

Delivery Type

## Frontend sends:

?region=North&gender=Male&payment=UPI


## Backend applies:

if (region !== "All") query.customerRegion = region;

## 5. Sorting Implementation Summary

Sorting is supported on:

Final Amount

Date

Quantity

Discount

## Frontend sends:

?sortBy=finalAmount&order=desc


## Backend applies:

.sort({ [sortBy]: order === "desc" ? -1 : 1 })

## 6. Pagination Implementation Summary

Frontend supports next/previous page navigation.

Default:

page=1

limit=20

## Backend logic:

const skip = (page - 1) * limit;
const results = await Sales.find(query)
  .skip(skip)
  .limit(limit);


Also returns:

{
  "page": 1,
  "totalPages": 5000,
  "totalItems": 100000
}

## 7. Setup Instructions

## Clone the Repository

git clone https://github.com/Venky-43/Sales.git

cd Sales

## 🟦 Backend Setup (/backend)

## 1. Install Packages

cd backend
npm install

## 2. Create .env file

MONGO_URI=mongodb+srv://venkannababukothapalli716_db_user:Venky%4043@cluster0.gtoglp1.mongodb.net/salesdb?retryWrites=true&w=majority&appName=Cluster0

PORT=5000

## 3. Run Backend

npm run dev


## Backend will start at:

http://localhost:5000

## 🟩 Frontend Setup (/frontend)

## 1. Install Packages

cd frontend

npm install

## 2. Create Frontend .env

VITE_API_URL=http://localhost:5000/api/sales

## 3. Run Frontend

npm run dev


## Frontend runs at:

http://localhost:5173

## 🚀 Deployment (Production)

Backend (Render Web Service)

Root Directory → backend

Build Command → npm install

Start Command → node src/index.js

Environment Variables → MONGO_URI, PORT

## Frontend (Render Static Site)

Root Directory → frontend

Build Command → npm install && npm run build

Publish Directory → dist

Environment Variable:
    VITE_API_URL=https://your-backend.onrender.com/api/sales


Both services run independently.

## 🎉 Final Result

URL : https://sales-dashboard-ji59.onrender.com/
