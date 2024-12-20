import AboutPage from "./pages/AbouPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products/:catId/:catName"
          element={<ProtectedRoute Component={ProductsPage} />}
        />
        <Route
          path="/products/detail/:id"
          element={<ProtectedRoute Component={ProductDetailPage} />}
        />
        <Route
          path="/about"
          element={<ProtectedRoute Component={AboutPage} />}
        />
        <Route
          path="/contact"
          element={<ProtectedRoute Component={ContactPage} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
