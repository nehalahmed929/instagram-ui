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
import userService from "./services/UsersService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Messages from "./components/screens/Messages";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
      </div>

      {userService.isLoggedIn() ? <Navbar /> : <></>}

      <Switch>
        <Route path="/not-found" component={NotFound} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />
        <Route path="/messages" component={Messages} />
        <Route path="/" component={Home} />

        <Redirect to="not-found" />
      </Switch>
    </Router>
  );
}

export default App;
