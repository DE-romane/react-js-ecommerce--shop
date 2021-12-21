import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { auth } from "./firebase";
import Checkout from "./Checkout";
//data
// const solutions = [
//   {
//     name: "Insights",
//     description: "Measure actions your users take",
//     href: "##",
//     icon: IconOne,
//   },
//   {
//     name: "Automations",
//     description: "Create your own targeted content",
//     href: "##",
//     icon: IconTwo,
//   },
//   {
//     name: "Reports",
//     description: "Keep track of your growth",
//     href: "##",
//     icon: IconThree,
//   },
// ];

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <div className="w-full  flex flex-row items-center p-2 justify-between bg-white shadow-xs">
        <Link to="/">
          <img className="h-8 w-16 " src="assets/logoshop.svg" alt="Workflow" />
        </Link>
        <span className=" hidden sm:flex md:w-1/3 h-7 cursor-pointer border border-gray-500 text-sm rounded-full  ">
          <input
            type="search"
            name="search"
            placeholder="Search "
            className="flex-grow px-4  text-gray-500 rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
        </span>
        <div className=" flex items-center mr-3  md:flex">
          <div className=" block relative">
            <Link
              onClick={login}
              to={!user && "/login"}
              className="p-1 rounded-full text-gray-500 focus:outline-none hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span
                className={`${
                  user
                    ? "absolute w-3 border-2  bottom-5 transform translate-x-1/2 border-white h-3 bg-green-500 rounded-full"
                    : ""
                }`}
              ></span>
            </Link>
          </div>
          <Checkout />
          {/*
            <button
              type="button"
              className="text-md  text-4xl relative
        p-1 rounded-full text-purple-500 focus:outline-none hover:text-purple-800 "
            >
              <span className="w-3 h-3 rounded-full absolute right-2 leading text-s bg-purple-200 text-white">
                {basket.length}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </Link>
          */}
        </div>
      </div>
    </div>
  );
}

export default Header;
{
  /*
function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
*/
}
