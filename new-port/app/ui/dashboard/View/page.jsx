"use client";
import React from "react";
import { PiGithubLogoLight, PiMediumLogoBold } from "react-icons/pi";
import { SiCss3, SiFramer } from "react-icons/si";

import TestimonialTooltip from "@/app/TestimonialTooltip/page";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit hidden  max-xl:hidden "
    >
      <div className=" md:w-60 w-full rounded-2xl h-fit sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <div className="text-neutral-400">
              <h1 className="font-RubikMedium text-neutral-200">more?</h1>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md ">
                <a href="https://archangel-12.vercel.app/" className="flex items-center gap-x-3">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiMediumLogoBold className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  i do write stuff in medium. i don't know why
                </h3>
                </a>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiFramer className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  How to easily creat React <br /> animations: Framer Motion
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiCss3 className="text-lg" />
                </div>
                <h3 className="text-xs ">TailwindCSS tips</h3>
              </div>

              <div className="border border-neutral-700 my-5" />

              <div className="flex items-center justify-center gap-x-2">
                <TestimonialTooltip />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
