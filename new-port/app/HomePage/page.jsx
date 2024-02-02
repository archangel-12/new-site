"use client";
import Link from "next/link";
import React from "react";
import { PiSmiley } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function Homepage() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit "
    >
      <div className="bg-[#1C1C1C] lg:bg-transparent rounded-2xl">
        <div>
          <div className="flex gap-x-6 p-4">
            <PiSmiley className="text-6xl text-neutral-50" />
            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                welcome,{" "}
                <span className="text-sm text-neutral-400">to my shitty site.</span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                seriously, what you lookin at? go do something bruh<br />{" "}
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link href={"/dashboard/djdj"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-24 h-24 object-cover rounded-md"
                    src="https://miro.medium.com/v2/resize:fit:1080/1*qCItaG8NMgORwpMFe_UDow.gif"
                    alt="he's so me..."
                  />
                  <div>
                    <span className="text-sm">Feb 2th 24</span>
                    <h2 className="text-sm font-RubikMedium">
                      introduction
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;