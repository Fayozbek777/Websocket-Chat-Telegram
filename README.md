# 🚀 WebSocket Chat + Telegram Bot

Простое приложение для чата в реальном времени, использующее **FastAPI (WebSocket)** и **React (Vite)**.
Все сообщения также отправляются в Telegram-бота.

---

## 📦 Tech Stack

- Backend: FastAPI, WebSocket
- Frontend: React + Vite
- API: Telegram Bot API

---

## ⚙️ Setup

### 1. Clone project

```bash
git clone https://github.com/Fayozbek777/Websocket-Chat-Telegram.git
cd Websocket-Chat-Telegram
```

---

### 2. Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Замените файл `.env.example` на файл `.env`:

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

- Чат в реальном времени (WebSocket)
- Трансляция сообщений
- Интеграция с Telegram-ботом
- Простой пользовательский интерфейс

---

## 🔐 Notes

- НЕ раскрывайте токен вашего Telegram-бота
- Добавьте `.env` в `.gitignore`

---

## 📌 Author

Fayozbek
