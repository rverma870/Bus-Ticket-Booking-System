import React from "react";
// import { bindActionCreators } from "redux";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { FaUser } from "react-icons/fa";
// import { ToggleActionCreators } from "../../State/IndexActions";

function LogginLogoutButton({ handelLoginSignUpModal }) {
  // const isLoggedIn = useSelector((state) => state.IsLoggedIn);
  const isLoggedIn = false;
  // const dispatch = useDispatch();
  // const actions = bindActionCreators(ToggleActionCreators, dispatch);

  // const LogOutUrl = `${process.env.REACT_APP_HOST_NAME}/Logout`;

  const handleLogout = async () => {
    // await axios
    //   .get(LogOutUrl, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     if (res.data === "User successfully Logged Out") {
    //       actions.ChangeLoginState();
    //       actions.ChangeIsDealerBoolenState();
    //     }
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err.message, " this is error form logginLogoutButton");
    //   });
  };

  return (
    <>
      <button
        className="NavbarLogginRegistrationButton btn text-white"
        type="button"
        data-bs-toggle={isLoggedIn ? "" : "modal"}
        data-bs-target="#LoginModal"
        onClick={isLoggedIn ? handleLogout : handelLoginSignUpModal}
      >
        <FaUser size={"4vh"} />
        <div>{isLoggedIn ? "LogOut" : "Login/SignUp"}</div>
      </button>
    </>
  );
}

export default LogginLogoutButton;
