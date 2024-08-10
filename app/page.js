"use client";
import Navbar from "./_components/Navbar.jsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full mt-6 md:mt-8">
            <Link href="https://github.com/harshaltupe12" target="_blank">
              <h2 className="bg-gray-200 px-10 py-2 rounded-2xl md:mt-0  mb-5 md:mb-2 cursor-pointer hover:bg-gray-300 transition-all flex justify-center items-center gap-3">
                Follow us on Github
                <ArrowRight />
              </h2>
            </Link>
            <h2 className="md:text-6xl text-3xl text-center font-bold sm:text-center my-2 md:my-2">
              Drag And Drop Your Task
            </h2>
            <h2 className="text-xl md:text-2xl text-gray-600 my-2 md:my-2">
              Not-Completed, In-Progress, Completed
            </h2>
            <div className="flex flex-row gap-5 my-2">
              <Link href={"/dashboard"}>
                <button className="flex gap-2 w-full bg-blue-600 text-white p-3 rounded-lg">
                  Get Started
                  <ArrowRight />
                </button>
              </Link>
            </div>

            <div className="my-5">
              <h2 className="text-gray-600">Created with ❤️ by Harshal Tupe</h2>
            </div>
          </div>
          {/* How its work section */}
          <h2 className="md:text-4xl text-3xl text-center font-bold sm:text-center my-2 md:my-2 ">
            Why it created?
          </h2>
          <p className="text-center text-gray-600 sm:text-center my-2 md:my-2">
            This is an internship task assigned by LIQUID NEURONS PRIVATE LIMITED 
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-5 md:mt-10 gap-5 px-5 md:px-16 mb-10">
            <div className="border rounded-xl p-4">
              <h2 className="text-xl font-bold text-black">
                Lorem, ipsum dolor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium vitae ullam officiis.
              </p>
            </div>
            <div className="border rounded-xl p-4">
              <h2 className="text-xl font-bold text-black">
              Lorem, ipsum dolor.{" "}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                voluptas sunt iure.
              </p>
            </div>
            <div className="border rounded-xl p-4">
              <h2 className="text-xl font-bold text-black">
              Lorem, ipsum dolor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, veniam? Fugiat, adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
