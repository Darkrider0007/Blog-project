/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .deleteSeason()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("LogoutBtn :: logoutHandler :: error :: ", error);
      });
  };
  return (
    <div>
      <button
        className="inline-block px-6 py-2 md:bg-red-500 md:hover:bg-red-700 duration-200 text-white md:font-bold rounded-full
            hover:bg-red-700 md:hover:text-white"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
