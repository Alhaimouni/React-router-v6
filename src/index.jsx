import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Contact, { loader as contactLoder } from "./routes/contact";
import ErrorPage from "./error-page";
import EditContact, {
  loader as editLoder,
  action as editAction,
} from "./routes/edit";
import Destroy, { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index/>},
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoder,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: editLoder,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        element: <Destroy />,
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
