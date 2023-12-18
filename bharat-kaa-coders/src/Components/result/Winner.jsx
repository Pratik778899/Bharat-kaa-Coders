import React, { useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const Winner = ({ time }) => {
  const navigate = useNavigate();
  const [toggledown, settoggledown] = useState(true);

  const handelclose = () => {
    settoggledown(false);
    navigate("/Question");
  };

  return (
    <div>
      {toggledown && (
        <div sx={{ maxWidth: 345 }} className="flex justify-center">
          <div className="winner-section card p-6 text-white">
            <div className="text-right" onClick={handelclose}>
              <CloseIcon sx={{ cursor: "pointer" }} />
            </div>
            <div className=" md:w-48  flex flex-col justify-center items-center mb-6">
              <EmojiEventsIcon style={{ color: "#cd7f32", fontSize: 33 }} />
              <h3 className="font-semibold text-xl">Bronze</h3>
              <div className="flex text-yellow-700">
                <StarIcon />
                <StarIcon />
              </div>
            </div>

            <hr style={{ borderWidth: 2 }} />

            <h1 className="text-center font-semibold text-xl m-2">Winner</h1>
            <h3 className="text-center">Your Time: {time}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Winner;
