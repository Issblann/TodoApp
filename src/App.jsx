import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import Home from "./pages/Home";
import PokeApiPge from "./pages/PokeApiPage";
import Navbar from "./components/Navbar/Navbar";
import PageContextProvider from "./context/Context";
function App() {
  const routes = [
    { name: "Home", link: "/" },
    { name: "Todo", link: "/TodoPage" },
    { name: "PokeApi", link: "/PokeAPI" },
  ];
  return (
    <>
      <Router>
        <Navbar routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoPage" element={<TodoPage />} />
          <Route path="/PokeAPI" element={<PokeApiPge />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
