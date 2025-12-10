import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {
  const { navigate, isEducator } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const isCourseListPage = location.pathname.includes('/course-list');

  // Mobile dropdown toggle
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-20 border-b border-gray-500/50 py-4 ${
        isCourseListPage ? 'bg-primary/20 w-full border-none' : 'bg-secondary/70'
      }`}
    >
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="logo"
        className="w-30 lg:w-50 cursor-pointer"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex item-center gap-5 text-background">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button
                className="bg-red-50 text-primary rounded py-2 px-3"
                onClick={() => {
                  navigate('/educator');
                }}
              >
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>

              <Link
                className="text-red-50 bg-primary rounded py-2 px-3"
                to="/my-enrollment"
              >
                My Enrollments
              </Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-10 h-10',
                userButtonPopoverCard: 'shadow-lg',
                userButtonTrigger: 'rounded-full border border-gray-300',
              },
            }}
          />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-700 text-gray-50 px-5 py-2 rounded"
          >
            Login / signup
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-4 sm:gap-5">

        {/* Menu toggle button */}
        <button onClick={() => setOpenMenu(!openMenu)}>
          <img src={assets.home_icon} alt="menu" className="w-5 h-5" />
        </button>

        {/* User avatar or login button */}
        {user ? (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-10 h-10',
                userButtonPopoverCard: 'shadow-lg',
                userButtonTrigger: 'rounded-full border border-gray-300',
              },
            }}
          />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>
        )}
      </div>

      {/* Mobile Dropdown Panel */}
      {openMenu && (
        <div className="md:hidden bg-white shadow-lg rounded-lg p-4 absolute top-16 right-4 w-52 z-50">

          {user && (
            <>
              <button
                className="block w-full text-left bg-red-100 text-primary rounded py-2 px-3 text-1xl mb-2"
                onClick={() => {
                  navigate('/educator');
                  setOpenMenu(false);
                }}
              >
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>

              <Link
                className="block w-full bg-primary/60 text-white font-semibold rounded py-2 px-3 text-1xl"
                to="/my-enrollment"
                onClick={() => setOpenMenu(false)}
              >
                My Enrollments
              </Link>
            </>
          )}

          {!user && (
            <button
              onClick={() => {
                openSignIn();
                setOpenMenu(false);
              }}
              className="block w-full bg-blue-700 text-white rounded py-2 px-3 text-sm mt-2"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      )}

    </div>
  );
};

export default Navbar;
