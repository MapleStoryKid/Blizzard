
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Routes/Home";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;