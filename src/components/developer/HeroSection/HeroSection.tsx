import CustomButton from "@/components/common/CustomButton";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Button, Typography } from "@mui/material";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import LoadingAnimation from "@/utils/hooks/loadAnimation";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Header = ({mobile}: {mobile: boolean}): ReactJSXElement => (
    <>
        <motion.div className="dev-header"> 
            <LoadingAnimation y={10} duration={1} delay={mobile ? 2 : 3}>
                <div>
                    <Typography variant='h6'>
                        Shivam Kumar
                        <sup className='typography-sup'>TM</sup>
                    </Typography>
                </div>
            </LoadingAnimation>
            {!mobile && 
                <>
                    <LoadingAnimation y={10} duration={1} delay={2.5}>
                        <div>   
                            <Typography variant='body2'> WEB/APP <br/> DEVELOPER</Typography>
                        </div>
                    </LoadingAnimation>
                    <LoadingAnimation y={10} duration={1} delay={2}>
                        <div>
                            <Typography variant='body2'> AVAIALABLE FOR FREELANCE <br/> PROJECTS NOW</Typography>
                        </div>
                    </LoadingAnimation>
                </>
            }
            <LoadingAnimation y={10} duration={1} delay={1.5} style={{width: mobile ? "33%" : "12%"}}>
                <CustomButton variant='outlined' className='brand-btn'>LET&apos;S TALK</CustomButton>
            </LoadingAnimation>
        </motion.div>
    </>
);
const Summary = (): ReactJSXElement => (
    <>
        <motion.div className="dev-summary">
            <LoadingAnimation y={10} duration={1} delay={1.5}>
                <Typography variant='h5'>Full Stack Developer and a Very Curious Human Being</Typography>
            </LoadingAnimation>
            <LoadingAnimation y={10} duration={1} delay={1}>
                <Typography variant='body1'>
                    With 3 Years of extensive industry experience. I also bring curiosity and passion to the table. Passionate about building highly perfomant elegant Software products and curious to see how far I can take my creative abilities.
                </Typography>
            </LoadingAnimation>
            <LoadingAnimation y={10} duration={0.5} delay={0.5}>
                <CustomButton variant='outlined' className='brand-btn'>SCROLL TO DISCOVER <UnfoldMoreIcon/> </CustomButton>
            </LoadingAnimation>
        </motion.div>
    </>
);
const Footer = ({mobile}: {mobile: boolean}): ReactJSXElement => (
    <>
        <LoadingAnimation y={0} duration={0} delay={1.5}>
            <motion.div className="dev-footer">
                <div className='socials'>
                    <Typography variant='body2'>
                        {mobile ? <GitHubIcon/> : "GitHub"}
                    </Typography>
                    <Typography variant='body2'>
                        {mobile ? <LinkedInIcon/> : "LinkedIn"}
                    </Typography>
                    <Typography variant='body2'>
                        {mobile ? <InstagramIcon/> : "Instagram"}
                    </Typography>
                </div>
                <div>
                    <Typography variant='body2'> ManOrInfinity</Typography>
                </div>
                <div>
                    <Typography variant='body2'> © 2023</Typography>
                </div>
            </motion.div>
        </LoadingAnimation>
    </>
);

const HeroSection = (): ReactJSXElement => {
    const mobile = useSelector((state:RootState) => state.mediaQuery.mobile);
    return (
        <motion.div className="hero-container">
            <Header mobile={mobile}/>
            <Summary/>
            <Footer mobile={mobile}/>
        </motion.div>
    )
}
export default HeroSection;