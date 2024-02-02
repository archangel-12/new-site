"use client";

import React, { useState } from "react";
import { 
  PiSoundcloudLogoBold,
  PiInstagramLogoBold,
  PiTelevisionBold,
  PiInfoBold,
  PiYoutubeLogoLight,
  PiSpotifyLogoBold,
} from "react-icons/pi";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

function TestimonialTooltip() {
  const [hoveredIndex, setHoveredIndex] = useState();

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const people = [
    {
      id: 1,
      name: "trust me, i'm not that active",
      href: "https://www.instagram.com/r3yanson/",
      image: <PiInstagramLogoBold />,
    },
    {
      id: 2,
      name: "i do make music sometimes",
      href: "http://bitly.ws/Svhi",
      image: <PiSoundcloudLogoBold />,
    },
    {
      id: 3,
      name: "don't click/press the shit. i swear it's horrible",
      href: "https://bitly.ws/3bPaL",
      image: <PiYoutubeLogoLight />,
    },
    {
      id: 4,
      name: "fav's playlist",
      href: "https://bitly.ws/3bPaL",
      image: <PiSpotifyLogoBold />,
    },
    {
      id: 5,
      name: "my favorite site",
      href: "https://bitly.ws/3b4Pk",
      image: <PiTelevisionBold />,
    },
    {
      id: 6,
      name: "additional things about me",
      href: "https://bitly.ws/Svgx",
      image: <PiInfoBold />,
    },
  ];

  return (
    <div
      className="flex flex-row items-center gap-x-9  
    cursor-pointer
    "
    >
      {people.map((testimonial, idx) => (
        <div
          className="-mr-4  relative group"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="font-bold text-white relative z-30 text-xs">
                  {testimonial.name}
                </div>
                <div className="text-white text-xs">{testimonial.position}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={testimonial.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {testimonial.image}
          </a>
        </div>
      ))}
    </div>
  );
}

export default TestimonialTooltip;