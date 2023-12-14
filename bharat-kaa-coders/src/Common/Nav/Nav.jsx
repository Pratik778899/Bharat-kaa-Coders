import React, { Component } from "react";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  render() {
    const { showDropdown } = this.state;
    const { isLogged } = this.props;

    return (
      <div className="flex justify-center items-center bg-main font-family">
        <div className="glow-back"></div>
        <div className="nav-Main bg-main-color flex justify-center text-white gap-2 md:gap-8 lg:gap-8 p-2 px-2 m-3 rounded-full relative items-center">
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
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl">BKC</h1>
            </div>
          </Link>
          <div className="nav-Mid flex gap-5">
            <div className="hidden md:flex gap-5 text-sm text-zinc-300">
              <Link to="/1-v-1">Question</Link>
              <Link to="/AboutUs">About Us</Link>
              <Link to="/ContactUs">Contact Us</Link>
            </div>
          </div>
          <div className="login-signup flex gap-2">
            <div className="bg-border-main px-3 py-1 text-black rounded-full font-semibold">
              {isLogged ? (
                <Link to="/Profile">Profile</Link>
              ) : (
                <Link to="/Log-In">Join In</Link>
              )}
            </div>
          </div>
          <div className="md:hidden relative">
            <button
              onClick={this.toggleDropdown}
              className="bg-border-main px-3 py-1 text-black rounded-full font-semibold"
            >
              Menu
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 bg-main-color text-sm text-white rounded-md p-2 mt-1">
                <Link to="/1-v-1" className="block py-1">
                  Question
                </Link>
                <Link to="/AboutUs" className="block py-1">
                  About Us
                </Link>
                <Link to="/ContactUs" className="block py-1">
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.Reducer.isLogged,
  };
};

export default connect(mapStateToProps)(Nav);
