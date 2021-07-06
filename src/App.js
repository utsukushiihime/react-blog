import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/articles-list" component={ArticlesList} />
                <Route path="/article/:name" component={ArticlePage} />
            </main>
        </Router>
    );
}

export default App;
