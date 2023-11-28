import React from "react";
import { Feature } from "@/components/Feature";
import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";
import Feedback from "@/components/Feedback";
import Accordion from "@/components/Accordion";

export default function Home() {
    return (
        <>
            <SeoHead title="Qwords.com: Cloud Web Hosting" />
            <Layout>
                <Hero />
                <Feature />
                <Pricing />
                <Feedback />
                <Accordion/>
            </Layout>
        </>
    );
}
