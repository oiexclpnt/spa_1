import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from './components/header'
import { Footer } from "./components/footer";
import { Preloader } from "./components/preloader";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Category } from "./pages/category";
import { Recipe } from "./pages/recipe";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>Ooops!</h1>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <h5>Does not exist: {location.pathname} </h5>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="*" element={<NoMatch />} />
            <Route path="/" element={<Home />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="about/" element={<About />} />
            <Route path="category/:name" element={<Category />} />
            <Route path="meal/:id" element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
