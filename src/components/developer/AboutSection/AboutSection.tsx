import DarkCustomButton from "@/components/common/DarkCustomButton";
import DarkTypography from "@/components/common/DarkTypography";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {motion} from 'framer-motion';
import Image from "next/image";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
const About = (): ReactJSXElement => {
    return (
        <motion.div className='about-container'>
            <DarkTypography variant="body1">ABOUT</DarkTypography>
            <DarkTypography variant="subtitle1" >
            I am passionate about everything that hones my creativity and problem solving skills. I seek challenges and strive to shift the course of situation with my work. I can be a ghost, a leader and a mentor as the situation demands. 
            </DarkTypography>
            <Image src="/images/developer/profile.png" alt="Profile" width={300} height={300} />
        </motion.div>
    )
}

const MyRole = (): ReactJSXElement => {
    return (
        <motion.div className='myrole-container'>
            <motion.div className="role-summary">
                <DarkTypography variant="subtitle1">Masterkey</DarkTypography>
                <DarkTypography variant="body2">Acted as a masterkey in some key projects. As a masterkey resource you should be able to build an application from scratch, present to the client and do final deployment and handover.</DarkTypography>
            </motion.div>
            <motion.div className="role-summary">
                <DarkTypography variant="subtitle1">Mr. Enabler</DarkTypography>
                <DarkTypography variant="body2">Enabler is a resource who takes the lead in a project and also guides the juniors to follow lead. Alongside, training the juniors and handing over the entire project to juniors by the end. </DarkTypography>
            </motion.div>
            <motion.div className="role-summary">
                <DarkTypography variant="subtitle1">The Outcast</DarkTypography>
                <DarkTypography variant="body2">An Outcast resource is the one who talks less but works hard behind the scenes and produces most results. He might stay in the dark but his work shines bright under a strict management.</DarkTypography>
            </motion.div>
            <motion.div >
                <DarkCustomButton variant="outlined">Explore My Work <UnfoldMoreIcon/> </DarkCustomButton>
            </motion.div>
        </motion.div>
    )
}

const AboutSection = (): ReactJSXElement => {
    return (
        <motion.div className="about-outer-container">
            <About/>
            <MyRole/>
        </motion.div>
    )
}
export default AboutSection;