// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <Router>
            {/* Toolbar отображается на всех экранах */}
            <Toolbar />

            {/* Основной контент */}
            <div className="pt-16"> {/* Отступ сверху, чтобы контент не перекрывался Toolbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;