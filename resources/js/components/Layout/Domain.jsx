import React, { useMemo } from "react";
import Button from "@/components/misc/Button";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/Layout/ScrollAnimationWrapper";

export default function Domain() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <ScrollAnimationWrapper
            className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 bg-[#ff6d0b]"
            style={{
                backgroundImage: "url('/assets/search-domain-bg.png')",
            }}
        >
            <motion.div
                className="mx-auto max-w-7xl px-6 lg:px-8"
                custom={{ duration: 2 }}
                variants={scrollAnimation}
            >
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:place-items-center">
                    <div className="max-w-5xl flex items-center flex-col">
                        <h2 className="text-3xl font-bold tracking-tight text-white-500 sm:text-4xl">
                            Cari Nama Domainmu
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300 text-center">
                            Nama Domain digunakan untuk mempermudah pengunjung
                            menuju ke situs Anda. Pilih nama domain dengan
                            ekstensi domain yang paling mencerminkan bisnis,
                            produk, atau layanan Anda.
                        </p>
                        <div className="mt-6 flex w-full gap-x-4">
                            <label htmlFor="domain" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="domain"
                                name="domain"
                                type="text"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                placeholder="Cari nama domainmu"
                            />
                            <Button className="bg-black-600 text-white-500 hover:bg-black-500">
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </ScrollAnimationWrapper>
    );
}
