/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex flex-col md:flex-row'>
          <div className='mr-4 mb-4 md:mb-0 hidden md:block'>
            <Link to='/'>
              <Logo width='150px' />
            </Link>
          </div>
          <div className={`md:hidden flex flex-row gap-4 ${isMenuOpen?"ml-auto mt-1" : ""}`}>
            {/* Hamburger menu icon for small screens */}
            <button className="block md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <div className="mb-2">
                  <div className="bg-gray-700 h-1 w-8 rounded-sm rotate-45 translate-y-1"></div>
                  <div className="bg-gray-700 h-1 w-8 rounded-sm -rotate-45 "></div>
                </div>
              ):
              (
                <div>
                  <div className="h-1 w-6 bg-gray-700 rounded-sm mb-1"></div>
                  <div className="h-1 w-6 bg-gray-700 rounded-sm mb-1"></div>
                  <div className="h-1 w-6 bg-gray-700 rounded-sm"></div>
              </div>
              )}              
            </button>
          </div>
          <ul className={`flex md:ml-auto md:flex-row md:items-center md:flex ${isMenuOpen ? 'flex-col' : 'hidden'}`}>
            {navItems.map(
              (item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setIsMenuOpen(false); // Close the menu on item click
                      }}
                      className='block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
