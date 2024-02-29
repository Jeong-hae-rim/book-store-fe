import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import SignUp from "./pages/Signup";
import SignUpForm from "./components/form/SignUpForm";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordForm from "./components/form/ResetPasswordForm";
import Login from "./pages/Login";
import LoginForm from "./components/form/LoginForm";
import BookDetail from "./pages/Book/BookDetail";
import BookIndex from "./pages/Book";
import Book from "./pages/Book/Book";

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
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
