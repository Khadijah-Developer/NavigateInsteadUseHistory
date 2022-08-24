import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Survey from "./components/Survey";
export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start Your Survey!</h2>

      <BrowserRouter>
        <Link to="/h"> Survey </Link>
        <Routes>
          <Route path="/h" element={<Survey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
