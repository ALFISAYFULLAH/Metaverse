"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const World = () => (
    <motion.section variants={staggerContainer} className={`${styles.paddings} relative z-10 overflow-hidden`}>
        <TypingText title="halo guys apa kabar?" textStyles={'text-center'}/>
        <TitleText title="Track friends around you and invite them to play together in the same world" textStyles={"text-center"} />
        <div className="bg-map bg-cover w-full mt-16">
            <img src="/map.png" alt="" />
        </div>
    </motion.section>
);

export default World;
