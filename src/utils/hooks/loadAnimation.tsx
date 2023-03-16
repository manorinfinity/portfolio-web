import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {motion} from 'framer-motion';
import { useState } from "react";

interface PropTypes {
    children: ReactJSXElement,
    y: number,
    duration: number,
    delay: number,
    style?: object,
}
const LoadingAnimation = (props: PropTypes) : ReactJSXElement => {
    const [animate, setAnimate] = useState(true);
    return (
            <motion.div
                style={props.style ?? {}}
                animate={animate ? {
                    y : 0,
                    opacity: 1
                }: {}}
                initial={{
                    y: props.y ?? 100,
                    opacity: 0,
                }}
                transition={{
                    type: "spring",
                    // stiffness: 50,
                    // damping: 3,
                    // mass: 10,
                    bounce: 0.5,
                    delay: props.delay,
                    duration: props.duration ?? 1.5
                }}
            >
            {props.children}
            </motion.div>
    )
}
export default LoadingAnimation;