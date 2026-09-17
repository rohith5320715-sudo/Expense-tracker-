# Expense Tracker Application (Full-Stack CRUD Web App)

A complete, production-ready, full-stack **Expense Tracker Application** built with Django REST Framework, SQLite, and React.js (Vite). Designed for tracking personal or organizational expenses, monitoring spending categories, and providing clear financial insights through a responsive user interface.

---

## Table of Contents
1. Project Overview
2. Key Features
3. Technology Stack
4. System Architecture & Data Flow
5. Installation & Windows Setup Guide
6. Running the Application
7. REST API Documentation & Endpoints
8. Version Control & Submission

---

## 1. Project Overview
The Expense Tracker is a financial management application designed to handle the full lifecycle of expense records: creating spending entries, categorizing expenses, updating transaction details, filtering by category, and deleting incorrect records.

---

## 2. Key Features
* **Live Dashboard KPIs:** Total expenses count and total spend amount.
* **Complete CRUD Operations:** Create, Read, Update, and Delete expense entries seamlessly.
* **Search & Multi-Filter:** Instant search and category-based filtering.
* **Dual Database Visibility:** Access via Django Admin or direct SQLite inspection.
* **Comprehensive Validation:** Server-side and client-side checks for positive amounts and mandatory fields.

---

## 3. Technology Stack
* **Frontend:** React.js 18 + Vite, Axios, Modern CSS3
* **Backend:** Python, Django 5.2, Django REST Framework (DRF)
* **Database:** SQLite 3 (`backend/db.sqlite3`)
* **CORS:** `django-cors-headers`

---

## 4. System Architecture & Data Flow
```text
[ React.js UI (Browser) ] 
         │ (HTTP JSON Requests)
         ▼
[ Django REST Framework (API Endpoints) ]
         │ (Django ORM)
         ▼
[ SQLite Database (backend/db.sqlite3) ]


5. Installation & Windows Setup GuidePrerequisitesPython 3.10+Node.js 18+ & npmBackend Setup (Terminal 1)Bashcd backend
python -m venv venv
.\venv\Scripts\activate
pip install django djangorestframework django-cors-headers
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
Frontend Setup (Terminal 2)Bashcd frontend
npm install
6. Running the ApplicationRun both servers simultaneously in separate terminals:Backend Server:Bashcd backend
.\venv\Scripts\activate
python manage.py runserver
(Runs at http://127.0.0.1:8000/)Frontend Server:Bashcd frontend
npm run dev
(Runs at http://localhost:5173/)7. REST API Documentation & EndpointsBase URL: http://127.0.0.1:8000/api/HTTP MethodEndpointDescriptionGET/api/expenses/List all expensesPOST/api/expenses/Create a new expenseGET/api/expenses/{id}/Get single expense detailsPUT/api/expenses/{id}/Full update of an expensePATCH/api/expenses/{id}/Partial update of an expenseDELETE/api/expenses/{id}/Delete an expense8. Version ControlManaged via Git and GitHub following strict clean-commit practices.Bashgit add .
git commit -m "Initial commit for Expense Tracker full-stack application"
git push origin main
