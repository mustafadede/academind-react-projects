import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage, {loader as EventsLoader} from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventRootLayout from "./pages/EventRootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {path: "/",
   element: <Root />,
   errorElement: <ErrorPage />,
   children: [
    {index: true, element: <HomePage />},
    {path: "events", element: <EventRootLayout />, children: [
      {index: true, element: <EventsPage />, loader: EventsLoader},
      {path: ":id", element: <EventDetailPage />},
      {path: "new", element: <NewEventPage />},
      {path: ":id/edit", element: <EditEventPage />},
    ]},
   ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
