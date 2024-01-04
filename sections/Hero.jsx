"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion"
import Image from "next/image";

const Hero = () => {
    return (
        <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} flex flex-col mx-auto`}>
                <div className="flex justify-center items-center flex-col relative z-10">
                    <motion.h1 variants={textVariant(1, 1)} className={styles.heroHeading}>
                        Metaverse
                    </motion.h1>
                    <motion.div variants={textVariant(1.2)} className="flex items-center">
                        <h1 className={styles.heroHeading}>Ma</h1>
                        <div className={styles.heroDText}></div>
                        <h1 className={styles.heroHeading}>ness</h1>
                    </motion.div>
                </div>

                <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="relative w-full md:-mt-5 -mt-3">
                    <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-8"/>
                        <Image className="w-full h-[300px] sm:h-[500px] object-cover rounded-tl-[140px] z-10 relative" src="/cover.png" alt="" width={1000} height={500}/>

                        <a href="#explore">
                            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                                <Image className="w-24 sm:w-40 h-24 sm:h-40 object-cover rounded-full border-4 border-[#6a6a6a]" src="/stamp.png" alt="stamp" width={300} height={300}/>
                            </div>
                        </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
export default Hero;
