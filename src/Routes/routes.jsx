import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import AddChocolate from "../components/AddChocolate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {  
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:4000/chocolates')
        },
        {
          path: '/addChocolate',
          element: <AddChocolate></AddChocolate>
        }
    ]
  },
]);

export default(router)