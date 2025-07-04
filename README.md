# 🎓 UniBuddy – AI-Powered University Student Assistant 🤖

🔗 **Live Link:** [https://unibuddystudentaiassitent.netlify.app](https://unibuddystudentaiassitent.netlify.app)

---

## 🧾 Table of Contents

- [About the Project](#about-the-project)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Future Scope](#future-scope)
- [Use Cases](#use-cases)
- [Challenges Faced](#challenges-faced)
- [Screenshots](#screenshots)
- [FAQs](#faqs)
- [License](#license)
- [Author](#author)

---

## 📌 About the Project

**UniBuddy** is a smart, AI-powered university chatbot developed to assist students with detailed, personalized information related to academics, fees, placements, hostels, and overall campus life.

The goal is to **automate student support** using conversational AI, reducing the burden on university helpdesks and offering instant, 24/7 answers to students.

It supports multiple programs like:

- 🎓 B.Tech (CSE, ECE, ME, IT, etc.)
- 💼 BBA / MBA
- 🔬 B.Sc (Physics, Chemistry, CS, etc.)
- 📊 Other professional & UG/PG courses

---

## 📽️ Demo

> 🔗 Try it Live: [https://unibuddystudentaiassitent.netlify.app](https://unibuddystudentaiassitent.netlify.app)

Ask anything like:


And the chatbot will answer instantly using AI ✨

---

## 🌟 Features

### 📚 Academic Support
- Stream-wise subject lists (CSE, ECE, BBA, MBA, etc.)
- Semester-wise curriculum
- Career paths & specializations

### 💸 Financial Guidance
- Course fees (semester/year)
- Hostel + mess fees
- Scholarship info & eligibility

### 🏠 Campus Life Info
- Hostel types, rules, facilities
- Mess food quality, meal timings
- Library, labs, Wi-Fi, study zones

### 🎯 Placements Insight
- Top companies
- Average/highest packages
- Internship & skill development

### 🤖 AI Chat Experience
- Chatbot built using OpenAI GPT
- Natural Language Understanding (NLP)
- Friendly conversational interface

---

## 🧰 Technologies Used

| Component       | Tech Stack                          |
|----------------|--------------------------------------|
| Frontend        | React.js, Tailwind CSS              |
| Backend         | Node.js, Express.js                 |                    |
| Hosting         | Netlify (Frontend)
| Database        | Static JSON (for now, can be MongoDB)|

---

## 🧠 How It Works

1. **User sends a question** (e.g., "What are the MBA fees?")
2. **Frontend React app** sends the query to the backend.
3. **Backend Node/Express server** formats the query and sends it to **OpenAI's GPT API**.
4. **OpenAI responds with a generated answer**.
5. **Frontend shows the response** to the user instantly.

Optional: Static data like course names, hostel details, and fees can be pulled from a local or cloud database.

---

## 🔧 Installation & Setup

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/unibuddy-chatbot.git
cd unibuddy-chatbot


