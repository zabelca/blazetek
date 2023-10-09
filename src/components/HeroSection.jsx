"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import ResumeOverlay from './ResumeOverlay';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {

    const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Hello, I'm{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Chris Zabel',
                            1000,
                            'a Software Developer',
                            1000,
                            'a Network Engineer',
                            1000,
                            'a Web Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                    Hello, I am an IT professional with a background in software development and cybersecurity.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                        Hire me
                    </button>
                    {!resumeOpen ? (
                        <button  onClick={() => setResumeOpen(true)} className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    ) : (
                        <button onClick={() => setResumeOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )}
                    {resumeOpen ? <ResumeOverlay />: null}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] h-[250px] w-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/yeti.png"
                        alt="yeti"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        height={300}
                        width={300}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default HeroSection