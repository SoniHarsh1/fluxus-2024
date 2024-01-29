"use client";
// before you edit this page plz look onto a point that the responsiveness of this page is dynamically changing based on the window size so if u try doing any parallax effects , do make sure that it doesnt get effected due to window size changes

import LeftSmokeDust from "@/components/main/hero/LeftSmokeDust";
import MainLogo from "@/components/main/hero/MainLogo";
import MainText from "@/components/main/hero/MainText";
import RightSmokeDust from "@/components/main/hero/RightSmokeDust";
import SaturnPlanet from "@/components/main/hero/SaturnPlanet";
import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  AnimatePresence
} from "framer-motion";
import "./styles.css";

const ThemeText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <div className="scrollDiv w-full flex flex-col" ref={ref}>
		<AnimatePresence>
      <div className="w-full text-center flex word-wrap align-items-center justify-center ofh">
        {["T", "H", "E", " ", "C", "E", "L", "E", "S", "T", "I", "A", "L"].map(
          (letter, index) => {
            const delay = useTransform(
              scrollYProgress,
              [0, 1],
              [`${50 + 1 * index}vh`, "-100vh"]
            );
            if (index === 3) {
              return (
                <motion.div key={index} style={{ y: delay }} transition={{ ease: "ease-in-out", duration: 0.1 }}>
                  <div className="scrollText text-white">&nbsp;</div>
                </motion.div>
              );
            }
            return (
              <motion.div key={index} style={{ y: delay }} transition={{ ease: "ease-in-out", duration: 0.1 }} >
                <div className="scrollText text-white">{letter}</div>
              </motion.div>
            );
          }
        )}
      </div>
	  </AnimatePresence>
	  <div className="w-full text-center flex word-wrap align-items-center justify-center ofh">
        {["E","U","P","H","O","R","I","A"].map(
          (letter, index) => {
            const delay = useTransform(
              scrollYProgress,
              [0, 1],
              [`${50 + 1 * index}vh`, "-100vh"]
            );
            if (index === 8) {
              return (
                <motion.div key={index} style={{ y: delay }}>
                  <div className="scrollText text-white">&nbsp;</div>
                </motion.div>
              );
            }
            return (
              <motion.div key={index} style={{ y: delay }}>
                <div className="scrollText text-white">{letter}</div>
              </motion.div>
            );
          }
        )}
      </div>
      <div
        className="m-2 w-full text-center align-middle"
        style={{ border: "1px solid red", height: "10%" }}
      >
        Dive into the world of Technology
      </div>
    </div>
  );
};

export default function Home() {
  const [width] = useWindowSize();

  useEffect(() => {
    const contentElement = document.getElementById("content");
    const mainTextElement = document.getElementById("main_text");
    if (contentElement) {
      contentElement.style.gridTemplateRows = `${width / 5}px auto`;
    }
    if (mainTextElement) {
      mainTextElement.style.marginTop = `${width / 10}px`;
    }
  }, [width]);

  return (
    <main>
      <div className="max-w-full max-h-full relative ">
        <div className="absolute w-full h-full z-[-2]">
          <SaturnPlanet />
        </div>
        <div id="content" className={`relative  w-full h-full top-0 grid `}>
          <div className="grid  grid-cols-3 absolute">
            <div className="z-[-3] translate-y-[55px]">
              <LeftSmokeDust />
            </div>
            <div className=""></div>
            <div className="z-[-3] -translate-y-[10px]">
              <RightSmokeDust />
            </div>
          </div>
          <div></div>
          <div className="grid justify-center items-center grid-cols-[0.4fr_1fr_0.4fr]">
            <div></div>
            <div className=" ">
              <MainLogo />
            </div>
            <div></div>
          </div>

          {/* <div id="main_text" className='   flex justify-center'>
						<MainText />
					</div> */}
          <ThemeText />
        </div>
        {/* <div>
					<div className='flex justify-center items-center mt-3 sm:mt-6 lg::mt-10'>
						<hr id="hr" />
					</div>
					<div className='text-white text-center my-1'>Dive into the realm of technology</div>
					<div className='flex justify-center items-center mb-10'>
						<hr id="hr" />
					</div>
				</div> */}
      </div>
      <style jsx>
        {`
          #hr {
            height: 2px;
            background-color: white;
            width: 95%;
            border-style: none;
          }
        `}
      </style>
    </main>
  );
}
