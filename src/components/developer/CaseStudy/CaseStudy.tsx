import CustomButton from "@/components/common/CustomButton";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Typography } from "@mui/material";
import {motion} from 'framer-motion';
import Image from "next/image";
const Case = ({image, title, description, buttons}:{image: string, title: string, description: {
    [key:string]: string
}, buttons: Array<string>}): ReactJSXElement => (
    <motion.div className="case-container">
        <Image
            src={image}
            alt="Nagarro Logo"
            fill={true}
        />
        <motion.div className="case-body">
            <Typography variant="h4">{title}</Typography>
            <motion.div className="case-inner-body">
                <motion.div className="case-description">
                    {Object.keys(description).map((title, index) => (
                        <motion.div key={index} className="case-text">
                            <Typography variant="subtitle2">{title.toUpperCase()}</Typography>
                            <Typography variant="body2">{description[title]}</Typography>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="case-buttons">
                    {buttons.map((title, index) => (
                        <motion.div key={index} className="case-btn">
                            <CustomButton variant="outlined">{title}</CustomButton>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            
        </motion.div>
    </motion.div>
)

// What we can do is implement framer motion scroll functionality and switch between component on scroll. But need to look into how is it possible. 

const CaseStudy = (): ReactJSXElement => {
    interface Cases {
        [key: string]: {
            image: string,
            description: {
                [key: string]: string,
            },
            buttons: Array<string>,
        }
    }
    const cases:Cases = {
        'Nagarro': {
            image: '/images/developer/nagarro.png',
            description: {
                'type': 'Full Time',
                'description': 'Lorem ipsum is greatful for the opportunity',
                'year': '2023',
            },
            buttons: ['Web Design', 'UI/UX', 'Custom Design'],
        },
        'Toremo': {
            image: '/images/developer/nagarro.png',
            description: {
                'type': 'Full Time',
                'description': 'Lorem ipsum is greatful for the opportunity',
                'year': '2023',
            },
            buttons: ['Web Design', 'UI/UX', 'Custom Design'],
        }
    }
    return (
        <motion.div className='case-slider'>
            {
                Object.keys(cases).map((title : string, index) => (
                    <Case key={index} title={title} image={cases[title].image} description={cases[title].description} buttons={cases[title].buttons}/>
                ))
            }
        </motion.div>
    )
}

export default CaseStudy;