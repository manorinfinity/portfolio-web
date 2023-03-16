import LoadingAnimation from "@/utils/hooks/loadAnimation";
import { Typography } from "@mui/material";
import {motion} from 'framer-motion';
import { useState } from "react";
const Loader = () => {
    return (
        <motion.div className='loader-container'>
            <LoadingAnimation y={100} duration={1.5} delay={0}>
                <Typography 
                    variant="h4"
                >
                    ManOrInfinity
                </Typography>
            </LoadingAnimation>
        </motion.div>
    )
}
export default Loader;