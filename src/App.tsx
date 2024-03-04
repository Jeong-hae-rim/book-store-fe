import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import SignUp from "./pages/user_page/Signup";
import SignUpForm from "./components/form/SignUpForm";
import ResetPassword from "./pages/user_page/ResetPassword";
import ResetPasswordForm from "./components/form/ResetPasswordForm";
import Login from "./pages/user_page/Login";
import LoginForm from "./components/form/LoginForm";
import BookDetail from "./pages/book_page/BookDetail";
import BookIndex from "./pages/book_page";
import Book from "./pages/book_page/Book";
import Cart from "./pages/cart_page/Cart";
import Order from "./pages/order_page/Order";
import OrderList from "./pages/order_page/OrderList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <BookIndex />,
    children: [
      {
        index: true,
        element: <Book />,
      },
      {
        path: ":bookId",
        element: <BookDetail />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    children: [
      {
        index: true,
        element: <SignUpForm />,
      },
    ],
  },
  {
    path: "/reset",
    element: <ResetPassword />,
    children: [
      {
        index: true,
        element: <ResetPasswordForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orderlist",
    element: <OrderList />,
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
