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
import ScrollToTop from "./Components/ScrollToTop";
import { QuickView } from "./Components/QuickView";
import { Products } from "./Pages/Products";
import { BlogDetails } from "./Pages/blogDetails";



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
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
