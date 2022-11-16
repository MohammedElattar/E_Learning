import "./styles/bootstrap.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./styles/global.scss";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <h1>about from no component</h1>
          </>
        }
      />
    </Routes>
  );
}

export default App;
