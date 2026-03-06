# 🌱 AI Crop Recommendation System
---
## Live Demo:
https://crop-recommendation-system-2vcho6pu6.vercel.app/

An AI-powered Crop Recommendation System that predicts the most suitable crop based on soil nutrients and environmental conditions. The system uses a trained Machine Learning model deployed through a Flask API backend and a React + Vite frontend.

This project demonstrates the application of Machine Learning in Precision Agriculture, helping farmers choose the optimal crop for their land based on scientific data.
---
## 🚀 Features

AI-based crop prediction using environmental and soil parameters

Clean and responsive frontend built with React + Vite

Backend API built using Flask

Deployed using Vercel (Frontend) and Render (Backend)

Smooth UI with modern design

Real-time prediction results

Supports 22 different crop types
---
## 🧠 Machine Learning Model

The system uses a Random Forest Classifier trained on agricultural data containing 2200 records with the following input features:

Input Features

Nitrogen (N)

Phosphorus (P)

Potassium (K)

Temperature

Humidity

Soil pH

Rainfall

Output

Recommended crop suitable for the given conditions.
---
## 📊 Model Performance

The trained model achieved high performance metrics during evaluation.

Metric	Score
Accuracy	99%
Precision	≈100%
Recall	≈99%
F1 Score	≈99%
Detailed Classification Report
precision    recall  f1-score   support

apple         1.00      1.00      1.00        30
banana        1.00      1.00      1.00        30
blackgram     1.00      0.97      0.98        30
chickpea      1.00      1.00      1.00        30
coconut       1.00      1.00      1.00        30
coffee        1.00      1.00      1.00        30
cotton        1.00      1.00      1.00        30
grapes        1.00      1.00      1.00        30
jute          0.97      1.00      0.98        30
kidneybeans   1.00      1.00      1.00        30
lentil        1.00      0.93      0.97        30
maize         0.97      1.00      0.98        30
mango         1.00      1.00      1.00        30
mothbeans     0.94      1.00      0.97        30
mungbean      1.00      1.00      1.00        30
muskmelon     1.00      1.00      1.00        30
orange        1.00      1.00      1.00        30
papaya        1.00      1.00      1.00        30
pigeonpeas    1.00      1.00      1.00        30
pomegranate   1.00      1.00      1.00        30
rice          1.00      0.97      0.98        30
watermelon    1.00      1.00      1.00        30

accuracy                           0.99
---
## 🏗️ System Architecture
User (Frontend)
       ↓
React + Vite Interface
       ↓
API Request
       ↓
Flask Backend (Render)
       ↓
Random Forest Model
       ↓
Predicted Crop Result
---
## 🛠️ Tech Stack
Frontend

React

Vite

TypeScript

TailwindCSS

Lucide Icons

Backend

Flask

Flask-CORS

Scikit-learn

NumPy

Joblib

Deployment

Frontend: Vercel

Backend: Render
---
## 📂 Project Structure
crop-recommendation-system
│
├── backend
│   ├── app.py
│   ├── rf.pkl
│   └── requirements.txt
│
├── frontend
│   └── farm-finder-interface-main
│        ├── src
│        ├── public
│        └── package.json
│
└── README.md

---
## ⚙️ How to Run Locally
Clone the Repository
git clone https://github.com/yourusername/crop-recommendation-system.git
cd crop-recommendation-system
Run Backend
cd backend
pip install -r requirements.txt
python app.py

Backend runs at:

http://localhost:10000
Run Frontend
cd frontend/farm-finder-interface-main
npm install
npm run dev

Frontend runs at:

http://localhost:5173

---
## 🌍 Future Improvements

Integration with real-time weather APIs

Soil sensor integration

Mobile application version

Crop disease prediction module

Fertilizer recommendation system
---
## 👨‍💻 Author

Konda Kristhu Raju
AI / Machine Learning Enthusiast

LinkedIn
https://www.linkedin.com/in/kristhuraju/

GitHub
https://github.com/rajukonda767
---

## ⭐ If you like this project

Give the repository a star ⭐ on GitHub to support the project.
