# The Subreddit Vibe Check

> A modern web application for analyzing and exploring the trending content of a Reddit community.

## 📌 Overview

**The Subreddit Vibe Check** is a React-based web application that analyzes the hot posts of a subreddit and presents the most popular discussions in a clean and user-friendly interface.

The application allows users to enter a subreddit name and instantly view its top hot posts, including the post title, score, and author. It provides a simple way to get an overview of what is currently trending within a Reddit community.

## ✨ Features

* 🔍 Search and analyze any subreddit
* 📈 Display top hot and trending posts
* ⭐ Show post scores
* 👤 Display post authors
* ⚡ Fast and responsive user interface
* 🎨 Clean and minimal design
* ❌ User-friendly error handling
* 📱 Responsive layout for different screen sizes

## 🛠️ Technologies Used

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| React.js   | Building the user interface   |
| JavaScript | Application logic             |
| HTML       | Page structure                |
| CSS        | Styling and responsive design |
| Reddit API | Fetching subreddit posts      |
| Vite       | Development and build tool    |

## 📂 Project Structure

```text
The-Subreddit-Vibe-Check/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── redditApi.js
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ How It Works

1. The user enters a subreddit name.
2. The application sends a request to retrieve the subreddit data.
3. Hot posts are fetched from Reddit.
4. The application processes the received data.
5. The top posts are displayed with their title, score, and author.
6. If an error occurs, an appropriate error message is displayed.

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed on your system:

* Node.js
* npm
* Visual Studio Code

### Installation

Clone or download the project and open the project folder in Visual Studio Code.

Install the project dependencies:

```bash
npm install
```

### Run the Application

Start the development server:

```bash
npm run dev
```

After running the command, open the local development URL provided by Vite in your browser.

Usually, it will be:

```text
http://localhost:5173
```

## 🧪 Example

Enter a subreddit such as:

```text
technology
```

Click **Analyze** to view the top hot posts from the selected subreddit.

## 🎯 Project Objective

The main objective of this project is to develop a simple and interactive web application that allows users to explore trending Reddit content.

This project demonstrates practical knowledge of:

* React components
* React state management
* API integration
* Asynchronous JavaScript
* Error handling
* Front-end development
* Responsive UI design

## 🔮 Future Enhancements

* Add sentiment analysis for subreddit posts
* Display positive, negative, and neutral sentiment
* Add post engagement statistics
* Display comments and comment counts
* Add graphical data visualization
* Add subreddit comparison
* Improve API reliability and error handling
* Add loading animations

## 👩‍💻 Author

**Hemani Varadhi**

### Project

**The Subreddit Vibe Check**

A React-based web application developed to analyze and display trending subreddit posts.
