import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ValidateRoute from "./routes/ValidateRoute";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products/:catId/:catName"
          element={<ValidateRoute RenderComponent={ProductsPage} />}
        />
        <Route
          path="/products/detail/:id"
          element={<ValidateRoute RenderComponent={ProductDetailsPage} />}
        />
        <Route
          path="/about"
          element={<ValidateRoute RenderComponent={AboutPage} />}
        />
        <Route
          path="/contact"
          element={<ValidateRoute RenderComponent={ContactPage} />}
        />
        <Route
          path="/cart"
          element={<ValidateRoute RenderComponent={CartPage} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
