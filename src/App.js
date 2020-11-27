import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div>
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/not-found" component={NotFound} />

            <Route path="/login" component={Login} />
            <Route path="/" component={Register} />

            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
