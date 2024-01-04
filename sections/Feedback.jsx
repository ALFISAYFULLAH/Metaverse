"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { stagger } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const Feedback = () => (
    <section className={`${styles.paddings} relative z-10 overflow-hidden`}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} flex flex-col lg:flex-row justify-center items-center gap-8`}>
            <motion.div initial='hidden' whileInView={'show'} variants={slideIn("left", "tween", 0.2, 1)} className="w-full md:flex-[5] lg:flex-[3] h-[500px] rounded-[32px] border border-neutral-500 flex flex-col justify-end gap-4 text-white p-8">
                <h1 className="text-2xl lg:text-4xl font-semibold">Samantha</h1>
                <TypingText title="Founder Metaverus" />
                <p className="text-xl font-thin leading-10 md:pb-8 lg:pb-0">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
            </motion.div>
            <div className="absolute z-20 w-40 h-40 lg:left-[320px] md:top-80 lg:top-36">
                <img src="/stamp.png" alt="" />
            </div>
            <motion.div initial='hidden' whileInView={'show'} variants={slideIn("right", "tween", 0.2, 1)} className="h-[500px] lg:flex-[9]">
                <img className="w-full h-full rounded-[32px] object-cover" src="/planet-09.png" />
            </motion.div>
        </motion.div>
    </section>
);

export default Feedback;
