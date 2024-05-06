import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./pages/Error"

// components
import Intro from "./components/Intro"

// library imports
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Layouts
import Main, { mainLoader } from "./layouts/Main"
import Dashboard, { dashBoardLoader, dashboardAction } from "./pages/Dashboard"

// Actions
import { logoutAction } from "./action/logout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashBoardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: "*", // trigger when path not exist
    element: <Error />,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  )
}

export default App
