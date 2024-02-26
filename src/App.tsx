import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import SignUp from "./pages/Signup";
import SignUpForm from "./components/form/SignUpForm";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordForm from "./components/form/ResetPasswordForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <div>도서 목록</div>
      </Layout>
    ),
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
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
