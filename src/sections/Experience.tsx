'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useMeasure } from "react-use";

type ExperienceItem = {
    organisation: string,
    tenure: string,
    role: string,
    description: string
}

const experienceList: ExperienceItem[] = [
    {
        organisation: 'DEVS REC',
        tenure: '2023-2024',
        role: 'Board Member',
        description: 'Managed technical events end-to-end for college tech club. Organized workshops and contributed to club website development.'
    },
    {
        organisation: 'DEVS REC',
        tenure: '2024-2025',
        role: 'Technical Lead',
        description: 'Led club website development with React.js. Implemented event management system and Git workflows. Mentored juniors through MERN stack weekend sessions.'
    },
    {
        organisation: 'Hackmaggeddon Ch-1',
        tenure: '2024',
        role: 'Organiser',
        description: 'Coordinated 24-hour hackathon with 500+ participants. Developed and implemented judging criteria.'
    },
    {
        organisation: 'Recharge 2025',
        tenure: '2025',
        role: 'Website Team Lead',
        description: 'Led 8-member team developing college fest website serving 10k+ users. Built registration portal with Django/Next.js that handled 3x traffic surge without downtime.'
    },
    {
        organisation: 'Chennai Metco',
        tenure: '2024-2025',
        role: 'Software Intern',
        description: 'Developed desktop application for automotive welding measurement systems.'
    },
    {
        organisation: 'Firstsource',
        tenure: '2025',
        role: 'Software Intern',
        description: 'Migrating legacy systems to Azure cloud. Building Jenkins CI/CD pipelines and automating deployment processes.'
    },
];

const ExperienceCard = ({ organisation, role, tenure, description }: ExperienceItem) => {
    const [isOpened, setIsOpened] = useState(false);
    const [contentRef, bounds] = useMeasure<HTMLDivElement>();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 30,
                duration: 0.3
            }}
            onClick={() => setIsOpened(prev => !prev)}
            className="select-none transition-all duration-300 cursor-pointer outline outline-primary-light/2 bg-gradient-to-b from-[rgba(186,207,247,0)] to-[rgba(186,207,247,0.0)] bg-clip-content-box shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.1),inset_0_24px_48px_0_rgba(168,216,245,0.04),0_16px_32px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.2),inset_0_24px_48px_0_rgba(168,216,245,0.08),0_16px_32px_rgba(0,0,0,0.0)] rounded-md p-2"
        >
            <motion.div layout="position" className="flex flex-row justify-between items-center">
                <p className="font-untitle-sans-medium text-sm tracking-wide bg-gradient-to-t from-primary-light/80 to-primary-dark/80 bg-clip-text text-transparent">
                    {organisation}
                </p>
                <span className="outline outline-primary-dark/20 pl-2 pr-2 pt-0 pb-0 rounded-full text-[.5rem] bg-primary-dark/10">
                    {tenure}
                </span>
            </motion.div>
            
            <motion.p layout="position" className="text-muted">
                {role}
            </motion.p>

            <AnimatePresence initial={false}>
                <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                        opacity: 1, 
                        height: isOpened ? bounds.height : 0
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.3
                    }}
                    className="overflow-hidden"
                >
                    <div ref={contentRef}>
                        <hr className="opacity-[.4] mb-2" />
                        <div className="text-xs text-primary-dark/60 leading-relaxed">
                            {description}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

export default function Experience() {
    // const [expList, setExpList] = useState<ExperienceItem[]>([...experienceList]);
    // const [isHovering, setIsHovering] = useState(false);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if (!isHovering) {
    //             setExpList(prevList => {
    //                 const firstItem = prevList[0];
    //                 return [...prevList.slice(1), firstItem];
    //             });
    //         }
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, [isHovering]);

    return (
        <div
            className="relative h-[400px] overflow-x-hidden overflow-y-scroll thin-scrollbar"
            // onMouseEnter={() => setIsHovering(true)}
            // onMouseLeave={() => setIsHovering(false)}
        >
            <span className="absolute z-0 w-64 h-64 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-dark/10 blur-3xl"></span>
            <div className="space-y-2 relative z-10 flex flex-col justify-evenly h-full p-2">
                {/* <AnimatePresence initial={false}> */}
                    {experienceList.map((experience) => (
                        <motion.div key={`${experience.organisation}-${experience.tenure}`} 
                            layout
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                                duration: .3,
                                staggerChildren: 1
                            }}
                        >
                            <div
                                key={`${experience.organisation}-${experience.tenure}`}
                            >
                                <ExperienceCard
                                    organisation={experience.organisation}
                                    role={experience.role}
                                    tenure={experience.tenure}
                                    description={experience.description}
                                    key={`${experience.organisation}-${experience.tenure}` }
                                />
                            </div>
                        </motion.div>
                    ))}

                {/* </AnimatePresence> */}
            </div>
        </div>
    );
}

