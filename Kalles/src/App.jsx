import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Shop } from "./Pages/Shop";
import { Women } from "./Pages/Women";
import { Men } from "./Pages/Men";
import { Blog } from "./Pages/Blog";
import { Accessories } from "./Pages/Accessories";
import { ProductDetails } from "./Pages/ProductDetails";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
