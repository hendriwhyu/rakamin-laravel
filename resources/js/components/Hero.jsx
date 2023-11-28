import React, { useMemo } from "react";
import ButtonPrimary from "@/components/misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/Layout/ScrollAnimationWrapper";
import Domain from "@/components/Layout/Domain";

const Hero = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <>
            <div
                className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
                id="about"
            >
                <ScrollAnimationWrapper>
                    <motion.div
                        className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                        variants={scrollAnimation}
                    >
                        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                                Cloud Hosting untuk Websitemu{" "}
                                <strong>Qwords</strong>.
                            </h1>
                            <p className="text-black-500 mt-4 mb-6">
                                Qwords menawarkan layanan Cloud Hosting Akses
                                Cepat, Standar Keamanan Tinggi, Uptime Server
                                99,99%, Fitur Lengkap dan Dukungan Pelanggan 24
                                jam untuk memenuhi kebutuhan website Anda.
                            </p>
                            <ButtonPrimary>Get Started</ButtonPrimary>
                        </div>
                        <div className="flex w-full">
                            <motion.div
                                className="h-full w-full"
                                variants={scrollAnimation}
                            >
                                <img
                                    src="/assets/Illustration4.webp"
                                    alt="VPN Illustrasi"
                                    quality={100}
                                    width={612}
                                    height={383}
                                    layout="responsive"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
            <Domain />
        </>
    );
};

export default Hero;
