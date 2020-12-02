import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/screens/auth/login";
import Register from "./components/screens/auth/Register";
import Home from "./components/screens/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/smallComponents/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/not-found" component={NotFound} />

        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Register} />

        <Redirect to="not-found" />
      </Switch>
    </Router>
  );
}

export default App;
