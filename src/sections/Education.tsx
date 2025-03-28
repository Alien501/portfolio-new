'use client'

import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";

type EducationItem = {
    organisation: string,
    tenure: string,
    role: string,
}

const experienceList: EducationItem[] = [
    {
        organisation: 'Velammal Residential School, Ladanaendal',
        tenure: '2022',
        role: 'School'
    },
    {
        organisation: 'Rajalakshmi Engineering College, Chennai',
        tenure: '2026',
        role: 'B.E - CSE'
    },
];

const EducationCard = ({ organisation, role, tenure }: EducationItem) => {
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
            className="select-none transition-all duration-300 outline outline-primary-light/2 bg-gradient-to-b from-[rgba(186,207,247,0)] to-[rgba(186,207,247,0.0)] bg-clip-content-box shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.1),inset_0_24px_48px_0_rgba(168,216,245,0.04),0_16px_32px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.2),inset_0_24px_48px_0_rgba(168,216,245,0.08),0_16px_32px_rgba(0,0,0,0.0)] rounded-md p-2"
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
        </motion.div>
    );
}

export default function Education() {
    // const [expList, setExpList] = useState<EducationItem[]>([...experienceList]);
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
            className="relative h-[300px] overflow-y-scroll thin-scrollbar"
            // onMouseEnter={() => setIsHovering(true)}
            // onMouseLeave={() => setIsHovering(false)}
        >
            <span className="absolute z-0 w-64 h-64 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-dark/10 blur-3xl"></span>
            <div className="space-y-2 relative z-10 flex flex-col h-full p-4">
                <AnimatePresence initial={false}>
                    {experienceList.map((experience) => (
                        <motion.div key={`${experience.organisation}-${experience.tenure}`} 
                            layout
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                                duration: .3
                            }}
                        >
                            <div
                                key={`${experience.organisation}-${experience.tenure}`}
                            >
                                <EducationCard
                                    organisation={experience.organisation}
                                    role={experience.role}
                                    tenure={experience.tenure}
                                    key={`${experience.organisation}-${experience.tenure}` }
                                />
                            </div>
                        </motion.div>
                    ))}

                </AnimatePresence>
            </div>
        </div>
    );
}

