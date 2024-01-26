import { useState } from "react";
import Logo from "../ui/Logo";
import Modalui from "../ui/Modal";
import Search from "../ui/Search";
import { useRouter } from "next/router";
import Link from "next/link";




const Header = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const router = useRouter();
  return (
    <div className={`h-[5.5rem]   ${router.pathname == '/' || router.pathname =='/home' ? 'absolute' : 'bg-black'}  top-0 w-full header-menu-wrapper`}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static z-20 absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-[100vh] sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li
              className={`font-raleway px-[5px] my-[10px] uppercase ${
                isMenuModal === true &&
                "border-b border-gray-300 w-92 text-[1.3rem]  min-w-48 tracking-[0.3rem] text-center font-bold"
              }`}
            >
              <Link  href="/">Home</Link>
            </li>
            <li
              className={`font-raleway px-[5px] my-[10px] uppercase ${
                isMenuModal === true &&
                "border-b border-gray-300 w-92 text-[1.3rem]  min-w-48 tracking-[0.3rem] text-center font-bold"
              }`}
            >
              <Link href="/menu">Menu</Link>
            </li>
            <li
              className={`font-raleway px-[5px] my-[10px] uppercase ${
                isMenuModal === true &&
                "border-b border-gray-300 w-92 text-[1.3rem]  min-w-48 tracking-[0.3rem] text-center font-bold"
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`font-raleway px-[5px] my-[10px] uppercase ${
                isMenuModal === true &&
                "border-b border-gray-300 w-92 text-[1.3rem]  min-w-48 tracking-[0.3rem] text-center font-bold"
              }`}
            >
              <Link href="/booktable">Booktable</Link>
            </li>
          </ul>
        </nav>
        <div>
          <div className="flex items-center gap-x-4">
            <Link href="/auth/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 user-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
            <a href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cart-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </a>
            <button>
              <Modalui
                title={{ text: "Search", classes: "font-dancing text-[2rem]" }}
                content={<Search />}
                onConfirm={() => console.log("Button confirm")}
                onDiscard={() => console.log("Button discard")}
                buttons={[
                  {
                    role: "custom",
                    onClick: () => console.log("custom test"),
                    toClose: true,
                    classes: "",
                    color: "danger",
                    variant: "light",
                    label: "Close",
                  },
                ]}
                isModalOpen={isModalOpen}
                onCloseModal={() => setIsModalOpen(false)}
              />

              <svg
                onClick={handleOpenModal}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 search-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <a href="" className="md:inline-block hidden sm">
              <button className="btn-primary">Order Online</button>
            </a>
            <button
              className="sm:hidden inline-block"
              onClick={() => setIsMenuModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {isMenuModal && (
              <div
                onClick={() => setIsMenuModal(false)}
                className="sm:hidden z-30 w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer"
              >
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 36 36"
                  version="1.1"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    className="clr-i-outline clr-i-outline-path-1"
                    d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
