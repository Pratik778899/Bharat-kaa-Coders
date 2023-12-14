import React from "react";
import { database } from "../Database/Database";
import { questionNo } from "../Store/Action/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handelIndex = i => {
    dispatch(questionNo(i));
    navigate("/QuestionAns")
    // console.log(i);
  };
  return (
    <div className="flex justify-center mt-11">
      <div className="flex flex-col items-center gap-9">
        <div className="glow-round"></div>

        <div className="text-3xl md:text-6xl font-semibold green-grade whitespace-nowrap">
          Questions
        </div>
        <div className="gap-4 item-center flex justify-center flex-col items-center">
          {database.map((question, i) => (
            <div
              key={i}
              onClick={() => handelIndex(i)}
              className="text-white text-sm md:text-lg border-solid hover:shadow-sm hover:shadow-white
                             border-gray-500 border-2 rounded-md p-2 md:p-5 w-11/12 md:w-5/5 cursor-pointer "
            >
              <p>{question.title}</p>
            </div>
          ))}
        </div>
        <div className="glow-round-right"></div>
      </div>
    </div>
  );
};

export default Questions;
