import "./App.css";
import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/result/:id">
            {(props) => <RecipeDetails {...props} />}
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
