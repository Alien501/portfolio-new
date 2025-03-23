'use client';
import { useEffect, useRef } from 'react';

type Particle = {
    x: number;
    y: number;
    size: number;
    opacity: number;
    originalOpacity: number;
    speed: number;
    drift: number;
    life: number;
    maxLife: number;
    fadeThreshold: number;
    fadingOut: boolean;
    reset: () => void;
    update: () => void;
    draw: () => void;
}

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    
    useEffect(() => {
        if(!canvasRef.current)
            return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
        
        class Particle {
            x: number;
            y: number;
            size: number;
            opacity: number;
            originalOpacity: number;
            speed: number;
            drift: number;
            life: number;
            maxLife: number;
            fadeThreshold: number;
            fadingOut: boolean;

            constructor() {
                this.x = 0;
                this.y = 0;
                this.size = 0;
                this.opacity = 0;
                this.originalOpacity = 0;
                this.speed = 0;
                this.drift = 0;
                this.life = 0;
                this.maxLife = 0;
                this.fadeThreshold = 0;
                this.fadingOut = false;
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                
                this.size = Math.random() * 1 + 0.2;
                
                this.opacity = Math.random() * 0.4 + 0.1;
                this.originalOpacity = this.opacity;
                
                this.speed = Math.random() * .1 + .2;
                this.drift = Math.random() * 0.2 - 0.1;
                
                this.life = 0;
                this.maxLife = Math.random() * 200 + 150;
                
                this.fadeThreshold = this.maxLife * 0.7;
                
                this.fadingOut = false;
            }
            
            update() {
                this.y -= this.speed;
                this.x += this.drift;
                this.life++;
                
                if (this.life > this.fadeThreshold) {
                    const fadeProgress = (this.life - this.fadeThreshold) / (this.maxLife - this.fadeThreshold);
                    this.opacity = this.originalOpacity * (1 - fadeProgress);
                }
                
                if (this.life > this.maxLife || this.y < -10) {
                    this.reset();
                }
            }
            
            draw() {
                if(!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }
        
        const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150);
        particlesRef.current = Array.from({ length: particleCount }, () => new Particle());
        
        const animate = () => {
            if(!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);
    
    return (
        <div className="background fixed -z-10 h-screen left-0 top-0 right-0 bottom-0">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}