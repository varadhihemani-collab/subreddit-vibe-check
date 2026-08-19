import { useState } from "react";
import "./App.css";
import { getHotPosts } from "./redditApi";

function App() {
  const [subreddit, setSubreddit] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeSubreddit = async () => {
    if (!subreddit.trim()) {
      setError("Please enter a subreddit name.");
      return;
    }

    setLoading(true);
    setError("");
    setPosts([]);

    try {
      const data = await getHotPosts(subreddit.trim());
      setPosts(data);
    } catch (err) {
      setError("Unable to fetch subreddit posts.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>The Subreddit Vibe Check</h1>

      <p className="subtitle">
        Analyze the hot posts of a subreddit
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter subreddit name"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />

        <button onClick={analyzeSubreddit}>
          Analyze
        </button>
      </div>

      {loading && <p>Loading posts...</p>}

      {error && <p>{error}</p>}

      {posts.length > 0 && (
        <div className="result">
          <h2>Top Hot Posts</h2>

          {posts.map((post, index) => (
            <div className="post" key={index}>
              <h3>
                {index + 1}. {post.title}
              </h3>

              <p>Score: {post.score}</p>
              <p>Author: {post.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;