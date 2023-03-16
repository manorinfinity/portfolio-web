import { Typography } from "@mui/material";
import Image from "next/image";
import {motion, useScroll, useTransform} from 'framer-motion';

const Home = () => {
    const {scrollY} = useScroll();
    const y = useTransform(
        scrollY,
        [0,50],
        [1,2],
    )
    const opacity = useTransform(
        scrollY,
        [0,50],
        [1,0],
    )
    const y2 = useTransform(
        scrollY,
        [0,100],
        [10,1],
    )
    const opacity2 = useTransform(
        scrollY,
        [0,100],
        [0,1],
    )
    console.log(y);
    // We need parallax here. On Scroll the h1 should scale and fade to opacity zero. and three boxes should zoom in or slide with opacity slowly increasing. Keeping the background intact
    return(
        <>
            <motion.div className="hero-container" style={{opacity: opacity}}>
                <Image
                src="/images/home/header1.jpg"
                alt="ManOrInfinity Header"
                fill
                priority
                />
                <motion.div style={{scale: y, opacity: opacity}}>
                    <Typography variant="h1">A Delusional Man</Typography>
                </motion.div>
            </motion.div>
            <motion.div className="menu-container" style={{opacity: opacity2}}>
                <motion.div style={{scale: y2, opacity: opacity2}}>
                    <Typography variant="h1">The Menu</Typography>
                </motion.div>
                <motion.div className="menu-item" style={{scale: y2, opacity: opacity2}}></motion.div>
                <motion.div className="menu-item" style={{scale: y2, opacity: opacity2}}></motion.div>
                <motion.div className="menu-item" style={{scale: y2, opacity: opacity2}}></motion.div>
            </motion.div>
        </>
    )
}
export default Home;