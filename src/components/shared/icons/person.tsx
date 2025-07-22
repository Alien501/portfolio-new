import './person.css';

const PersonIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="person-icon-container">
            <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary-light)" />
                    <stop offset="100%" stopColor="var(--color-primary-dark)" />
                </linearGradient>
            </defs>
            <path className="person-body person-parts" fill="url(#triangleGradient)" d="M18 20a6 6 0 0 0-12 0"/>
            <circle className="person-head person-parts"  fill="url(#triangleGradient)" cx="12" cy="10" r="4"/>
        </svg>
    )
}

export {
    PersonIcon
}