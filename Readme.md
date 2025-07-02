# 🌿 Fruit & Flower Encyclopedia

A modern and interactive MERN stack web application that allows users to **explore**, **compare**, **bookmark**, and **review** various fruits and flowers — with support for **multilingual interface**, **dark mode**, **voice search**, and **external API integration**.


## 🌟 Features

- 🧭 **Search & Explore** fruits and flowers
- 🌐 **Multilingual Toggle** (English / Hindi)
- 🌗 **Dark Mode** support
- 🎙️ **Voice Search** input
- 📊 **Compare** two fruits side-by-side
- 🔖 **Bookmark** favorite items (saved in browser storage)
- ✍️ **User Reviews & Ratings** system
- 🔎 **Smart Data Fetching**
  - Not found in DB? Auto-fetches from:
    - 🍎 **Spoonacular API** for fruits
    - 🌸 **Wikipedia API** for flowers


## 🧰 Tech Stack

| Frontend               | Backend              | Database | External APIs             |
|------------------------|----------------------|----------|---------------------------|
| React, Bootstrap 5     | Express.js, Node.js  | MongoDB  | Spoonacular, Wikipedia    |


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


## 🧪 Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/fruit-flower-encyclopedia.git
cd fruit-flower-encyclopedia

### 2. Backend Setup

```bash
cd server
npm install
```

#### Create `.env` file

```
MONGO_URI=mongodb://localhost:27017/fruitFlowerDB
SPOONACULAR_KEY=your_spoonacular_api_key
PORT=5000
```

Then run:

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

🔗 [View Live Site](https://codecruncherresham.github.io/Fruit-Flower-Encyclopedia-Mrn/)


## 🖼️ Screenshots

> Add 2–3 screenshots showcasing:
>
![Home Page](client/public/screenshots/home.png)
![Dark mode UI Page](client/public/screenshots/compare.png)


## 📤 API Routes

### 🔹 Fruits

* `GET /api/fruits` – Get all fruits
* `GET /api/fruits/:name` – Get fruit by name

### 🔹 Flowers

* `GET /api/flowers` – Get all flowers
* `GET /api/flowers/:name` – Get flower by name

### 🔹 Reviews

* `POST /api/reviews` – Submit a review
* `GET /api/reviews/:itemName` – Get all reviews for an item


## ✍️ Author

> 🔸 **Resham Yadav**
> 🌐 [Portfolio](https://codecruncherresham.github.io/portfolio/)
> 💼 [LinkedIn](https://linkedin.com/in/resham-yadav-a8740b28b/)
> 📁 [GitHub](https://github.com/CodeCruncherResham)




