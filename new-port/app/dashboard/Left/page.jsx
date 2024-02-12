"use client";
import React from "react";
import {
  PiBookOpenTextLight,
  PiShapesThin,
  PiHouseLight,
} from "react-icons/pi";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Leftpage() {
  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className=" hidden md:block bg-[#1C1C1C] w-full md:w-80  h-fit sticky top-5 "
      >
        <div className=" md:w-80 w-full p-3 border border-neutral-800   rounded-2xl h-full bg-[#1C1C1C]  ">
          <div className="flex">
            <div className="w-full relative">
              <Image
                width={1000}
                height={1000}
                className="w-28 h-28 rounded-full object-cover"
                src="https://i.pinimg.com/564x/e3/6a/1f/e36a1f35a9145296b3d439d16408b39c.jpg"
                alt="current pfp because this is what i like"
              />
              <h1 className="text-xl  text-neutral-300 mt-3">
                archangel
              </h1>
              <Link href={"https://bitly.ws/3cYbk"}>
              <p className="text-xs text-neutral-300 mt-1">
                hello...
              </p>
              </Link>

              <div className="flex w-full   ">
                <div className="flex gap-x-1  text-xs my-4">
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    bored
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    awkward
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    troller
                  </p>
                  <p className=" bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0 ">
                    memer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-x-1 w-full h-fit">
              <Link href={"/"}>
                <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                  <PiHouseLight className="text-neutral-100" />
                </div>
              </Link>

              <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                <PiBookOpenTextLight className="text-neutral-100" />
              </div>
            </div>
          </div>

          <div className="w-full mt-5 text-neutral-300">
            <h2 className="my-4">about me...</h2>
            <p className="text-[12px] my-3">
            I'm just a typical college student who wants to build something outside of my discipline field{" "}
            </p>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-RubikRegular">
                  currently still in college
                </span>
              </div>
            </div>

            <div className="border border-[#282828] text-neutral-300 my-6" />             
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Leftpage;