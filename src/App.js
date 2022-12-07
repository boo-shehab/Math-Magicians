import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
