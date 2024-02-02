import logo from './logo.svg';
import './App.css';
import NavComp from './components/NavComp';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
      <div className="App w-[100vw] h-screen bg-gray-300">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<NavComp/>}/>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
