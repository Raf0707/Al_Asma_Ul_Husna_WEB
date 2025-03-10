import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <Router basename="/Al_Asma_Ul_Husna_WEB"> {/* Добавил basename */}
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
