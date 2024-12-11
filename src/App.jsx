import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategorysPage from "./Pages/CategorysPage"
import DashBoard from "./Components/DashBoard"
import AboutPage from "./Pages/AboutPage"
import CartPage from "./Pages/CartPage"
import LoginPage from "./Pages/LoginPage"
import ErrorPage from "./Pages/ErrorPage"
import Footer from "./Components/Footer"
import PoliticaPrivacidad from "./Pages/PoliticaPrivacidad"
import { CategorysProvider } from "./contexts/CategorysContext"
import ProductsCategory from "./Pages/ProductsCategory"
import ProductReview from "./Pages/ProductReview"
import ProtectedRoutes from "./Components/ProtectedRoutes"
import { AuthProvider } from "./contexts/AuthContext"
import PaymentPage from "./Pages/PaymentPage"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CategorysProvider>
          <AuthProvider>
            <DashBoard />
            <Routes>
              <Route path="/" element={<CategorysPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products/:category" element={<ProductsCategory />}>
                <Route path=":id" element={<ProductReview />} />
              </Route>
              <Route path="/privacity" element={<PoliticaPrivacidad />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/payment" element={<PaymentPage />} />
                </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AuthProvider>
        </CategorysProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App