import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>iam App</h1>
      <BrowserRouter>
        <Routes>
             <Route path="/reg" element={<Reg/>}/>
             <Route path="/h" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
        </>
  )
    
}

export default App
