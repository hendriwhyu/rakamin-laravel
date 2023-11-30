import React, { useMemo } from "react";
import AccordionItem from "@/components/misc/AccordionItem";
import ButtonPrimary from "@/components/misc/ButtonPrimary";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/components/Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";

const Accordion = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="accordion"
        >
            <div className="max-w-screen-xl  px-4 sm:px-6 lg:px-10 mx-auto flex flex-col w-full text-center justify-center">
                <ScrollAnimationWrapper className="flex flex-wrap">
                    <motion.div
                        variants={scrollAnimation}
                        custom={{ duration: 3 }}
                        className="w-full px-4"
                    >
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                Pertanyaan seputar{" "}
                                <span className="text-[#FF6D0B]">
                                    Layanan Web Hosting
                                </span>{" "}
                                Qwords
                            </h2>
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper className="flex flex-wrap">
                    <motion.div
                        variants={scrollAnimation}
                        custom={{ duration: 3 }}
                        className="w-full px-4 lg:w-1/2"
                    >
                        <AccordionItem
                            header="Apa itu web hosting?"
                            text="Hosting adalah tempat penyimpanan file dan data website seperti teks, video dan gambar website. File dan data tersebut di simpan di dalam server yang terkoneksi dengan internet sehingga data tersebut dapat diakses oleh siapa saja, kapan saja dan di mana saja."
                        />
                        <AccordionItem
                            header="Apa kelebihan dari Qwords?"
                            text="Cloud hosting Qwords sudah dipercaya 45,000+ pelanggan dari dalam dan luar negeri. Anda akan mendapatkan jaminan keamanan, Uptime 99.99%, dukungan teknis selama 24 jam, 7 hari melalui Live chat, Call Center, atau Support Ticket dan masih banyak lagi"
                        />
                        <AccordionItem
                            header="Bagaimana cara membeli hosting?"
                            text="Kami memiliki panduan cara membeli hosting di Qwords sesuai kebutuhan. Beli hosting Indonesia di Qwords kini juga semakin mudah dengan adanya berbagai metode pembayaran."
                        />
                    </motion.div>
                    <motion.div
                        variants={scrollAnimation}
                        custom={{ duration: 3 }}
                        className="w-full px-4 lg:w-1/2"
                    >
                        <AccordionItem
                            header="Ada berapa jenis hosting di Qwords?"
                            text="Value Performance, High Performance Cloud Hosting Bisnis, High Performance Cloud Hosting Enterprise, WordPress Hosting, Unlimited Hosting."
                        />
                        <AccordionItem
                            header="Mengapa saya perlu web hosting?"
                            text="Tanpa web hosting, Anda tidak bisa membuat website company profile, portal berita, blog pribadi, website toko online, atau jenis website lain yang bisa diakses secara online. Penyedia layanan web hosting seperti Qwords.com membantu memastikan data-data dan file website Anda tetap aman serta responsif ketika diakses oleh pengguna secara online."
                        />
                        <AccordionItem
                            header="Apa saya bisa transfer Hosting ke Qwords?"
                            text="Ya, Anda bisa melakukan transfer Hosting dari provider lain ke Qwords Cloud Hosting Indonesia. Caranya, silahkan lakukan pemesanan Cloud Hosting baru sesuai paket yang Anda inginkan, kemudian informasikan kebutuhan migrasi pada tim support kami, lalu proses migrasi akan dibantu hingga selesai."
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                {/* <ScrollAnimationWrapper className="relative w-full mt-8">
                    <motion.div
                        variants={scrollAnimation}
                        custom={{ duration: 3 }}
                    >
                        <div className="absolute rounded-xl py-6 sm:py-10 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                    Subscribe Now for <br /> Get Special
                                    Features!
                                </h5>
                                <p>Let's subscribe with us and find the fun.</p>
                            </div>
                            <ButtonPrimary>Get Started</ButtonPrimary>
                        </div>
                        <div
                            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                            style={{ filter: "blur(114px)" }}
                        ></div>
                    </motion.div>
                </ScrollAnimationWrapper> */}
            </div>
        </div>
    );
};

export default Accordion;
