import './pen.css';

const PenIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pen-container">
            <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary-light)" />
                    <stop offset="100%" stopColor="var(--color-primary-dark)" />
                </linearGradient>
            </defs>
            <path className="pen" fill="url(#triangleGradient)" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
            <path className="pen" stroke='var(--primary-light)' d="m15 5 4 4"/>
        </svg>
    )
}

export {
    PenIcon
}