import './fire.css';

const FireIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flame-container">
            <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary-light)" />
                    <stop offset="100%" stopColor="var(--color-primary-dark)" />
                </linearGradient>
            </defs>
            <path className="flame-path" fill="url(#triangleGradient)" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
    )
}

export {
    FireIcon
}