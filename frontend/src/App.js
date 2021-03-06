import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import NewsletterForm from "./pages/NewsletterForm"
import CalendarEntryForm from "./pages/CalendarEntryForm";
import AboutUsForm from "./pages/AboutUsForm";
import Inquiries from "./pages/Inquiries";
import {RouteProvider} from "./context/route/RouteContext";
import DisplayTickets from "./pages/DisplayTickets";
import Tickets from "./pages/Tickets";
import {UserProvider} from "./context/user/UserContext";
import Login from "./pages/Login";
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import {NotificationsProvider} from "@mantine/notifications";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";


function App() {
    return (
        <NotificationsProvider>
        <RouteProvider>
            <UserProvider>

                <PayPalScriptProvider options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "EUR"
                }}>
                <Router>
                <Navbar>

                  <Routes>
                      <Route path='/' element={
                              <>
                                  <Home/>
                              </>
                      }/>
                      <Route path='/employee' element={<Employee/>} />
                      <Route path='/articleform' element={<NewsletterForm/>} />
                      <Route path='/calendarform' element={<CalendarEntryForm/>} />
                      <Route path='/aboutusform' element={<AboutUsForm/>}/>
                      <Route path='/inquiries' element={<Inquiries/>}/>
                      <Route path='/ticket' element={<DisplayTickets/>}/>
                      <Route path='/tickets' element={<Tickets/>}/>
                      <Route path='/login' element={<Login/>}/>
                      <Route path='/checkout' element={<Checkout/>}/>
                      <Route path='/error' element={<Error/>}/>
                      <Route path='/impressum' element={<Impressum/>}/>
                      <Route path='/datenschutz' element={<Datenschutz/>}/>
                  </Routes>

                </Navbar>
                    <Footer></Footer>
                </Router>


                </PayPalScriptProvider>
            </UserProvider>
        </RouteProvider>
        </NotificationsProvider>

  )
}

export default App



