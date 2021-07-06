import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <main>
                <Route exact path='/' component={HomePage} />
            </main>
        </Router>
    );
}

export default App;
