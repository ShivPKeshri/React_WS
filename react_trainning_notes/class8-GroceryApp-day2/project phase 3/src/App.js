import AboutPage from "./pages/AbouPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products/:catId/:catName" element={ <ProductsPage /> } />
        <Route path="/products/detail/:id" element={ <ProductDetailPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
   </Router>
  );
}

export default App;
