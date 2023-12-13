import React from "react";

const Aboutus = () => {
  return (
    <div className="flex justify-center md:mt-14 mt-9">
      <div className="glow-round"></div>
      <div className="md:w-4/5 w-11/12 flex flex-col gap-4 md:gap-8 relative">
        <h1 className="small-text-grade  text-2xl md:text-4xl font-semibold">
          About Us
        </h1>
        <div className="text-white md:text-xl text-sm">
          <p>
            At Bharat Kaa Coders, we're passionate about coding and
            gaming. Our mission is to provide an immersive and engaging platform
            that combines the thrill of gaming with the educational value of
            coding. We believe that learning should be fun, and what's more
            exciting than learning while playing?
          </p>
          <p>
            Our platform is designed for both beginners and seasoned coders. We
            offer a range of challenges, puzzles, and competitions that cater to
            various skill levels, ensuring that everyone finds a rewarding
            experience here. We're committed to creating a supportive and
            interactive community where individuals can learn, grow, and
            collaborate.
          </p>
          <p>
            Behind Bharat Kaa Coders is a team of dedicated developers,
            designers, and educators who are enthusiastic about sharing their
            knowledge and creating an environment that inspires innovation and
            creativity.
          </p>
        </div>
      </div>
      <div className="glow-round-right"></div>
    </div>
  );
};

export default Aboutus;
