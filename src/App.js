import { useEffect, React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Register from "./component/Register";
import Useraccount from "./component/Useraccount";
import Homepage from "./component/Homepage";
import Tourpage from "./component/Tourpage";

import Tourdetailpage from "./component/Tourdetailpage";
import Passwordsetting from "./component/Passwordsetting";

import ProtectedRouted from "./component/ProtectedRouted";
import Nopage from "./component/Nopage";
import AdminPage from "./component/AdminPage";
axios.defaults.withCredentials = true;

// https://apifortour.onrender.com/
function App() {
  return (
    <div className="App  appstyle">
      <Router forceRefresh={true}>
        <Homepage />
        <div className="container">
          <Routes>
            <Route
              path="/dashboard"
              exact
              element={<ProtectedRouted Component={Dashboard} />}
              //  element={<Dashboard />}
            />
            <Route
              path="/updatePassword"
              exact
              element={<ProtectedRouted Component={Passwordsetting} />}
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
              element={<ProtectedRouted Component={AdminPage} />}
            />
            <Route path="/" exact element={<Tourpage />} />
            <Route
              path="/useraccount"
              exact
              element={<ProtectedRouted Component={Useraccount} />}
              // element={<Useraccount />}
            />
            <Route
              path="/register"
              exact
              element={<Register />}
              //  element={<Register />}
            />
            <Route
              path="/tourdetail"
              exact
              element={<ProtectedRouted Component={Tourdetailpage} />}
              // element={<Tourdetailpage />}
            />
            <Route path="/*" element={<Nopage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
