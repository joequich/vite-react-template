import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div>
        <img className="w-32 h-32 animate-spin-slow mb-6" src={reactLogo} alt="React Logo" />
      </div>
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Vite React Template</h1>
        <div className="card bg-white p-6 rounded-lg shadow-md mb-6">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-gray-700 mt-4">
            Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
