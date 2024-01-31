
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import OtpPage from './components/Otp/OtpPage';
import ReceiverDetails from './components/Receiver/ReceiverDetails';
import PersonalDetails from './components/Personal/PersonalDetails';
import { Provider } from "react-redux"
import appStore from './utils/appStore';
import Details from './components/Details/Details';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'



const AppLayout = () => {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={appStore}>
    <div style={{width: "100"}}>
    <Navbar/>
    <Outlet/>
   
    </div>
    </Provider>
  
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
        path: 'home/moneydetails',
        element: <Details/>
      },
      {
        path:'/home/addreceiver',
        element: <ReceiverDetails/>
      },
      {
        path:'/home/addpersonal',
        element: <PersonalDetails/>
      },
      
    ]
  },
])

export default appRouter
