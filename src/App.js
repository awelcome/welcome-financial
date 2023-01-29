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
import TermsAndConditions from "./pages/termsAndConditions/termsAndConditions";
import ErrorPage from "./pages/errorPage/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
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
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
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
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Header />
        <Footer />
      </BrowserRouter> */}
    </>
  );
}

export default App;
