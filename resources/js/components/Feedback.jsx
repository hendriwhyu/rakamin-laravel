import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/Layout/ScrollAnimationWrapper";
import Testimoni from "@/components/Layout/Testimoni";
import ButtonPrimary from "@/components/misc/ButtonPrimary";
export default function Feedback() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
            <div className="max-w-screen-xl  px-4 sm:px-6 lg:px-10 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full my-16" id="feedback">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
                        >
                            Apa Kata Mereka?
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                        >
                            Apa kata mereka yang sudah menggunakan layanan web
                            hosting Indonesia dari Qwords? Simak pengalaman
                            mereka yang telah membuktikan sendiri fitur dari
                            layanan kami.
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                        <motion.div variants={scrollAnimation}>
                            <Testimoni />
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
}
