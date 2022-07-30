import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutAction } from "../../pages/Logout/Logout";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div
        className="w-60 h-full shadow-md bg-white absolute hidden md:block"
        id="sidenavSecExample"
      >
        <div className="pt-4 pb-2 px-6">
          <a href="#!">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  src="https://cybersoft.edu.vn/wp-content/uploads/2017/04/MAX-OP1.png"
                  className="rounded-full w-10"
                  alt="cybersoft-img"
                />
              </div>
              <div className="grow ml-3">
                <p className="text-sm font-semibold text-blue-600">
                  QUẢN LÝ RẠP PHIM
                </p>
              </div>
            </div>
          </a>
        </div>
        <ul className="relative px-1">
          <li className="relative" id="sidenavSecEx2">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <i className="fa-solid fa-user mr-3"></i>
              <span>Người Dùng</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-3 h-3 ml-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                />
              </svg>
            </a>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSidenavSecEx2"
              aria-labelledby="sidenavSecEx2"
              data-bs-parent="#sidenavSecExample"
            >
              <li className="relative">
                <NavLink
                  to={"admin/users"}
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  Danh sách người dùng
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to={"admin/users/addnew"}
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  Thêm mới
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="relative" id="sidenavSecEx3">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx3"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx3"
            >
              <i className="fa-solid fa-film mr-3"></i>
              <span>Phim</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-3 h-3 ml-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                />
              </svg>
            </a>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSidenavSecEx3"
              aria-labelledby="sidenavSecEx3"
              data-bs-parent="#sidenavSecExample"
            >
              <li className="relative">
                <NavLink
                  to={"admin/films"}
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  Danh sách phim
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to={"admin/films/addnew"}
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  Thêm mới
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <hr className="my-2" />
        <ul className="relative px-1">
          <li className="relative">
            <a
              onClick={() => {
                if (window.confirm("Bạn thật sự muốn đăng xuất?")) {
                  logOutAction();
                }
              }}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <i className="fa-solid fa-right-from-bracket mr-3"></i>
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>

      <nav className="relative flex flex-wrap items-center justify-between  py-3 bg-black opacity-80 mb-3 md:hidden">
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <button
              className="mx-auto text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-white"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center transition-all delay-150 duration-300" +
              (navbarOpen ? " flex h-full " : " invisible opacity-0 h-0 ")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-1 pt-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-user "></i>
                  <span className="ml-2 text-base">Người dùng</span>
                </a>
              </li>

              <li className="nav-item ml-1">
                <NavLink
                  to={"admin/users"}
                  className="px-1 pt-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  <span className="ml-2">Danh sách</span>
                </NavLink>

                <NavLink
                  to={"admin/users/addnew"}
                  className="px-1 pt-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  <span className="ml-2">Thêm mới</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 pt-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-film "></i>
                  <span className="ml-2 text-base">Phim</span>
                </a>
              </li>

              <li className="nav-item ml-1">
                <NavLink
                  to={"admin/films"}
                  className="px-1 pt-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  <span className="ml-2">Danh sách</span>
                </NavLink>

                <NavLink
                  to={"admin/films/addnew"}
                  className="px-1 pt-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  <span className="ml-2">Thêm mới</span>
                </NavLink>
              </li>
              <hr className="my-3" />
              <li className="nav-item">
                <a
                  className="px-1 pt-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                  onClick={() => {
                    if (window.confirm("Bạn thật sự muốn đăng xuất?")) {
                      logOutAction();
                    }
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket "></i>
                  <span className="ml-2 text-base">Đăng Xuất</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
