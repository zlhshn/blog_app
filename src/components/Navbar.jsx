import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/image/logo1.png";
import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "../assets/icons/avatar.png";
import { useSelector } from "react-redux";
import useAuthCalls from "../service/useAuthCalls";
import { toastWarn } from "../helper/ToastNotify";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { user } = useSelector((state) => state.auth);
  const {logout}=useAuthCalls()
const navigate=useNavigate()

  const navigation = [
    { name: "Home",  onclick: () => {navigate("/")} },
    { 
      name: "NewBlog", 
     
      current: false ,
      onclick: () => {
        if (!user) {
          toastWarn("You must login");
        }else {
          navigate("/newblog")
        }
      }
    },
    { name: "About",onclick: () => {navigate("/about")} },
  ];
  
  const profileMenu = [
    { name: `${user.username}'s Blog`, to: "/myblog"},
    { name: "Logout", current: false ,onclick:logout},
  ];


  return (
    <Disclosure as="nav" className=" bg-main dark:bg-gray-900 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => item.onclick() || ""}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex   items-center ">
                  {" "}
                  <NavLink to="/" className="text-white font-dancing hidden sm:block">
                    DeerBlog
                  </NavLink>
                  <img className="w-[100px]" src={logo} alt="Your Company" />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <Switch /> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.image || Avatar}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className=" absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5  focus:outline-none">
                        {user.username ? (
                          profileMenu.map((item) => (
                            <Menu.Item  key={item.name}>
                              {({ active }) => (
                                <NavLink
                                 
                                  to={item.to || ""}
                                  onClick={() => item.onclick() }
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </NavLink>
                              )}
                            </Menu.Item>
                          ))
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2 text-sm text-gray-700"
                                )}
                              >
                                Log In
                              </NavLink>
                            )}
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
