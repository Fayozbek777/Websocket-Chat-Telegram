# 🚀 WebSocket Chat + Telegram Bot

Simple real-time chat app using **FastAPI (WebSocket)** and **React (Vite)**.
All messages are also sent to a Telegram bot.

---

## 📦 Tech Stack

- Backend: FastAPI, WebSocket
- Frontend: React + Vite
- API: Telegram Bot API

---

## ⚙️ Setup

### 1. Clone project

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2. Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Change `.env.example` file to `.env` file:

```env
BOT_TOKEN=your_bot_token
CHAT_ID=your_chat_id
```

Run server:

```bash
uvicorn app.main:app --reload --port 8000
```

---

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 WebSocket

```
ws://localhost:8000/ws
```

---

## 💬 Features

- Real-time chat (WebSocket)
- Broadcast messages
- Telegram bot integration
- Simple UI

---

## 🔐 Notes

- Do NOT expose your Telegram bot token
- Add `.env` to `.gitignore`

---

## 📌 Author

Fayozbek
