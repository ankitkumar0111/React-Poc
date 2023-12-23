
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import OtpPage from './components/Otp/OtpPage';


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
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
      
      },
      {
        path:'/home/otp',
        element: <OtpPage/>,
      }
    ]
  },
])

export default appRouter
