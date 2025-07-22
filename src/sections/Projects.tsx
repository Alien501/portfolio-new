'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ProjectItemProps {
    name: string;
    stack: string[];
    sourceCode: string;
    isDeployed: boolean;
    deploymentLink: string;
    description: string;
}

import 'swiper/css'
import { Autoplay } from 'swiper/modules';


const ProjectCard = ({ project }: { project: ProjectItemProps }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="mx-auto relative project-card-wrapper h-[180px] w-[180px] relative rounded-lg cursor-pointer bg-gradient-to-b from-[var(--border-from-color)] to-[var(--border-to-color)] bg-clip-content-box shadow-[var(--shadow-inset)] hover:shadow-lg transition-all duration-300 p-4 mt-2"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="h-full flex flex-col justify-between">
                {!isExpanded ? (
                    <>
                        <h3 className="text-sm font-bold mb-2 text-primary-dark/80 font-untitle-sans-medium">{project.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-[.6rem] px-2 py-0 rounded-full bg-primary-dark/5 border border-primary-light/40 text-primary-light/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2 justify-end">
                            {project.sourceCode && (
                                <Link
                                    href={project.sourceCode}
                                    className="p-1.5 relative h-[28px] w-[28px] rounded-md shadow-[var(--shadow-inset)] transition-colors flex items-center justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                    target='_'
                                >
                                    <svg
                                        viewBox="0 0 256 250"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid"
                                    >
                                        <path
                                            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                                    </svg>

                                </Link>
                            )}
                            {project.isDeployed && (
                                <Link
                                    href={project.deploymentLink}
                                    className="p-1.5 relative h-[28px] w-[28px] rounded-md shadow-[var(--shadow-inset)] transition-colors flex items-center justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                    target='_'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </Link>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="h-full flex items-center">
                        <p className="text-xs text-primary-light/80 overflow-y-auto max-h-[140px]">
                            {project.description}
                        </p>
                    </div>
                )}
            </div>

            {/* Card highlights */}
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-dark/30 to-transparent" />
        </div>
    );
};

export default function ProjectsSection() {
    return (
        <div className="projects-container h-[236px] w-full overflow-x-auto pb-4">
            {/* <div className="flex gap-4 px-4 w-max mt-4"> */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    300: {
                        slidesPerView:1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },}}
                    className='w-full mt-6'
                >
                {
                    Projects.map((project, index) => (
                        <SwiperSlide key={project.name} className='min-w-[180px]'>
                            <ProjectCard key={index} project={project} />
                        </SwiperSlide>
                    ))
                }

                </Swiper>
            {/* </div> */ }
        </div >
    );
}

const Projects: ProjectItemProps[] = [
    {
        name: "LRC Get",
        stack: ["React.js", "React", "Tailwind CSS"],
        sourceCode: "https://github.com/Alien501/LRC-Get",
        isDeployed: true,
        deploymentLink: "https://lrc-get.alien501.in/",
        description: "This website provides a convenient platform to retrieve both synchronized and non-synchronized lyrics for songs from diverse sources."
    },
    {
        name: "Portfolio",
        stack: ["Next.js", "Tailwind CSS", 'CSS', "GSAP", "Framer Motion"],
        sourceCode: "https://github.com/Alien501/portfolio",
        isDeployed: true,
        deploymentLink: "https://www.alien501.in",
        description: "My personal portfolio website, The one currently you are in :-)."
    },
    {
        name: "Sync Play",
        stack: ["Next.js", "Spotify API", "Tailwind CSS"],
        sourceCode: "https://github.com/Alien501/sync-play-template",
        isDeployed: true,
        deploymentLink: "https://sync-play-nu.vercel.app/signin",
        description: "A simple site made to upload offline music playlist to Spotify with ease.[Note: Still under beta and not available for mass. Maybe soon :-)]"
    },
    {
        name: "DEVS REC Website",
        stack: ["React", "CSS", "JavaScript"],
        sourceCode: "https://github.com/DevsREC/devsfest23",
        isDeployed: true,
        deploymentLink: "https://devsrec.club/",
        description: "A website I made for my college's techincal club, DEVS. This is currently serving as their current website."
    },
    {
        name: "REC Companion",
        stack: ["PWA", "React", "Tailwind CSS"],
        sourceCode: "https://github.com/DevsREC/rec_comapnion",
        isDeployed: true,
        deploymentLink: "https://comp.devsrec.club/",
        description: "A PWA collabratively made under DEVS for ease access of various functionalities present and offered my college."
    },
    {
        name: "Thirrukural API",
        stack: ["Node.js", "Express.js", "React", "NextUI", "Tailwind CSS"],
        sourceCode: "https://github.com/Alien501/thirukural",
        isDeployed: true,
        deploymentLink: "https://thirukkural.alien501.in/",
        description: "The Thirukural API & Frontend project is a web application designed to make the Thirukural accessible to all. Using Node.js, Express.js, React, NextUI, and Tailwind CSS, it provides a comprehensive API and a user-friendly interface to explore this ancient Tamil literary work."
    },
    {
        name: "LRC Generator",
        stack: ['React', 'Tailwind CSS', "Typescript"],
        sourceCode: 'https://github.com/Alien501/lrc-generator',
        isDeployed: true,
        deploymentLink: 'https://lrc-gen.alien501.in/',
        description: 'LRC Generator is a user-friendly web application that allows users to paste lyrics, synchronize them with audio playback, and download the synchronized lyrics as an .lrc file. This project is built with React, featuring a modern UI styled using Tailwind CSS, state management powered by Zustand, and audio handling implemented with Howler.js.'
    },
    {
        name: "Custom Home Tab",
        stack: ['Extension', "JS", "HTML", "CSS"],
        sourceCode: 'https://github.com/Alien501/custom-home-tab',
        isDeployed: false,
        deploymentLink: '',
        description: 'the Custom New Tab Extension! This browser extension replaces the default new tab page with a personalized, minimalist dashboard featuring a sleek clock display.'
    },
    {
        name: "Hostel Booking App",
        stack: ['Django', 'Python', 'React.js', 'Typescript'],
        sourceCode: '',
        isDeployed: true,
        deploymentLink: 'https://hostel.rajalakshmi.org/',
        description: 'Built a dynamic hostel booking system for my college with OTP-based confirmations and automated room management using cron jobs. Streamlined the entire booking process for students and admins!.'
    }
];