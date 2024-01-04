"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Navbar = () => (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
        <div className="absolute w-[50%] inset-0 gradient-01"></div>
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
            <Image width={40} height={40} className="w-6 h-6 object-contain" src="/search.svg" alt="search" />
            <h1 className="font-extrabold text-2xl leading-8 text-white uppercase">metaversus</h1>
            <Image width={40} height={40} className="w-6 h-6 object-contain" src="/menu.svg" alt="menu" />
        </div>
    </motion.nav>
);

export default Navbar;
