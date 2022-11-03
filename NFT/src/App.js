import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NFTDetail from "./pages/NFTDetail/NFTDetail";

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft/:id" element={<NFTDetail />}/>
        </Routes>
      </Router>
    
  );
}

export default App;
