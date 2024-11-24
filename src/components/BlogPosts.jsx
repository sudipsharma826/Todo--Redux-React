import React, { useState, useEffect } from "react";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const feedUrl = "https://www.sudipsharma.com.np/feeds/posts/default?alt=rss";
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "ok") {
          const latestPosts = data.items.slice(0, 6).map((item) => ({
            id: item.guid,
            title: item.title,
            link: item.link,
            thumbnail: item.thumbnail || "https://via.placeholder.com/150",
            summary: item.content.split(" ").slice(0, 20).join(" ") + "...",
            publishedDate: new Date(item.pubDate).toLocaleDateString(),
            labels: item.categories.join(", "),
          }));
          setPosts(latestPosts);
        } else {
          throw new Error("Unable to load blog posts.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: {error}
      </div>
    );
  }

  return (
      <div className="container mx-auto px-4 py-4 bg-gradient-to-br from-purple-200 via-white to-blue-20">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.thumbnail}
                  alt="Post Thumbnail"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  Published on: <span>{post.publishedDate}</span>
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Labels: <span>{post.labels}</span>
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors"
                >
                  {post.title}
                </a>
                <p className="text-gray-700 line-clamp-3 my-4">{post.summary}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default BlogPosts;
