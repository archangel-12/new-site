"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      className="text-neutral-50 "
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-5 ">
        <div className=" ">
          <div className="-mt-6   ">
            <div className="bg-neutral-700/25 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-7 ">
              <Link href={"/dashboard"}>
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <button className="text-xs bg-neutral-700/25 p-1 w-16 h-6 rounded-md">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-9 w-full p-5 border border-neutral-700   rounded-2xl h-full bg-[#1C1C1C] ">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-RubikExtraBold text-center "
        >
          introduction
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
          bit of introduction
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Feb 2th 24</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-56 w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1080/1*qCItaG8NMgORwpMFe_UDow.gif"
            alt="oh hey"
          />

          <p className="my-7">
          oh, what you lookin at? something? you better don't
          </p>

          <p>
          actually, don't. you're just wasting your time in here. go experience life, go do something. okay?
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
