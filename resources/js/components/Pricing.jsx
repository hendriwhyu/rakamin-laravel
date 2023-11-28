import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import ButtonPrimary from "@/components/misc/ButtonPrimary";
import ButtonOutline from "@/components/misc/ButtonOutline.";
// import Maps from "../public/assets/HugeGlobal.svg";
import { FaEnvelope, FaFolder, FaMicrochip, FaServer, FaShieldHalved } from "react-icons/fa6";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/Layout/ScrollAnimationWrapper";

const Pricing = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="pricing"
        >
            <div className="max-w-screen-xl  px-4 sm:px-6 lg:px-10 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                        >
                            Choose Your Plan
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                        >
                            Let's choose the package that is best for you and
                            explore it happily and cheerfully.
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-12 lg:gap-16 py-8 lg:py-12 px-6 sm:px-4 lg:px-10">
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-10 xl:px-16"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                            >
                                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                                    <img
                                        src="/assets/Free.png"
                                        width={145}
                                        height={165}
                                        alt="Free Plan"
                                    />
                                </div>
                                <p className="text-md text-black-600 font-medium capitalize mt-2 sm:mt-5">
                                    Cloud Hosting
                                </p>
                                <span className="text-lg font-bold capitalize mb-2 sm:mb-5">
                                    {" "}
                                    Lite Starter{" "}
                                </span>
                                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                    <li className="relative custom-list my-2">
                                        <FaFolder className="relative -left-8 top-5" />
                                        <span>Disk 5 GB</span>
                                    </li>
                                    <li className="relative custom-list my-2 ">
                                        <FaServer className="relative -left-8 top-8" />
                                        <span>Unlimited Bandwitch</span>
                                    </li>
                                    <li className="relative custom-list my-2">
                                        <FaMicrochip className="relative -left-8 top-5" />
                                        <span>CPU 0.5 Core</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                                    <span className="line-through text-sm text-left mb-1">
                                        Rp 28.000
                                    </span>
                                    <p className="text-xl text-black-600 font-bold text-left mb-4 ">
                                        Rp 25.000
                                    </p>
                                    <ButtonOutline>Select</ButtonOutline>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                            >
                                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                                    <img
                                        src="/assets/Standard.png"
                                        width={145}
                                        height={165}
                                        alt="Standard Plan"
                                    />
                                </div>
                                <p className="text-md   text-clip text-black-600 font-medium capitalize mt-2 sm:mt-5">
                                    Unlimited Hosting
                                </p>
                                <span className="text-lg font-bold capitalize mb-2 sm:mb-5">
                                    {" "}
                                    Signature{" "}
                                </span>
                                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                    <li className="relative custom-list my-2">
                                        <FaFolder className="relative -left-8 top-5" />
                                        <span>Disk Unlimited</span>
                                    </li>
                                    <li className="relative custom-list my-2 ">
                                        <FaServer className="relative -left-8 top-8" />
                                        <span>Unlimited Bandwitch</span>
                                    </li>
                                    <li className="relative custom-list my-2">
                                        <FaMicrochip className="relative -left-8 top-5" />
                                        <span>CPU 1 Core</span>
                                    </li>
                                    <li className="relative custom-list my-2">
                                        <FaShieldHalved className="relative -left-8 top-5" />
                                        <span>SSL</span>
                                    </li>
                                    <li className="relative custom-list my-2">
                                        <FaEnvelope className="relative -left-8 top-5" />
                                        <span>50 Email / Hour</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-6">
                                    <p className="text-2xl text-black-600 text-center mb-4 ">
                                        $9{" "}
                                        <span className="text-black-500">
                                            / mo
                                        </span>
                                    </p>
                                    <ButtonOutline>Select</ButtonOutline>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                            >
                                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                                    <img
                                        src="/assets/Premium.png"
                                        width={145}
                                        height={165}
                                        alt="Premium Plan"
                                    />
                                </div>
                                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                                    Premium Plan{" "}
                                </p>
                                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                    <li className="relative check custom-list my-2">
                                        Unlimited Bandwitch
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Encrypted Connection
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        No Traffic Logs
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Works on All Devices
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Connect Anyware{" "}
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Get New Features{" "}
                                    </li>
                                </ul>
                                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                                    <p className="text-2xl text-black-600 text-center mb-4 ">
                                        $12{" "}
                                        <span className="text-black-500">
                                            / mo
                                        </span>
                                    </p>

                                    <ButtonOutline>Select</ButtonOutline>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                            >
                                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                                    <img
                                        src="/assets/Premium.png"
                                        width={145}
                                        height={165}
                                        alt="Premium Plan"
                                    />
                                </div>
                                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                                    Premium Plan{" "}
                                </p>
                                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                    <li className="relative check custom-list my-2">
                                        Unlimited Bandwitch
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Encrypted Connection
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        No Traffic Logs
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Works on All Devices
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Connect Anyware{" "}
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Get New Features{" "}
                                    </li>
                                </ul>
                                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                                    <p className="text-2xl text-black-600 text-center mb-4 ">
                                        $12{" "}
                                        <span className="text-black-500">
                                            / mo
                                        </span>
                                    </p>

                                    <ButtonOutline>Select</ButtonOutline>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
                </div>
                <div className="flex flex-col w-full my-16">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
                        >
                            Huge Global Network of Fast VPN{" "}
                        </motion.h3>
                        <motion.p
                            className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
                            variants={scrollAnimation}
                        >
                            See LaslesVPN everywhere to make it easier for you
                            when you move locations.
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="py-12 w-full px-8 mt-16"
                            variants={scrollAnimation}
                        >
                            {/* <Maps className="w-full h-auto" /> */}
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            {/* <Netflix className="h-18 w-auto" /> */}
                            <img
                                src="/assets/Icon/amazon.png"
                                className="h-14 w-auto mt-4 lg:mt-2"
                                alt=""
                            />
                            <img
                                src="/assets/Icon/netflix.png"
                                className="h-14 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                            <img
                                src="/assets/Icon/reddit.png"
                                className="h-12 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                            <img
                                src="/assets/Icon/discord.png"
                                className="h-14 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                            <img
                                src="/assets/Icon/spotify.png"
                                className="h-12 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
                <div className="flex flex-col w-full my-16" id="testimoni">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
                        >
                            Trusted by Thousands of Happy Customer{" "}
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                        >
                            These are the stories of our customers who have
                            joined us with great pleasure when using this crazy
                            feature.
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                        <motion.div variants={scrollAnimation}>
                            <Testimoni />
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper className="relative w-full mt-16">
                        <motion.div
                            variants={scrollAnimation}
                            custom={{ duration: 3 }}
                        >
                            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                        Subscribe Now for <br /> Get Special
                                        Features!
                                    </h5>
                                    <p>
                                        Let's subscribe with us and find the
                                        fun.
                                    </p>
                                </div>
                                <ButtonPrimary>Get Started</ButtonPrimary>
                            </div>
                            <div
                                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                                style={{ filter: "blur(114px)" }}
                            ></div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
