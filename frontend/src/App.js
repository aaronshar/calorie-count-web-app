import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import products from './data/products.js';

import Nav from './components/Nav';
import HomePage from './pages/HomePage.js'
import GalleryPage from './pages/GalleryPage.js'
import StaffPage from './pages/StaffPage.js'
import OrderPage from './pages/OrderPage.js'
import LogPage from './pages/LogPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import TopicsPage from './pages/TopicsPage';

function App() {
  const [foodItem, setFoodItem] = useState([])
  
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Aaron Shar</h1>
          <Nav />
        </header>
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/order" element={<OrderPage products={products}/>} />
              <Route path="/log" element={<LogPage setFoodItem={setFoodItem}/>} />
              <Route path="/createfood" element={<CreatePage />} />
              <Route path="/editfood" element={<EditPage foodItem={foodItem} />} />
              <Route path="/topics" element={<TopicsPage />} />
            </Routes>
          </section>
        </main>
        <footer><p>&copy; 2023 Aaron Shar</p></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
