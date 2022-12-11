import "./App.css";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Navs from "./Components/Navs";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <Landing />
      <Navs />
      <Posts />
    </div>
  );
}

export default App;
