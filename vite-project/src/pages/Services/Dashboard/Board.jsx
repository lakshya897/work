import React, { useState } from "react";
import Navbar from "../../../components/ServicesNavbar";
import { Link } from "react-router-dom";

import logoone from "../../../assets/Exclude.png";
import logotwo from "../../../assets/vector.png";
import logothree from "../../../assets/Group 262.png";
import Star from "../../../assets/star.svg";

const Board = () => {
  const [showMore, setShowMore] = useState({
    starStork: false,
    starMarg: false,
    starExplorer: false,
  });

  const handleLearnMore = (card) => {
    setShowMore((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />
      <div className="flex bg-black w-full justify-center">
        <div
          className="rounded-2xl w-full mx-4 mt-8 mb-12 p-4 
            md:mx-18 md:mt-4 md:mb-5 
            min-[1440px]:my-16 min-[1440px]:mx-36"
        >
          <div className="flex justify-center items-center">
            <img src={Star} className="" alt="Star Logo" />
          </div>
          <div className="text-center text-neutral-300 mt-2 md:mt-4 2xl:mt-12">
            <p className="text-lg font-semibold md:text-4xl">
              Welcome to{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-600 to-red-800">
                StarMapper
              </span>
            </p>
            <p className="text-xs md:text-sm pt-2 px-6 md:px-36 text-neutral-300 font-semibold min-[1440px]:text-lg min-[1440px]:px-56 2xl:px-96">
              Star-Mapper is a SaaS platform offering multiple services...
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col lg:flex-row justify-center mt-6 gap-10 lg:gap-20">
            {/* Star Stork Card */}
            <div className="border border-neutral-400 h-auto rounded-3xl  lg:w-1/4">
              {!showMore.starStork ? (
                <>
                  <div className="rounded-full border border-neutral-400 w-32 h-32 flex mx-auto mt-4 md:mt-10">
                    <img src={logoone} alt="star stork logo" className="p-3" />
                  </div>
                  <h1 className="text-center mt-6 font-bold text-neutral-300 text-2xl md:text-3xl">
                    STAR STORK
                  </h1>
                  <div className="mt-4 w-full bg-neutral-800 h-10">
                    <p className="p-2 text-neutral-400 font-semibold text-center text-sm">
                      Your{" "}
                      <span className="text-neutral-500">
                        Aerial Intelligence
                      </span>{" "}
                      Platform
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-center mt-8 font-bold text-neutral-300 text-3xl">
                    STAR STORK
                  </h1>
                  <div className="mt-4 w-full bg-neutral-800 h-16 mb-2">
                    <p className="p-1 text-lg text-neutral-400 font-semibold text-center border border-neutral-500">
                      Revolutionize decision-making
                      <br /> with StarStork.
                    </p>
                  </div>
                  <p className="text-neutral-300 text-center mt-4 m-8">
                    Our advanced software leverages cutting-edge drone
                    imagery...
                  </p>
                </>
              )}
              <div className="flex gap-2 p-4 w-full my-4 justify-center">
                <Link to="/ss/dashboard">
                  <button className="w-full bg-neutral-400 text-neutral-900 p-1 px-5 rounded-md">
                    Explore {">"}
                  </button>
                </Link>
                <button
                  className="text-neutral-400 border border-neutral-400 rounded-md py-1 px-4"
                  onClick={() => handleLearnMore("starStork")}
                >
                  {showMore.starStork ? "Less" : "Learn More"}
                </button>
              </div>
            </div>

            {/* Star Marg Card */}
            <div className="border border-neutral-400 h-auto rounded-3xl  lg:w-1/4">
              {!showMore.starMarg ? (
                <>
                  <div className="rounded-full border border-neutral-400 w-32 h-32 flex mx-auto mt-4 md:mt-10">
                    <img src={logotwo} alt="star marg logo" className="p-3" />
                  </div>
                  <h1 className="text-center mt-6 font-bold text-neutral-300 text-2xl md:text-3xl">
                    STAR MARG
                  </h1>
                  <div className="mt-4 w-full bg-neutral-800 h-10">
                    <p className="p-2 text-neutral-400 font-semibold text-center text-sm">
                      Your{" "}
                      <span className="text-neutral-500">
                        Path to Precision
                      </span>{" "}
                      Insights
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-center mt-8 font-bold text-neutral-300 text-3xl">
                    STAR MARG
                  </h1>
                  <div className="mt-4 w-full bg-neutral-800 h-16 mb-2">
                    <p className="p-1 text-lg text-neutral-400 font-semibold text-center border border-neutral-500">
                      Unleash the power of aerial <br /> data with StarMarg.
                    </p>
                  </div>
                  <p className="text-neutral-300 text-center mt-4 m-8">
                    Our comprehensive software transforms drone imagery...
                  </p>
                </>
              )}
              <div className="flex gap-2 p-4 w-full my-4 justify-center">
                <Link to="/sm/dashboard">
                  <button className="w-full bg-neutral-400 text-neutral-900 p-1 px-5 rounded-md">
                    Explore {">"}
                  </button>
                </Link>
                <button
                  className="text-neutral-400 border border-neutral-400 rounded-md py-1 px-4"
                  onClick={() => handleLearnMore("starMarg")}
                >
                  {showMore.starMarg ? "Less" : "Learn More"}
                </button>
              </div>
            </div>

            {/* Star Explorer Card */}
            <div className="border border-neutral-400 h-auto rounded-3xl  lg:w-1/4">
              {!showMore.starExplorer ? (
                <>
                  <div className="rounded-full border border-neutral-400 w-32 h-32 flex mx-auto mt-4 md:mt-10">
                    <img src={logothree} alt="star explorer logo" />
                  </div>
                  <h1 className="text-center mt-6 font-bold text-neutral-300 text-2xl md:text-3xl">
                    STAR EXPLORER
                  </h1>
                  <div className="mt-4 w-full bg-neutral-800 h-10">
                    <p className="p-2 text-neutral-400 font-semibold text-center text-sm">
                      Your{" "}
                      <span className="text-neutral-500">Mission Control</span>{" "}
                      Hub
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-center mt-8 font-bold text-neutral-300 text-3xl">
                    STAR EXPLORER
                  </h1>
                  <div className="mt-4 w-full bg-neutral-800 h-16 mb-2">
                    <p className="p-1 text-lg text-neutral-400 font-semibold text-center border border-neutral-500">
                      Elevate your drone operations <br /> with StareXplorer.
                    </p>
                  </div>
                  <p className="text-neutral-300 text-center mt-4 m-8">
                    Our powerful software seamlessly tracks flights, streams
                    live video...
                  </p>
                </>
              )}
              <div className="flex gap-2 p-4 w-full my-4 justify-center">
                <Link to="/dashboard">
                  <button className="w-full bg-neutral-400 text-neutral-900 p-1 px-5 rounded-md">
                    Explore {">"}
                  </button>
                </Link>
                <button
                  className="text-neutral-400 border border-neutral-400 rounded-md py-1 px-4"
                  onClick={() => handleLearnMore("starExplorer")}
                >
                  {showMore.starExplorer ? "Less" : "Learn More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;

{
  /* <div className="space-y-4 md:space-y-8 mt-8 md:mt-12">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-zinc-800 w-full md:w-3/5 mx-auto rounded-3xl p-4 items-center"
              >
                <div className="flex-shrink-0">
                  <img
                    src=""
                    alt="img"
                    className="w-16 h-16 md:w-20 md:h-20 bg-zinc-700 rounded-full"
                  />
                </div>
                <div className="flex flex-col flex-grow md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <div className="text-white font-bold text-lg">
                    Software Name
                  </div>
                  <div className="text-white text-sm md:text-base mt-2">
                    Plan missions, track flights, stream videos on cloud and get
                    detailed logs for useful insights. Sync your Software
                    projects with teams for greater degree of collaborations.
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className="bg-zinc-600 w-full md:w-48 h-10 mt-4 md:mt-0 md:ml-6 py-2 px-4 text-white font-semibold rounded-xl"
              >
                Explore Now
              </Link>
            </div>
            <div className="flex flex-col md:flex-row bg-zinc-800 w-full md:w-3/5 mx-auto rounded-3xl p-4 items-center">
              <div className="flex-shrink-0">
                <img
                  src=""
                  alt="img"
                  className="w-16 h-16 md:w-20 md:h-20 bg-zinc-700 rounded-full"
                />
              </div>
              <div className="flex flex-col flex-grow md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <div className="text-white font-bold text-lg">Star Stork</div>
                <div className="text-white text-sm md:text-base mt-2">
                  Utilize drone imagery for comprehensive analytics to enhance
                  decision-making. Opt for either training custom models or
                  employing built-in detectors for precise image analysis.
                </div>
              </div>
            ))}
        </div> */
}
{
  /*<div
            className="flex   justify-center mt-5
            min-[1440px]:mt-10"
          >
            <div
              className="bg-neutral-900 px-3 py-2 w-7/12 flex justify-evenly rounded-2xl
            2xl:w-5/12"
            >
              <div className="w-24 h-24   mt-1 mx-3">
                {/* <div className=" w-full h-full aspect-square rounded-full bg-neutral-800"></div> 
                <img src={Starmarg} className="mt-4 "></img>
              </div>
              <div className=" w-full">
                <h1 className="font-bold my-1 text-neutral-500 text-xl">
                  Star Marg
                </h1>
                <p className="text-xs  text-neutral-600 font-semibold w-11/12 pb-1">
                  Plan missions,track flights, stream videos on cloud and get
                  detailed logs for useful insights. Sync your Software projects
                  with teams for greater degree of collaborations.
                </p>
              </div>
              <div className="w-72 mx-3  h-8 py-1.5  rounded-md bg-neutral-800 mt-9 transition  hover:bg-neutral-700 duration-200   cursor-pointer">
                <Link to="/sm/dashboard">
                  <h1 className="text-sm text-center font-semibold text-neutral-400">
                    Explore Now
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex  justify-center mt-5
        "
          >
            <div
              className="bg-neutral-900 px-3 py-2 w-7/12 flex justify-evenly rounded-2xl
            2xl:w-5/12"
            >
              <div className="w-24 h-24   mt-1 mx-3">
                {/* <div className=" w-full h-full aspect-square rounded-full bg-neutral-800"></div> 
                <img src={Starexplorer} className="mt-4"></img>
              </div>
              <div className=" w-full">
                <h1 className="font-bold my-1 text-neutral-500 text-xl">
                  Star eXplorer
                </h1>
                <p className="text-xs  text-neutral-600 font-semibold w-11/12 pb-1">
                  Plan missions,track flights, stream videos on cloud and get
                  detailed logs for useful insights. Sync your Software projects
                  with teams for greater degree of collaborations.
                </p>
              </div>
              <div className="w-72 mx-3  h-8 py-1.5  rounded-md bg-neutral-800 mt-9 transition  hover:bg-neutral-700 duration-200   cursor-pointer">
                <Link to="/dashboard">
                  <h1 className="text-sm text-center font-semibold text-neutral-400">
                    Explore Now
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center mt-5 mb-2
            min-[1440px]:mb-8"
          >
            <div
              className="bg-neutral-900 px-3 py-2 w-7/12 flex justify-evenly rounded-2xl
            2xl:w-5/12"
            >
              <div className="w-24 h-24 mt-1 mx-3">
                {/* <div className=" w-full h-full aspect-square rounded-full bg-neutral-800"></div> 
                <img src={StarStork} className="mt-4"></img>
              </div>
              <div className=" w-full">
                <h1 className="font-bold my-1 text-neutral-500 text-xl">
                  Star Stork
                </h1>
                <p className="text-xs  text-neutral-600 font-semibold w-11/12 pb-1">
                  Plan missions,track flights, stream videos on cloud and get
                  detailed logs for useful insights. Sync your Software projects
                  with teams for greater degree of collaborations.
                </p>
              </div>
              <div className="w-72 mx-3  h-8 py-1.5  rounded-md bg-neutral-800 mt-9 transition  hover:bg-neutral-700 duration-200   cursor-pointer">
                <Link to="/ss/dashboard">
                  <h1 className="text-sm text-center font-semibold text-neutral-400">
                    Explore Now
                  </h1>
                </Link>
              </div>
            </div>
          </div> */
}
