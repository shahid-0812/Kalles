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
import { Scroll } from "./Components/Scroll";
import { Products } from "./Pages/Products";
import { BlogDetails } from "./Pages/blogDetails";
import { CartProvider } from "./Components/CartContext";
import { CartPage } from "./Pages/Cart";
import { ComparePage } from "./Pages/ComparePage";
import { SaleHover } from "./Components/SaleHover";
import { NotFound } from "./Pages/NotFound";
import { AboutUs } from "./Pages/AboutUs";
import { ContactUs } from "./Pages/ContactUs";
import { TermsCondition } from "./Pages/TermsCondition";
import { ReturnExchange } from "./Pages/ReturnExchange";
import { ShippingDelivery } from "./Pages/ShippingDelivery";
import { FooterResponsive } from "./Components/FooterResponsive";
import { ResetPassword } from "./Pages/ResetPassword";



function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Scroll />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/comparePage" element={<ComparePage />} />
          <Route path="/aboutUS" element={<AboutUs />} />
          <Route path="/contactUS" element={<ContactUs />} />
          <Route path="/men" element={<Men />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/termsCondition" element={<TermsCondition />} />
          <Route path="/returnExchange" element={<ReturnExchange />} />
          <Route path="/shippingDelivery" element={<ShippingDelivery />} />
          <Route path="/saleHover" element={<SaleHover />} />
          <Route path="/saleHover" element={<ComparePage />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <ScrollToTop /> */}
        <div className="max-md:hidden inline">

          <Footer />
        </div>
        <div className="hidden max-md:inline">

          <FooterResponsive />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
