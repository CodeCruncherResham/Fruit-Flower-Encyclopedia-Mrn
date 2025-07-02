# 🌿 Fruit & Flower Encyclopedia

A modern and interactive MERN stack web application that allows users to **explore**, **compare**, **bookmark**, and **review** various fruits and flowers with multilingual support, dark mode, voice input, and external API integration.

## 🌟 Features

- 🧭 **Search & Explore** fruits and flowers
- 🌐 **Multilingual Toggle** (English / Hindi)
- 🌗 **Dark Mode Support**
- 🎙️ **Voice Search** input
- 📊 **Compare** two fruits side-by-side
- 🔖 **Bookmark** favorite items (stored in LocalStorage)
- ✍️ **User Reviews & Ratings** system
- 🔎 **Smart Fetching**
  - If not in DB, it fetches:
    - 🍎 Fruits from **Spoonacular API**
    - 🌸 Flowers from **Wikipedia API**


## 🧰 Tech Stack

| Frontend              | Backend            | Database     | External APIs            |
|-----------------------|--------------------|--------------|--------------------------|
| React, Bootstrap 5    | Express.js, Node.js| MongoDB      | Spoonacular, Wikipedia   |


## 🧱 Folder Structure

fruit-flower-encyclopedia/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── assets/style.css
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── config/db.js
│   └── app.js
├── data/
│   ├── fruits.json
│   └── flowers.json
├── .env
└── package.json

````

---

## 🧪 Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/fruit-flower-encyclopedia.git
cd fruit-flower-encyclopedia
````

### 2. Backend Setup

```bash
cd server
npm install
```

#### 📄 Create `.env` file

MONGO_URI=mongodb://localhost:27017/fruitFlowerDB
SPOONACULAR_KEY=your_spoonacular_api_key
PORT=5000

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

## 🚀 Live Demo

> [🔗 Link to hosted project (if available)](https://your-deployment-link.com)


## 🖼️ Screenshots

> Add 2–3 screenshots showcasing Home, Comparison, Review, and Dark Mode.


## 📤 API Routes

### Fruits

* `GET /api/fruits` → All fruits
* `GET /api/fruits/:name` → Fruit by name (from DB or Spoonacular)

### Flowers

* `GET /api/flowers` → All flowers
* `GET /api/flowers/:name` → Flower by name (from DB or Wikipedia)

### Reviews

* `POST /api/reviews` → Submit a review
* `GET /api/reviews/:itemName` → Get reviews for item


## ✍️ Author

> 🔸 **Resham Yadav**
> 🌐 [Portfolio](https://your-portfolio.com) | 💼 [LinkedIn](https://linkedin.com/in/yourprofile) | 📁 [GitHub](https://github.com/your-username)


