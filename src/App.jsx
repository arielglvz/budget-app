import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./pages/Error"

// Layouts
import Main, { mainLoader } from "./layouts/Main"
import Dashboard, { dashBoardLoader } from "./pages/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <h1>Yoq</h1>,
        // loader: dashBoardLoader,
        // errorElement: <Error />,
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
