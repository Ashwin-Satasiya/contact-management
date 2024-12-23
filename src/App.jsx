import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import AllContacts from "./pages/AllContacts";
import UpdateContact from "./pages/UpdateContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-contact",
        element: <AddContact />,
      },
      {
        path: "contacts",
        element: <AllContacts />,
      },
      {
        path: "edit-contact/:id",
        element: <UpdateContact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
