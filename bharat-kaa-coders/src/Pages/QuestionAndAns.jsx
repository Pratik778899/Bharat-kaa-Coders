import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { database } from "../Database/Database";

const QuestionAndAns = () => {
  const selector = useSelector(state => state.Reducer.questionNo);
  const [userCode, setUserCode] = useState("");
  const [conditionOfButton, setconditionOfButton] = useState(false);
  const [userResults, setUserResults] = useState([]);
  const filterData = database.filter((question, i) => {
    return selector === i;
  });
  //   console.log(filterData);
  const timeInMinutes = filterData[0].timer;
  const question = filterData[0].question;
  const [totalSeconds, setTotalSeconds] = useState(timeInMinutes * 60); // Convert minutes to seconds
  const [minutes, setMinutes] = useState(Math.floor(totalSeconds / 60));
  const [seconds, setSeconds] = useState(totalSeconds % 60);

  const handleUserCodeChange = newValue => {
    setUserCode(newValue);
    runTests(newValue, setUserResults, 1);
    setconditionOfButton(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        const updatedSeconds = totalSeconds - 1;
        const mins = Math.floor(updatedSeconds / 60);
        const secs = updatedSeconds % 60;
        setTotalSeconds(updatedSeconds);
        setMinutes(mins);
        setSeconds(secs);
      } else {
        clearInterval(timer);
        console.log("Timer ended!");
        // Add logic here for when the timer ends, if needed
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [totalSeconds]);

  const runTests = (code, setResults, user) => {
    const testCases = filterData[0].testCase;

    const newResults = testCases.map((testCase, index) => {
      let result;
      try {
        const userAdd = eval(`(${code})`);
        result =
          userAdd(...testCase.input) === testCase.output ? "Pass" : "Fail";
        if (result === "Pass") {
          toast.success(`User ${user} passed test case ${index + 1}`, {});
        }
      } catch (error) {
        result = "Error";
      }
      return { ...testCase, result };
    });

    setResults(newResults);
  };

  const handleUserSubmit = (results, user) => {
    if (results.every(result => result.result === "Pass")) {
      toast.success(`User ${user} is the winner!`, {});
    } else {
      toast.error(`User ${user} did not pass all test cases.`, {});
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center text-white relative">
      <div className="glow-round absolute z-0"></div>
      <div className="flex w-full h-screen card rounded-lg shadow-lg p-6 m-6 relative z-10">
        <div className="w-1/2 pr-4">
          <h1 className="text-xl font-bold mb-4">Question</h1>
          <h1>
          Time Left: {minutes.toString().padStart(2, "0")} min{" "}
            {seconds.toString().padStart(2, "0")} sec
          </h1>
          <pre className="p-4 rounded-lg text-white">{question}</pre>
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-xl font-bold mb-4">Your Code</h1>
          <div style={{ height: "65%" }}>
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={userCode}
              defaultValue={filterData[0].question}
              onChange={handleUserCodeChange}
              theme="vs-dark"
            />
          </div>
          <div className="my-5">
            <Accordion
              sx={{
                backgroundColor: "#1E1E1E",
                marginTop: "30px",
                color: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>TestCases</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="text-white">
                  {userResults.map((result, index) => (
                    <p key={index}>
                      Test Case {index + 1}: {result.result}
                    </p>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            {conditionOfButton && (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => handleUserSubmit(userResults, 1)}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="glow-round-right absolute z-0"></div>
      <div className="relative">
        <ToastContainer />
      </div>
    </div>
  );
};

export default QuestionAndAns;
