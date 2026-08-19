function analyzeSentiment(title) {
  const text = title.toLowerCase();

  const positiveWords = [
    "good", "great", "awesome", "top", "best",
    "trending", "success", "love", "cool",
    "beautiful", "win", "exciting"
  ];

  const negativeWords = [
    "bad", "worst", "error", "issue", "fail",
    "bug", "wrong", "hate", "scam",
    "problem", "risk", "warning"
  ];

  let score = 0;

  positiveWords.forEach((word) => {
    if (text.includes(word)) score++;
  });

  negativeWords.forEach((word) => {
    if (text.includes(word)) score--;
  });

  if (score > 0) return "🟢 Positive";
  if (score < 0) return "🔴 Negative";
  return "🟡 Neutral";
}

function createSamplePosts(subreddit) {
  return [
    {
      title: `Top trending discussion in ${subreddit}`,
      score: 1250,
      author: "user123"
    },
    {
      title: `Best news and updates from ${subreddit}`,
      score: 980,
      author: "user456"
    },
    {
      title: `What do you think about this?`,
      score: 745,
      author: "user789"
    },
    {
      title: `Great new update and exciting features`,
      score: 620,
      author: "user321"
    },
    {
      title: `Latest discussion from the community`,
      score: 510,
      author: "user654"
    }
  ].map((post) => ({
    ...post,
    sentiment: analyzeSentiment(post.title)
  }));
}

export async function getHotPosts(subreddit) {
  const sub =
    subreddit?.trim().replace(/^r\//, "") || "technology";

  try {
    const response = await fetch(
      `/reddit-api/r/${encodeURIComponent(sub)}/hot.json?limit=10`
    );

    if (!response.ok) {
      throw new Error("Reddit API blocked");
    }

    const data = await response.json();

    if (!data?.data?.children) {
      throw new Error("Invalid Reddit response");
    }

    return data.data.children.map((post) => ({
      title: post.data.title,
      score: post.data.score,
      author: post.data.author || "Unknown",
      sentiment: analyzeSentiment(post.data.title)
    }));
  } catch (error) {
    console.warn("Reddit unavailable. Using sample data.");
    return createSamplePosts(sub);
  }
}