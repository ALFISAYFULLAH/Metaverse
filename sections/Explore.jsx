"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Explore = () => {
    const [active, setActive] = useState("world-2");

    return (
        <section id="explore" className={styles.paddings}>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <TypingText title={"| The World"} textStyles="text-center" />
                <TitleText
                    title={
                        <>
                            Choose the world you want <br className="md:block hidden" /> to explore
                        </>
                    }
                    textStyles="text-center"
                />

                <div className="mt-[50px] flex flex-col lg:flex-row gap-5">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            id={world.id}
                            title={world.title}
                            index={index}
                            active={active}
                            handleClick={setActive}
                            imageUrl={world.imgUrl} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;
