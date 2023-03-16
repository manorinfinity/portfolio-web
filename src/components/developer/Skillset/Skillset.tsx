import DarkCustomButton from "@/components/common/DarkCustomButton";
import DarkTypography from "@/components/common/DarkTypography";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {motion} from 'framer-motion';
const Skills = (): ReactJSXElement => {
    return (
        <motion.div className='skillset-container'>
            <DarkTypography variant="h5" >
            A Problem Solver learnt and expertised almost every leading full stack technology.
            </DarkTypography>
            <motion.div className="skills-container">
                <DarkTypography variant="subtitle1" >
                3+ Years of Industry Experience. Worked with national as well as international clients. Built software systems with users from 1000s to millions. Seeking to solve problems and provide optimal and economical solutions to my clients.
                </DarkTypography>
                <motion.div className="skills-list">
                    <DarkTypography variant="subtitle1" >
                     Here are some highlights of the technologies I have worked with so far. 
                    </DarkTypography>
                    <ul>
                        <li>
                            <DarkTypography variant="body1" style={{fontWeight: "400"}}>
                                My Frontend Delights:
                            </DarkTypography>
                            <DarkTypography variant="body1">
                                ReactJS, NextJS, AngularJS, SCSS, Material UI
                            </DarkTypography>
                        </li>
                        <li>
                            <DarkTypography variant="body1" style={{fontWeight: "400"}}>
                                My Backend Love:
                            </DarkTypography>
                            <DarkTypography variant="body1">
                                NodeJS, NestJS, ExpressJS
                            </DarkTypography>
                        </li>
                        <li>
                            <DarkTypography variant="body1" style={{fontWeight: "400"}}>
                                The Traditional:
                            </DarkTypography>
                            <DarkTypography variant="body1">
                                HTML, CSS, ES6, ES5, Jquery, EJS
                            </DarkTypography>
                        </li>
                        <li>
                            <DarkTypography variant="body1" style={{fontWeight: "400"}}>
                                Infra Tools:
                            </DarkTypography>
                            <DarkTypography variant="body1">
                                AWS, Google Cloud Platform, Jenkins
                            </DarkTypography>
                        </li>
                        <li>
                            <DarkTypography variant="body1" style={{fontWeight: "400"}}>
                                Favorite Memory Tools:
                            </DarkTypography>
                            <DarkTypography variant="body1">
                                MongoDB, SQL
                            </DarkTypography>
                        </li>
                        <li>
                            <DarkTypography variant="body1" style={{fontWeight: "400"}}>
                                Testing Oh Yes!:
                            </DarkTypography>
                            <DarkTypography variant="body1">
                                Jest
                            </DarkTypography>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const MyRole = (): ReactJSXElement => {
    return (
        <>
            <hr className="approach-bar"/>
            <motion.div className="approach-container">
                    <DarkCustomButton variant="outlined">Approach</DarkCustomButton>
                <motion.div className="approach-item-container">
                    <motion.div className="approach-item">
                        <DarkTypography variant="h6">Fantasize</DarkTypography>
                        <DarkTypography variant="body1">The very first thing that I like to do before building a product is to visualise how it would look and feel as a finished product. And is there anything that we are missing. </DarkTypography>
                    </motion.div>
                    <motion.div className="approach-item">
                        <DarkTypography variant="h6">Plan</DarkTypography>
                        <DarkTypography variant="body1">Planning is all about building series of steps required to build the desired products. Basically distributing the workload into smaller micro tasks. </DarkTypography>
                    </motion.div>
                    <motion.div className="approach-item">
                        <DarkTypography variant="h6">Action</DarkTypography>
                        <DarkTypography variant="body1">The most important step is to take action to develop within the deadline and meet the desired output. And so far I haven&apos;t failed in any of the above department. </DarkTypography>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

const Skillset = (): ReactJSXElement => {
    return (
        <motion.div className="skillset-outer-container">
            <Skills/>
            <MyRole/>
        </motion.div>
    )
}
export default Skillset;