import "./App.css";
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Pages/Home"
import About from "./component/Pages/About"
import Login from "./component/Pages/Login"
import Contact from "./component/Pages/Contact"
import Register from "./component/Pages/Register"
import Error from "./component/Pages/Error"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
       
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Error} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
