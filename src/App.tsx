import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CartPage from "./pages/CartPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Routes>
          <Route
            path="/"
            element={
              <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="*"
            element={
              <div
                style={{
                  marginTop: "100px",
                  textAlign: "center",
                  color: "red",
                }}
              >
                {" "}
                404 Not Found
              </div>
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
