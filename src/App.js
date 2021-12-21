import react from "react";
import { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login.jsx";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect
  //piece of code which runs based on given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in ...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any clean up operation go in here
      unsubscribe();
    };
  }, []);
  // console.log("user is>>>>>>", user);

  return (
    <Router>
      <div className="bg-gray-50">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/ProductPage">
            <ProductPage />
          </Route> */}
          {/*this is default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/* we need react router to do this 👇
local host
local host/login
local host/checkout */

export default App;
