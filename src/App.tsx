import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <div
              style={{ marginTop: "100px", textAlign: "center", color: "red" }}
            >
              {" "}
              404 Not Found
            </div>
          }
        />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
