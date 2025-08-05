# Fusion2.0

# ![ScholarBuddy Logo](frontend/src/images/logo.jpg)

# 🎓 ScholarBuddy

**ScholarBuddy** is an AI-powered web application designed to help students discover, track, and apply for scholarships in a seamless, personalized, and intelligent way. It simplifies the search process through smart filters, real-time updates, and an integrated chatbot assistant to guide users at every step of their journey.

---

## 🧠 Project Description

Scholarships can open doors for deserving students — but finding the right one is often overwhelming. ScholarBuddy aims to solve this by acting as a virtual companion:

- 🧭 Helps students **search** for scholarships based on their profile, interests, and qualifications.
- 🤖 Uses **AI** to provide recommendations and answer scholarship-related queries.

It’s designed for **students**, with a focus on usability, speed, and clarity.

---

## 📁 Folder Structure

```
scholarbuddy/
├── public/                     # Static files and favicon
│   └── index.html
├── src/                        # Frontend source code
│   ├── assets/                 # Images, logos, icons
│   │   └── logo.png
│   ├── components/             # Reusable components
│   │   └── ChatBot.jsx         # AI Chatbot interface
│   ├── pages/                  # Page-level components
│   │   └── Home.jsx
│   ├── styles/                 # CSS and Tailwind classes
│   │   └── a.css
│   ├── App.jsx                 # Root component
│   └── index.js                # Entry point
├── backend/                    # Flask or Node backend
│   └── app.py / index.js       # Server logic
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── LICENSE                     # Non-commercial license
├── README.md                   # This file
├── package.json                # Node project config
└── requirements.txt            # Python dependencies (if Flask)
```

---

## 🖥️ Tech Stack

| Layer       | Tools & Libraries                  |
|-------------|------------------------------------|
| **Frontend**| React.js, Tailwind CSS, JavaScript |
| **Backend** | Flask (Python) or Node.js (optional) |
| **Database**| MongoDB or Firebase (optional)     |
| **AI**      | OpenAI GPT-4 API for chatbot       |
| **Hosting** | GitHub Pages / Vercel / Render     |

---

## 🚀 Features

- 🔍 **Smart Scholarship Search**  
  Find relevant scholarships based on filters like degree level, location, funding, and deadlines.

- 🤖 **AI-Powered Chatbot**  
  Ask question and get instant responses.

- 📌 **Save & Track Scholarships**  
  Mark scholarships as saved, applied, shortlisted, or rejected with visual tags.
---

## 🔧 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Python 3 (if using Flask)
- OpenAI API Key (for chatbot)

### Installation Steps

```bash
git clone https://github.com/yourusername/scholarbuddy.git
cd scholarbuddy
npm install
npm start
```

_For Flask backend (optional):_

```bash
cd backend
pip install -r requirements.txt
python app.py
```

---

## 🧩 Scope for Development

ScholarBuddy is in active development. Upcoming planned features include:

### 🔄 Phase 2 (In Progress)
- User login & profile management
- Scholarship application submission tracker
- Advanced AI feedback on eligibility

### 🌍 Phase 3 (Future)
- Multi-language support
- Mobile app version
- Resume/essay builder assistant
- Peer reviews & forums for advice sharing

---

## 📜 License

**Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**  
This means you are **free to use, adapt, and build** upon the project — but **not for commercial purposes**.

More info: [https://creativecommons.org/licenses/by-nc/4.0/](https://creativecommons.org/licenses/by-nc/4.0/)

---

## 🤝 Contributing

We welcome contributions!  
If you have suggestions, improvements, or want to add features:

1. Fork this repo  
2. Create a new branch (`feature/your-feature-name`)  
3. Commit your changes  
4. Submit a Pull Request

---

## 📬 Contact

Project Members: Ajay Armugam, Sumaiya Rahman, Jabez Jena, Prajit G
**Email:** technoformx@gmail.com 

---
## 💡 Acknowledgements

- [OpenAI](https://openai.com/) for ChatGPT API  
- [Freepik & IconScout](https://www.iconfinder.com/) for assets  
- Community feedback from students 

---

> **ScholarBuddy: Empowering students, one scholarship at a time.**

