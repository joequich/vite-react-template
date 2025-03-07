import { Route, BrowserRouter as Router, Routes } from 'react-router'
import { AppModules } from './app-modules'
import Counter from './app/Counter/Counter'
import Home from './app/Home/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppModules.Home} element={<Home />} />
        <Route path={AppModules.Counter} element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
