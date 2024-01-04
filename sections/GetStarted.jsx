"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components"
import styles from "../styles";
import { stagger } from "framer-motion";
import { planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants"
import Image from "next/image";

const GetStarted = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-x-8 overflow-hidden`}>
            <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
                <Image src="/get-started.png" alt="get-started" className="w-[90%] lg:w-full h-auto object-contain animate-bounce-custom" width={1000} height={1000}/>
            </motion.div>
            <motion.div className="flex-1">
                <TypingText title="How Metaverus Works" textStyles={"mb-8"} />
                <h1 className="text-white font-bold text-5xl lg:text-7xl mb-4">Get started with just a few clicks</h1>
                {startingFeatures.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mb-2">
                        <div className="w-[70px] h-[70px] bg-white bg-opacity-10 flex justify-center items-center text-white rounded-3xl backdrop-blur-[48px]">{`0${index}`}</div>
                        <p className="text-secondary-white w-72">{item}</p>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    </section>
);

export default GetStarted;
