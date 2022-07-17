import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Tech from "./pages/tech";
import Explore from "./pages/explore";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/destination" element={<Destination />} />
     <Route path="/crew" element={<Crew />} />
     <Route path="/technology" element={<Tech />} />
     <Route path="/explore" element={<Explore />} />
   </Routes>
</BrowserRouter>
  );
}

export default App;
