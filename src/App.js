import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ScrollToTopButton from './components/ScrollToTopButton';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Login} from "./pages/Login";


function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTopButton />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;