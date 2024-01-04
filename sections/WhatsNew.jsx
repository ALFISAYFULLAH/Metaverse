"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { stagger } from "framer-motion";
import { planetVariants } from "../utils/motion";
import { newFeatures } from "../constants";

const WhatsNew = () => (
    <section className={`${styles.paddings} relative z-10 overflow-hidden`}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row-reverse gap-8 overflow-hidden`}>
            <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
                <img src="/whats-new.png" alt="whats-new" className="w-[90%] lg:w-full h-auto object-contain animate-bounce-custom" />
            </motion.div>
            <motion.div className="flex-1">
                <TypingText title="Whats New?" textStyles={"mb-8"} />
                <h1 className="text-white font-bold text-5xl lg:text-7xl mb-4">What's new about Metaversus?</h1>
                <div className="flex mt-16 flex-col md:flex-row gap-y-8">
                    {newFeatures.map((item, index) => (
                        <div key={index} className="text-white flex flex-col gap-4">
                            <div className="w-[70px] h-[70px] bg-white bg-opacity-10 flex justify-center items-center text-white rounded-3xl backdrop-blur-[48px]">
                                <img src={item.imgUrl} alt="" />
                            </div>
                            <h1>{item.title}</h1>
                            <p className="text-secondary-white w-72">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default WhatsNew;
