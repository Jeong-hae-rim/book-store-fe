import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BookStoreThemeProvider } from "@/context/themeContext";

import Error from "@/components/common/Error";
import LoginForm from "@/components/form/LoginForm";
import SignUpForm from "@/components/form/SignUpForm";
import ResetPasswordForm from "@/components/form/ResetPasswordForm";

import Home from "@/pages/Home";
import Login from "@/pages/user_page/Login";
import SignUp from "@/pages/user_page/Signup";
import ResetPassword from "@/pages/user_page/ResetPassword";
import Book from "@/pages/book_page/Book";
import BookIndex from "@/pages/book_page";
import BookDetail from "@/pages/book_page/BookDetail";
import Cart from "@/pages/cart_page/Cart";
import Order from "@/pages/order_page/Order";
import OrderList from "@/pages/order_page/OrderList";
import Layout from "./components/layout/Layout";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";

const routerList = [
  {
    path: "/",
    element: <Home />,
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
];

const router = createBrowserRouter(
  routerList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStoreThemeProvider>
        <RouterProvider router={router} />
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
