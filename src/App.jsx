import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './features/todoSlice';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BlogPosts from './components/BlogPosts';
import CertificateButton from './components/CertificateButton';
import Info from './components/Info';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos); // todostore is from the store.js and the todos is fromthe todoSlice.js ,which is the state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <>
    <NavBar />
    <div id="home" className="min-h-screen bg-gradient-to-br from-purple-200 via-white to-blue-200 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div id ="todo" className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Todo List
          </h1>
          <p className="text-center text-gray-600 mb-8 font-medium">
            Track your tasks and stay productive
          </p>
          
          <form onSubmit={handleSubmit} className="mb-8 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-3 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 w-full"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-2xl cursor-pointer hover:opacity-90 active:scale-95 transition duration-200 mt-2 sm:mt-0"
            >
              Add Task
            </button>
          </form>

          <ul className="space-y-3">
            {todos.map(todo => (
              <li 
                key={todo.id} 
                className={`flex items-center p-4 rounded-2xl transition-all duration-200 border ${todo.completed ? 'bg-green-100 border-green-200' : 'bg-white border-gray-200'}`}
              >
                <div 
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className="flex items-center flex-1 cursor-pointer"
                >
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex justify-center items-center transition-colors ${todo.completed ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'}`}>
                    {todo.completed && (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`flex-1 text-lg font-medium ${todo.completed ? 'text-emerald-800 line-through' : 'text-gray-800'}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="ml-2 p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <div className='mt-6'>
      <Info /></div>
        </div>
        

    <div className="py-16 bg-gradient-to-br from-purple-200 via-white to-blue-20">
      
      <div id="blogs" className="mt-16">
        <BlogPosts />
      </div>
      
      <div id="certificates" className="mt-16">
        <CertificateButton />
      </div>

    </div>
        <footer className="mt-8 text-center">
          <p className="text-gray-600">
            Developed with ❤️ by{' '}
            <a 
              href="https://sudipsharma.info.np" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Sudip Sharma
            </a>
          </p>
        </footer>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
