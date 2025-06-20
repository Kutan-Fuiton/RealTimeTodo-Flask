# RealTimeTodo‑Flask

> A beginner-friendly Flask Todo app with real-time search filtering and clean Bootstrap UI.

---

## 🚀 Features

- ✅ Add, view, and delete todo items with SQLite persistence via Flask‑SQLAlchemy  
- 🔍 Real-time search/filtering—see results as you type  
- 🎨 Clean, responsive UI using Bootstrap and live footer  
- 🌟 Minimal and intuitive code structure—ideal for learning Flask fundamentals

---

## 🛠 Tech Stack

- **Flask** – lightweight Python web framework :contentReference[oaicite:1]{index=1}  
- **Flask‑SQLAlchemy** – ORM for database handling (SQLite)  
- **JavaScript (Fetch API)** – enables live filtering without page reloads  
- **Bootstrap 5** + **Bootstrap Icons** – handles responsive layout & icons

---

## 📁 Project Structure

```text
RealTimeTodo‑Flask/
├── app.py              # Main Flask application and routes
├── instance/
│   └── todo.db         # SQLite database (don't commit)
├── static/
│   ├── css/            # Custom CSS if any
│   └── js/             # JS for live search behavior
├── templates/
│   ├── base.html       # Layout with navbar & footer
│   ├── index.html      # Main page (add & list todos)
│   └── about.html      # Info page with app details
└── .gitignore          # Files & folders to exclude from Git
