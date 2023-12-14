import React from "react";
import man from "../../src/Assets/pic1.png";
import join from "../../src/Assets/pic2.png";
import Welcome from "../Common/Welcome/Welcome";

const Home = () => {
  return (
    <>
      <div className="bg-main min-h-screen text-white px-8 md:px-20 lg:px-40 font-family">
        <div className="glow-round"></div>
        <Welcome />
        <div className="flex justify-center">
          <h2 className="text-zinc-500 text-center w-full lg:w-3/5 p-2">
            Are you ready to embark on an exhilarating journey into the world of
            programming and logic? Look no further than{" "}
            <span>Bharat Kaa Coders</span>, your gateway to mastering coding
            through thrilling challenges and engaging gameplay!
          </h2>
        </div>
        <div className="relative pt-5 justify-center flex items-center flex-col md:flex-row">
          <div className="left w-full md:w-3/5 md:pr-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
              Unleash Your Code Mastery in 1v1 Coding Duels!
            </h1>
            <h2 className="text-zinc-500 text-left py-2">
              Engage in thrilling head-to-head coding battles on{" "}
              <span>Bharat Kaa Coders!</span> Challenge opponents, refine your
              algorithms, and claim victory to earn exclusive badges showcasing
              your coding expertise. Join now and conquer the coding arena!
            </h2>
          </div>
          <div className="right mt-5 md:mt-0">
            <img src={man} alt="text" className="relative w-full md:w-auto" />
            <div className="glow-round-right"></div>
          </div>
        </div>
        <div className="relative pt-5 justify-center flex items-center flex-col md:flex-row">
          <div className="right mt-5 md:mt-0">
            <img src={join} alt="join" className="relative" />
            <div className="glow-round"></div>
          </div>
          <div className="left w-full md:w-3/5 md:pr-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-right">
              Join a Community of Innovators
            </h1>
            <div className="flex justify-end">
              <h2 className="text-zinc-500 md:w-4/5 text-right py-2">
                Become part of a vibrant community of like-minded individuals
                passionate about coding. Share insights, collaborate on
                projects, and engage in friendly competition with fellow coders
                from around the globe. Learning is more enjoyable when it's a
                shared experience!
              </h2>
            </div>
          </div>
        </div>
      <footer className="flex justify-center">
        <div className="card p-5 m-5 mb-5 w-full md:w-3/5">
          <p className="text-center ">
            &copy; 2023 Pratik Chaudhari and Saad Ansari. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Home;
