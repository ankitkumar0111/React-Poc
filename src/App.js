
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import OtpPage from './components/Otp/OtpPage';
import ReceiverDetails from './components/Receiver/ReceiverDetails';
import PersonalDetails from './components/Personal/PersonalDetails';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'



const AppLayout = () => {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div>
    <Navbar/>
    <Outlet/>
    </div>
    // </LocalizationProvider>
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
      },
      {
        path:'/home/receiver-add',
        element: <ReceiverDetails/>
      },
      {
        path:'/home/sender-info',
        element: <PersonalDetails/>
      }
    ]
  },
])

export default appRouter
