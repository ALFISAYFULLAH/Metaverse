"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import styles from "../styles";
import Image from "next/image";

const ExploreCard = ({ id, imageUrl, title, index, active, handleClick }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.5)}
        onClick={() => handleClick(id)}
        className={`relative ${active === id ? 'h-80 lg:flex-[4.5]': 'h-40 lg:flex-[2]'} lg:min-h-[70vh] transition-all duration-700 `}
    >
        <Image className="w-full h-full object-cover rounded-3xl" src={imageUrl} alt={title}  width={1000} height={500}/>

        {active !== id ? (
            <motion.h3  className="absolute bottom-4 left-4 lg:bottom-20 lg:left-20 text-xl sm:text-3xl font-semibold text-white lg:-rotate-90 origin-[0.0]">
                {title}
            </motion.h3>
        ) : (
            <motion.div variants={fadeIn("up", "spring", 0, 1)} initial="hidden" whileInView="show" className="absolute bottom-0 p-10 z-10 w-full flex flex-col bg-[rgba(0,0,0,0.5)] rounded-3xl">
                <div className={`${styles.flexCenter} w-16 h-16 glassmorphism rounded-full mb-2`}>
                    <Image className="w-1/2 h-1/2 object-contain" src="/headset.svg" alt="headset" width={1000} height={500}/>
                </div>
                <p className="font-normal text-white text-5">Enter the Metaverse</p>
                <p className="mt-6 font-bold text-xl lg:text-3xl text-white">{title}</p>
            </motion.div>
        )}
    </motion.div>
);

export default ExploreCard;
