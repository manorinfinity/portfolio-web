import DarkCustomButton from "@/components/common/DarkCustomButton";
import DarkTypography from "@/components/common/DarkTypography";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {motion} from 'framer-motion';

const Exp = (): ReactJSXElement => {
    return (
        <>
            <hr className="exp-bar"/>
            <motion.div className="exp-container">
                    <DarkCustomButton variant="outlined">Experience</DarkCustomButton>
                    <DarkCustomButton variant="outlined">Education</DarkCustomButton>
                <motion.div className="exp-item-container">
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>2022-Present</DarkTypography>
                        <DarkTypography variant="body1">Full Stack Developer</DarkTypography>
                        <DarkTypography variant="body1">Nagarro Pvt Ltd</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>Nov 2021 - Feb 2022</DarkTypography>
                        <DarkTypography variant="body1">Full Stack Developer</DarkTypography>
                        <DarkTypography variant="body1">ZolutionTech</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>Apr 2021 - Dec 2021</DarkTypography>
                        <DarkTypography variant="body1">Full Stack Developer</DarkTypography>
                        <DarkTypography variant="body1">Techchefz</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>Dec 2020 - Mar 2021</DarkTypography>
                        <DarkTypography variant="body1">Full Stack Developer</DarkTypography>
                        <DarkTypography variant="body1">Ongraph Technologies</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>Sep 2020 - Oct 2020</DarkTypography>
                        <DarkTypography variant="body1">Full Stack Developer</DarkTypography>
                        <DarkTypography variant="body1">Twirll</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>Mar 2020 - Jun 2020</DarkTypography>
                        <DarkTypography variant="body1">Full Stack Developer</DarkTypography>
                        <DarkTypography variant="body1">Sefith</DarkTypography>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}
const Awards = (): ReactJSXElement => {
    return (
        <>
            <hr className="exp-bar"/>
            <motion.div className="exp-container">
                    <DarkCustomButton variant="outlined">Certificates</DarkCustomButton>
                    <DarkCustomButton variant="outlined">Awards</DarkCustomButton>
                <motion.div className="exp-item-container">
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>2019</DarkTypography>
                        <DarkTypography variant="body1">The Web Developer Bootcamp</DarkTypography>
                        <DarkTypography variant="body1">Udemy</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>2019</DarkTypography>
                        <DarkTypography variant="body1">Responsive Web Design Certification</DarkTypography>
                        <DarkTypography variant="body1">FreeCodeCamp</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>2020</DarkTypography>
                        <DarkTypography variant="body1">The Advanced Web Developer Bootcamp</DarkTypography>
                        <DarkTypography variant="body1">Udemy</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>2020</DarkTypography>
                        <DarkTypography variant="body1">Javascript Algorithms and Data Structures</DarkTypography>
                        <DarkTypography variant="body1">Freecodecamp</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>2022</DarkTypography>
                        <DarkTypography variant="body1">Learning Amazon Web Services For Developers</DarkTypography>
                        <DarkTypography variant="body1">LinkedIn</DarkTypography>
                    </motion.div>
                    <motion.div className="exp-item">
                        <DarkTypography variant="h6" style={{fontSize: '1.2rem'}}>2023</DarkTypography>
                        <DarkTypography variant="body1">AWS Essential Training for Developers</DarkTypography>
                        <DarkTypography variant="body1">LinkedIn</DarkTypography>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

const Experience = (): ReactJSXElement => {
    return (
        <motion.div className="experience-outer-container">
            <Exp/>
            <Awards/>
        </motion.div>
    )
}
export default Experience;