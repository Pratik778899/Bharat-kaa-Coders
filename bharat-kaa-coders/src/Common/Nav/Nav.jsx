import React, { Component } from "react";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="flex justify-center items-center bg-main font-family">
        <div className="glow-back"></div>
        <div className="nav-Main bg-main-color flex justify-center text-white gap-8 p-2 px-2 m-3 rounded-full relative items-center">
          <Link to="/">
            <div className="nav-Logo flex gap-1 items-center">
              <CodeIcon
                sx={{
                  rotate: "40deg",
                  fontSize: "24px",
                  fontWeight: "1000",
                  color: "#AEFD91",
                }}
              />
              <h1 className="font-bold text-xl">BKC</h1>
            </div>
          </Link>
          <div className="nav-Mid flex gap-5">
            <div className="flex gap-5 text-sm text-zinc-300">
              <Link to="/1-v-1">1 VS 1</Link>
            </div>
          </div>
          <div className="login-signup flex gap-1 ">
            <div className="bg-border-main px-3 py-1 text-black rounded-full font-semibold">
              <Link to="/Login-In">Login In</Link>
            </div>
            <div className="bg-border-main px-3 py-1 text-black rounded-full font-semibold ">
              <Link to="/Sign-Up">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
