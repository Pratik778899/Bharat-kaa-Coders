import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { database } from "../Database/Database";
import Winner from "../Components/Result/Winner.jsx";
import Loser from "../Components/Result/Loser.jsx";

const QuestionAndAns = () => {
  const selector = useSelector(state => state.Reducer.questionNo);
  const [userCode, setUserCode] = useState("");
  const [conditionOfButton, setconditionOfButton] = useState(false);
  const [userResults, setUserResults] = useState([]);
  const [showWinner, setShowWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
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
    // console.log(newValue);
    setUserCode(newValue);
    runTests(newValue, setUserResults, 1);
    setconditionOfButton(true);
  };

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      if (totalSeconds > 0 && !timerFinished) {
        const updatedSeconds = totalSeconds - 1;
        const mins = Math.floor(updatedSeconds / 60);
        const secs = updatedSeconds % 60;
        setTotalSeconds(updatedSeconds);
        setMinutes(mins);
        setSeconds(secs);
      } else {
        clearInterval(timer);
        if (!showWinner) {
          setLoser(true);
          console.log("Timer ended!");
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [totalSeconds, timerFinished, showWinner]);

  const runTests = (code, setResults, user) => {
    const testCases = filterData[0].testCase;
    // console.log(testCases);

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

  const handleUserSubmit = results => {
    if (loser) {
      toast.error(`Time's up! You're a loser!`, {});
      return;
    }

    if (results.every(result => result.result === "Pass")) {
      toast.success(`Congratulations! You're the winner!`, {});
      setShowWinner(true);
      setTimerFinished(true);
      clearInterval(timer);
    } else {
      toast.error(`You did not pass all test cases. Try again!`, {});
    }
  };

  return (
    <>
      <div className="index ">
        {showWinner && <Winner time={`${minutes}:${seconds}`} />}
      </div>
      <div className="index">{loser && !showWinner && <Loser />}</div>
      <div className="flex min-h-full items-center justify-center text-white">
        <div className="glow-round absolute z-0"></div>
        <div className="flex w-full min-h-screen card rounded-lg shadow-lg p-6 m-6 z-10 flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 pr-4">
            <h1 className="text-xl font-bold mb-4 small-text-grade">
              Question
            </h1>
            <h1 className="small-text-grade text-4xl">
              Time Left: {minutes.toString().padStart(2, "0")} min{" "}
              {seconds.toString().padStart(2, "0")} sec
            </h1>
            <pre className="p-4 rounded-lg break-words whitespace-pre-wrap text-white">{question}</pre>
          </div>
          <div className="w-full sm:w-1/2 pl-4 relative">
            <h1 className="text-xl font-bold mb-4 small-text-grade">
              Your Code
            </h1>
            <div style={{ height: "55vh"}}>
              <Editor
                height="100%"
                defaultLanguage="javascript"
                value={userCode}
                // defaultValue={filterData[0].question}
                defaultValue={`// Write Your Code Here`}
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
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "white", position: "relative" }}
                    />
                  }
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
        {/* <div className="relative"><ToastContainer /></div> */}
        <div className="glow-round-right"></div>
      </div>
    </>
  );
};

export default QuestionAndAns;
