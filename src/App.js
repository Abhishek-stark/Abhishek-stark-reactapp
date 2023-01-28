import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Dashboard from './component/Dashboard';
import Login from "./component/Login";
import axios from "axios";
import ProtectedRouted from "./component/ProtectedRouted";
const Nopage = lazy(() => import("./component/Nopage"));
const AdminPage = lazy(() => import("./component/AdminPage"));
axios.defaults.withCredentials = true;
const Passwordsetting = lazy(() => import("./component/Passwordsetting"));
const Useraccount = lazy(() => import("./component/Useraccount"));
const Homepage = lazy(() => import("./component/Homepage"));
const Tourpage = lazy(() => import("./component/Tourpage"));
const Register = lazy(() => import("./component/Register"));
const Tourdetailpage = lazy(() => import("./component/Tourdetailpage"));
const Dashboard = lazy(() => import("./component/Dashboard"));

function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Homepage />
        <div className="container">
          <Routes>
            <Route
              path="/dashboard"
              exact
              element={
                <Suspense fallback="Loading... Dashboard">
                  <ProtectedRouted Component={Dashboard} />
                </Suspense>
              }
              //  element={<Dashboard />}
            />
            <Route
              path="/updatePassword"
              exact
              element={
                <Suspense fallback="Loading... ">
                  <ProtectedRouted Component={Passwordsetting} />
                </Suspense>
              }
              // element={<Passwordsetting />}
            />{" "}
            <Route
              path="/login"
              exact
              element={<ProtectedRouted Component={Login} />}
            />
            <Route
              path="/admin"
              exact
              element={
                <Suspense fallback="Loading... AdminPage">
                  <ProtectedRouted Component={AdminPage} />
                </Suspense>
              }
            />
            <Route path="/" exact element={<Tourpage />} />{" "}
            <Route
              path="/useraccount"
              exact
              element={
                <Suspense fallback="Loading... UserAccount">
                  <ProtectedRouted Component={Useraccount} />
                </Suspense>
              }
              // element={<Useraccount />}
            />
            <Route
              path="/register"
              exact
              element={
                <Suspense fallback="Loading...">
                  <Register />
                </Suspense>
              }
              //  element={<Register />}
            />{" "}
            <Route
              path="/tourdetail"
              exact
              element={
                <Suspense fallback="Loading... Tourdetails.">
                  <ProtectedRouted Component={Tourdetailpage} />
                </Suspense>
              }
              // element={<Tourdetailpage />}
            />
            <Route
              path="/*"
              element={
                <Suspense fallback="Nopage..">
                  <Nopage />
                </Suspense>
              }
            />{" "}
          </Routes>{" "}
        </div>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
