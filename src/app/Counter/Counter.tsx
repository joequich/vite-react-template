import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="card bg-white p-6 rounded-lg shadow-md mb-6">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default Counter
