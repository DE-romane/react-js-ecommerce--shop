import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault(); // this stop refresh
    //do login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in,redirect to homepage ...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); //this stop refresh
    //do register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created user and logged in,redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="bg-white h-auto ">
      <Link to="/">
        <img
          className="w-20 h-10  mt-8 mb-4 mx-auto"
          src="/assets/logoshop.svg"
          alt=""
        />
      </Link>
      <div class="flex justify-center self-center   mb-32">
        <div class="p-12 bg-gray-50 border mx-auto rounded-2xl  ">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div>
            <button
              onClick={login}
              type="submit"
              class="mt-8 w-full flex justify-center bg-gray-400  hover:bg-gray-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            >
              Sign in
            </button>
          </div>
          <h1 className=" text-xll flex mt-4 justify-center"> or</h1>
          <div>
            <button
              onClick={register}
              type="submit"
              class="mt-8 w-full flex justify-center bg-gray-400  hover:bg-gray-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            >
              Create Your new Account
            </button>
          </div>
        </div>
        <div class="pt-5 text-center text-gray-400 text-xs"></div>
      </div>
    </div>
    // </div>
  );
}

export default Login;
//   <div className="login">
//    <Link to="/">
//      <img className="login__logo" src="/assets/logoshop.svg" alt="" />
//    </Link>
//    <div className="login__container">
//      <h1>Sign in</h1>
//      <form>
//        <h5>E-mail </h5>
//        <input
//          onChange={(event) => setEmail(event.target.value)}
//         value={email}
//         type="email"
//       />
//       <h5>Password</h5>
//       <input
//         onChange={(event) => setPassword(event.target.value)}
//         value={password}
//         type="password"
//       />
//     </form>
//     <button onClick={login} type="submit" className="login_signInButton">
//       Sign in
//     </button>
//     <p>
//       By signing-in you agree to amazon's conditions of use&Sale .please see
//       our Privacy Notice, Our Cookies Notice and our interest _Based Ads
//       Notice.
//     </p>
//     <button onClick={register} className="login_registerButton">
//       Create Your Amazon Account
//     </button>
//   </div>
//  </div>
