import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch } from "react-redux";
import { logged_out } from "../../Store/Action/Action";
import { useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(logged_out());
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  return (
    <div className="w-full md:w-3/12 p-5 flex flex-col md:gap-8">
      <div className="flex justify-between items-center">
        <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-500 rounded-full flex justify-center items-center">
          <CurrencyBitcoinIcon style={{ fontSize: 32, color: "white" }} />
        </div>
        <DriveFileRenameOutlineTwoToneIcon
          style={{ color: "lightblue", fontSize: 28 }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col md:gap-4 text-white mt-4 md:mt-0">
        <div>
          <h1 className="text-xl md:text-4xl font-bold">Saad Ansari</h1>
          <h3 className="text-md md:text-xl font-bold">@Saadansari234</h3>
        </div>
        <div>
          <p className="text-sm md:text-xl">
            I am a frontend developer, currently focusing on ReactJS.
          </p>
          <h3 className="text-sm md:text-xl font-semibold">INDIA</h3>
        </div>
        <div className="flex justify-start gap-3 mt-2 md:mt-4">
          <GitHubIcon style={{ fontSize: 24 }} />
          <LinkedInIcon style={{ fontSize: 24 }} />
          <LanguageIcon style={{ fontSize: 24 }} />
        </div>
      </div>
      <hr className="card mt-4 md:mt-6" />
      <div className="text-black font-semibold drop-shadow-2xl ">
        <button className="button-grade px-8 py-2" onClick={handelLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
