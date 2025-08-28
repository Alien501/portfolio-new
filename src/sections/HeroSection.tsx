"use client";

import gsap from 'gsap';
import './HeroSection.css';
import { useEffect, useRef } from 'react';
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText);

export default function HeroSection() {
    const heroWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(heroWrapperRef.current) {
            const heroFakeName = document.querySelector('.hero-fake-name');
            const heroRealName = document.querySelector('.hero-real-name');

            const heroAnimation = gsap.timeline({paused: true})
                                    .to(heroFakeName, {
                                        rotateX: 90,
                                        duration: .3,
                                        transformOrigin: 'top',
                                    }).fromTo(heroRealName, {
                                        rotateX: -90,
                                        opacity: 0,
                                    }, {
                                        rotateX: 0,
                                        transformOrigin: 'bottom',
                                        opacity: 1,
                                    }, '<')

            heroWrapperRef.current.addEventListener('mouseenter', () => {
                heroAnimation.play();
            })
            heroWrapperRef.current.addEventListener('mouseleave', () => {
                heroAnimation.reverse();
            })
        }
    }, []);

    return(
        <div className="h-full flex justify-center items-center text-center">
            <div ref={heroWrapperRef} className="bg-white/0 relative overflow-hidden hero-text-wrapper">
                <div className='hero-fake-name'>
                    <p className="font-aeonik-bold lg:text-8xl text-4xl bg-gradient-to-t from-primary-light to-primary-dark bg-clip-text text-transparent text-shadow z-10">
                        ALIEN501
                    </p>
                </div>
                <div className='absolute -top-[0px] hero-real-name text-center bg-white/0 mx-auto w-full'>
                    <p className="font-aeonik-bold lg:text-8xl text-4xl bg-gradient-to-t from-primary-light to-primary-dark bg-clip-text text-transparent text-shadow z-10">
                        VIGNESH
                    </p>
                </div>
                <p className="font-doto font-semibold text-xl tracking-wide bg-gradient-to-t from-primary-light to-primary-dark bg-clip-text text-transparent text-shadow">SOFTWARE DEVELOPER</p>
            </div>
        </div>
    )
}