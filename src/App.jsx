// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// My components
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/contact";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy";
import Services from "./pages/services/services";
import ClientAgreement from "./pages/clientAgreement/clientAgreement";
import ErrorPage from "./pages/errorPage/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "client-agreement",
        element: <ClientAgreement />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
