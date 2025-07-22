import './rocket.css';

const RocketIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rocket-container">
            <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary-light)" />
                    <stop offset="100%" stopColor="var(--color-primary-dark)" />
                </linearGradient>
            </defs>
            <path className="rocket-fire" fill="url(#triangleGradient)" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path className="rocket-parts" fill="url(#triangleGradient)" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path className="rocket-parts" fill="url(#triangleGradient)" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path className="rocket-parts" fill="url(#triangleGradient)" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
    )
}

export {
    RocketIcon
}