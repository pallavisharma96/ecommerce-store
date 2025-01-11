import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Base from "./pages/Base";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AuthPage from "./pages/AuthPage/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      { path: "products/:productId", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "search/:query", element: <ProductsPage search={true} /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path : "/auth",
    element: <AuthPage/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
