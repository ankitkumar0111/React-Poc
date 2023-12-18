
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


const AppLayout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: <AppLayout/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      }
    ]
  },
])

export default appRouter
