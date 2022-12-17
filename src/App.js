import { useEffect } from "react";
import "./style.scss";
// import logo from "./logo.svg";
// import "./App.css";
import axios from "axios";

const getTour = async () => {
  try {
    const res = await axios.get("https://apifortour.onrender.com");
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

// useEffect(()=>{
//   getTour();
// })

function App() {
  return (
    <div className="App  appstyle">
      <div className="form-background">
        <form action="#" className="formmain">
          <div className="formmain--email">
            <input type="email" placeholder="Enter your email" />
            {getTour()}
          </div>
          <div className="formmain--password">
            <input type="password" placeholder="Enter your password" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
