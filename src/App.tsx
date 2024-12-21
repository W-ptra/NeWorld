import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryList from './pages/CountryList';
import CountryDetail from './pages/CountryDetail';
import About from './pages/About';
import Error404 from './pages/Error404';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/countries" element={<CountryList />} />
                    <Route path="/countries/:name" element={<CountryDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;