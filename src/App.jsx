import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import "./css/responsive.css";

import Home from "./components/Home";
import AssetInfo from "./components/AssetInfo";
// import qa_data from './data/qa';
import ContentData from "./data/content";
import a1 from "./assets/a1.jpg";
import a2 from "./assets/q1.jpg";
import a3 from "./assets/s6.jpg";
import a4 from "./assets/q3.jpg";
import a5 from "./assets/q4.jpg";
import BlogData from "./data/blog";
import Blog from "./components/blog";

import m1 from './assets/a1.jpg'
import m2 from './assets/m7.jpg'
import m3 from './assets/m4.jpg'
import m4 from './assets/m8.jpg'
import Firm from "./components/firm";
import Career from "./components/career";

let images1 = [m2,m1,m3 , m4]


let images = [a1, a4, a3, a2, a5];

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home Link={Link} />} />
          <Route
            path="/the-firm"
            element={<Firm Link={Link} />}
          />
          <Route
            path="/career"
            element={<Career Link={Link} />}
          />

          {ContentData.map((data, i) => (
           
            <Route key={i} path={'/'+ data.title.split(' ')[0].toLowerCase()+ '/' + data.title.split(' ')[1].toLowerCase() } element={<AssetInfo data={data} image={images[i]} />} />
           
          ))}
          {
            BlogData.map((data, i) => (
           
              <Route key={i} path={'/blogs/article/'+ data.title.split(' ')[0].toLowerCase()+ '/' + data.title.split(' ')[1].toLowerCase() } element={<Blog data={data} image={images1[i]} />} />
             
            ))
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
