import Login from "./User/Login";
import Register from "./User/Register";
import Home from "./Home/Home";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Home" element = {<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
