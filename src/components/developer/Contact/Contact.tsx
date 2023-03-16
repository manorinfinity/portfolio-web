import CustomButton from "@/components/common/CustomButton";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Typography } from "@mui/material";
import {motion} from 'framer-motion'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Contact = (): ReactJSXElement => {
    return (
        <motion.div className="contact-container">
            <motion.div className="main">
                <CustomButton variant='outlined'>HAVE A PROJECT IN MIND?</CustomButton>
                <Typography variant='h1'>LET&apos;S TALK <SentimentSatisfiedAltIcon fontSize="large"/></Typography>
            </motion.div>
            <motion.div className="footer-menu">
                <motion.div className="footer-item">
                    <Typography variant='body2'>DEVELOPED BY:</Typography>
                    <Typography variant='body1'>SHIVAM KUMAR</Typography>
                </motion.div>
                <motion.div className="footer-item">
                    <Typography variant='body2'>DESIGNED BY:</Typography>
                    <Typography variant='body1'>SHIVAM KUMAR</Typography>
                </motion.div>
                <motion.div className="footer-item">
                    <Typography variant='body2'>SOCIALS:</Typography>
                    <div className='socials'>
                        <Typography variant='body2'>
                            GITHUB
                        </Typography>
                        <Typography variant='body2'>
                            LINKEDIN
                        </Typography>
                        <Typography variant='body2'>
                            INSTAGRAM
                        </Typography>
                    </div>
                </motion.div>
                <div>
                    <Typography variant='body1'> ManOrInfinity</Typography>
                </div>
                <div>
                    <Typography variant='body1'> © 2023</Typography>
                </div>
            </motion.div>
        </motion.div>
    )
}
export default Contact;