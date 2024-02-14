
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import OtpPage from './components/Otp/OtpPage';
import ReceiverDetails from './components/Receiver/ReceiverDetails';
import PersonalDetails from './components/Personal/PersonalDetails';
import { Provider } from "react-redux"
import appStore from './utils/appStore';
import Details from './components/Details/Details';
import Review from './components/Review/Review';
import TransferDetails from './components/Transfer Details/TransferDetails';



const AppLayout = () => {
  return (
    
    <Provider store={appStore}>
    <div style={{width: "100"}}>
    <Navbar/>
    <Outlet/>
   
    </div>
    </Provider>
  
   
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
      {
        path:'/home/review',
        element: <Review/>
      },
      {
        path:'/home/transferdetails',
        element: <TransferDetails/>
      }
    ]
  },
])

export default appRouter
