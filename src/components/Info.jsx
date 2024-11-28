import React from 'react';

const Info = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20">
        <p className="text-center text-gray-700">
          <span className="font-semibold">Disclaimer:</span>{' '}
          <em>This Todo App is crafted using</em>{' '}
          <span className="font-medium text-blue-600">React-Redux Toolkit and redux Persist</span>{' '}
          <em>as a practical learning approach to understand state management in React applications. It serves as a hands-on example of implementing</em>{' '}
          <span className="font-medium text-blue-600">Redux Toolkit</span>{' '}
          <em>in a real-world scenario.</em>
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/sudipsharma826/Todo--Redux-React"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Source Code
          </a>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-sm text-gray-500 font-medium">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Developed & Designed
              </span>
              <span className="mx-2">by</span>
            </div>
            <a 
              href="https://sudipsharma.info.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              <span className="font-semibold text-red-400">
                Sudip Sharma
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
