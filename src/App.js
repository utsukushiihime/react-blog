import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/articles-list" component={ArticlesListPage} />
                    <Route path="/article/:name" component={ArticlePage} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
