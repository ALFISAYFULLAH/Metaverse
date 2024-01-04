'use client';

import styles from "../styles";

const Footer = () => (
    <footer className={`${styles.paddings}`}>
        <div className="h-[1px] w-full bg-white"></div>
        <div className={`flex flex-col lg:flex-row gap-8 justify-between lg:items-center text-white pt-8`}>
            <h1>Metaversus</h1>
            <p>Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
            <div className="flex gap-4">
                <img src="/linkedin.svg" alt="linkedin" />
                <img src="/twitter.svg" alt="twitter" />
                <img src="/instagram.svg" alt="instagram" />
                <img src="/facebook.svg" alt="facebook" />
            </div>
        </div>
    </footer>
);

export default Footer;
