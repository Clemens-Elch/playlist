# 🎵 Playlist

A clean and modular React application that displays a static list of songs and allows users to build a playlist by 
adding and removing songs. Built with Vite for fast development and hot reloading.

## ✨ Features
- Display a static list of songs loaded from `songsData.js`
- Add songs to a playlist using **Add to Playlist** buttons
- Remove songs from the playlist using **Remove** buttons
- The same song can appear multiple times in the playlist
- Highlight songs with a rating of **5** using a different background color
- Playlist header shows the song count in parentheses
- Display total playlist duration formatted as **MM:SS** (two digits for minutes and seconds)
- Display average rating with **2 decimal places**
- Render song ratings using a reusable **Rating** component with star symbols

## 🛠️ Tech Stack
- React
- Vite

## 🚀 Getting Started

### 1. Install Dependencies

```bash
git clone https://github.com/Clemens-Elch/playlist.git
cd expense-manager
```
npm install

Note: `node_modules` are not committed. Make sure to run `npm install` before starting the app.

### 2. Install Dependencies

```bash
npm install
```

> ⚠️ `node_modules` are not committed — make sure to run `npm install` before running the app.

### 3. Start the Development Server

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── App.jsx
├── components/
│ ├── SongList.jsx
│ ├── Playlist.jsx
│ └── Rating.jsx
├── data/
│ └── songsData.js
├── App.css
├── index.css
└── main.jsx

```
---

## 🧩 Component Breakdown
- **App.jsx** – Root component that manages the playlist state and provides add/remove callbacks
- **SongList.jsx** – Displays the static list of songs with add buttons, rating highlights, and star ratings
- **Playlist.jsx** – Renders playlist entries, remove buttons, total duration, and average rating
- **Rating.jsx** – Reusable component that renders song ratings as star symbols inside a span

---


