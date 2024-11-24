import React, { useState, useEffect } from "react";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(6);
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
          const processedPosts = data.items.slice(0, 6).map((item) => ({
            id: item.guid,
            title: item.title,
            link: item.link,
            thumbnail: item.thumbnail || "https://via.placeholder.com/400x250",
            summary: item.content.split(" ").slice(0, 20).join(" ") + "...",
            publishedDate: new Date(item.pubDate).toLocaleDateString(),
          }));
          setPosts(processedPosts);
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

  const handleLoadMore = () => {
    setDisplayedPosts(prevCount => Math.min(prevCount + 3, posts.length));
  };

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
    <div className="container gap-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 max-w-7xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12 uppercase tracking-wider">
        Latest Blog Posts
        <div className="h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, displayedPosts).map((post) => (
          <div 
            key={post.id} 
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-all hover:scale-105 w-full flex flex-col"
          >
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="block aspect-video">
              <img 
                className="rounded-t-lg w-full h-full object-cover" 
                src={post.thumbnail} 
                alt={post.title} 
              />
            </a>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex-1">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-3 text-base font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600">
                    {post.title}
                  </h5>
                </a>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-gray-500">
                  {post.publishedDate}
                </span>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  Read more
                  <svg 
                    className="rtl:rotate-180 w-3 h-3 ms-1" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 14 10"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayedPosts < posts.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-5 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Load More
          </button>
        </div>
      )}

      <div className="text-center mt-6">
        <a 
          href="https://www.sudipsharma.com.np/search?=/recent" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          View All Recent Posts →
        </a>
      </div>
    </div>
  );
};

export default BlogPosts;
