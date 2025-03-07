import { Link } from 'react-router'
import reactLogo from '../../assets/react.svg'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div>
        <img
          className="w-32 h-32 animate-spin-slow mb-6"
          src={reactLogo}
          alt="React Logo"
        />
      </div>
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Vite React Template</h1>
        <nav>
          <Link to="/counter" className="text-blue-500">
            Go to counter
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Home
