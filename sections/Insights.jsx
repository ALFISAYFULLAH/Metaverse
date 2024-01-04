"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { stagger } from "framer-motion";
import { insights } from "../constants";
import { fadeIn, slideIn } from "../utils/motion";
import Image from "next/image";

const Insights = () => (
    <section className={`${styles.paddings} relative z-10 overflow-hidden`}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div>
                <TypingText title="Insight" textStyles={"text-center"} />
                <TypingText title="Insight about metaverse" textStyles={"text-white font-extrabold text-center text-5xl lg:text-7xl mb-4"} />
            </div>

            <div className="flex flex-col gap-y-16">
                {insights.map((item, index) => (
                    <motion.div key={index} className="flex flex-col md:flex-row gap-8 items-center justify-between flex-wrap">
                        <motion.div variants={fadeIn("", "spring", 0, 3)} initial="hidden" whileInView="show" className="w-full h-56 md:h-96 lg:w-40 lg:h-40">
                            <Image width={1000} height={1000} className="object-cover w-full h-full rounded-[20%] shadow-lg shadow-white" src={item.imgUrl} alt="" />
                        </motion.div>
                        <div className="lg:w-[60%]">
                            <h1 className="text-white text-4xl">{item.title}</h1>
                            <p className="text-secondary-white">{item.subtitle}</p>
                        </div>
                        <div className="rounded-full border w-20 h-20 flex items-center justify-center transition-all duration-700 hover:bg-slate-600">
                            <Image className="w-10 h-10" width={100} height={100} src="/arrow.svg" alt="" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
);

export default Insights;
