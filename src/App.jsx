import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./pages/Error"

// Layouts
import Main, { mainLoader } from "./layouts/Main"
import Dashboard, { dashBoardLoader } from "./pages/Dashboard"

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
        element: <p>dashboard</p>,
        // loader: dashBoardLoader,
        // errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
  // {
  //   path: "*", // trigger when path not exist
  //   element: <Error />,
  // },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
