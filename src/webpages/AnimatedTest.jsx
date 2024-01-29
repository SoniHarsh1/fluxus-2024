"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import "./styles.css";
import Video from "../components/Video";

const ThemeText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div className="scrollDiv w-full flex flex-col" ref={ref}>
      <div
        className="w-full text-center flex word-wrap align-items-center justify-center ofh"
        style={{ border: "1px solid red" }}
      >
        {["T", "H", "E", "M", "E", " ", "T", "E", "S", "T"].map(
          (letter, index) => {
            const delay = useTransform(
              scrollYProgress,
              [0, 1],
              [`${20 + 3 * index}vh`, "-10vh"]
            );
            if (index === 5) {
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

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const divX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9],
    ["-40vw", "0vw", "-20vw"]
  );
  const divY = useTransform(scrollYProgress, [0.3, 0.9], ["0vh", "-20vh"]);
  const div2X = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9],
    ["60vw", "0vw", "-40vw"]
  );
  const div2Y = useTransform(scrollYProgress, [0, 0.3], ["10vh", "0vh"]);
  const div2Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const div2Scale = useTransform(scrollYProgress, [0, 0.3], [2, 1]);

  return (
    <>
      <div
        className="scrollDiv w-full flex"
        style={{ marginTop: "10rem" }}
        ref={ref}
      >
        <motion.div style={{ width: "40%", x: divX, y: divY }}>
          <div style={{ border: "1px solid red", height: "10vh" }}>Hello</div>
        </motion.div>
        <motion.div
          style={{
            width: "60%",
            x: div2X,
            opacity: div2Opacity,
            scale: div2Scale,
            y: div2Y,
          }}
        >
          <div style={{ border: "1px solid red", height: "10vh" }}>Hello</div>
        </motion.div>
      </div>
    </>
  );
};

const AboutSection2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const divX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7],
    ["-40vw", "0vw", "-20vw"]
  );
  const divY = useTransform(scrollYProgress, [0.3, 0.7], ["0vh", "-20vh"]);
  const scrollVelocity = useVelocity(scrollYProgress);
  console.log("Hello", scrollVelocity);
  const div2X = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1.0],
    ["60vw", "0vw", "-40vw", "-60vw"]
  );
  const div2Y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1.0],
    ["10vh", "0vh", "0vh", "0vh"]
  );
  const div2Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const div2Scale = useTransform(scrollYProgress, [0, 0.3], [2, 1]);

  return (
    <div
      className="scrollDiv w-full flex"
      style={{ marginTop: "10rem" }}
      ref={ref}
    >
      <motion.div style={{ width: "40%", x: divX, y: divY }}>
        <div style={{ border: "1px solid red", height: "10vh" }}>Hello</div>
      </motion.div>
      <motion.div
        style={{
          width: "60%",
          x: div2X,
          opacity: div2Opacity,
          scale: div2Scale,
          y: div2Y,
        }}
      >
        <div>
          <Video />
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedTest = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="contentDiv h-screen"></div>
      <ThemeText />
      <AboutSection />
      <AboutSection2 />
      <div className="contentDiv h-screen"></div>
    </div>
  );
};

export default AnimatedTest;
