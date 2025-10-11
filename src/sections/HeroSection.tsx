"use client";

import gsap from 'gsap';
import './HeroSection.css';
import { useEffect, useRef, useState } from 'react';
import { SplitText } from 'gsap/SplitText'
import Clock from '@/components/clock';

gsap.registerPlugin(SplitText);

export default function HeroSection() {
    const heroTexts = ['ALIEN501', 'VIGNESH'];
    const [heroText, setHeroText] = useState<number>(0);
    const heroTextRef = useRef<HTMLParagraphElement | null>(null);

    const onHeroTextClicked = () => {
        setHeroText(prev => (prev + 1) % 2);
    }

    useEffect(() => {
        if(heroTextRef.current) {
            gsap.timeline().fromTo(heroTextRef.current, {
                scale: 0
            }, {
                scale: .95,
                ease: 'back.out(1.7)',
                duration: .4
            }).fromTo('.hero-tag-text', {
                opacity: 0,
            }, {
                opacity: 1
            }, '-0')
        }
    }, [heroText]);

    return(
        <div className="h-full flex justify-center items-center text-center relative">
            <div className="bg-white/0 relative overflow-hidden hero-text-wrapper">
                <div className='hero-fake-name'>
                    <p ref={heroTextRef} onClick={onHeroTextClicked} className="font-aeonik-bold text-shadow cursor-pointer text-gradient lg:text-8xl text-4xl bg-gradient-to-t from-primary-light to-primary-dark bg-clip-text text-transparent z-10">
                        {heroTexts[heroText]}
                    </p>
                </div>
                <p className="font-doto hero-tag-text font-semibold text-xl tracking-wide text-shadow bg-gradient-to-t from-primary-light to-primary-dark bg-clip-text text-transparent">
                    {heroText == 0? "SOFTWARE DEVELOPER": "!Normal Hooman Being"}
                </p>
                <div className='w-full h-[40px] flex items-center justify-center'>
                    <Clock />
                </div>
            </div>
        </div>
    )
}