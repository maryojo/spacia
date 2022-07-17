import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import Destination from "./destination";
import Crew from "./crew";
import Tech from "./tech";
import Explore from "./explore";

const Pages = () => {
    return(
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
};


export default Pages;