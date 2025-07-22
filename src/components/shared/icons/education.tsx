import './education.css';

const EducationIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="education-container">
            <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary-light)" />
                    <stop offset="100%" stopColor="var(--color-primary-dark)" />
                </linearGradient>
            </defs>
            <rect className='book book-static' fill='url(#triangleGradient)' width="8" height="18" x="3" y="3" rx="1"/>
            <path className='book book-slant' fill='url(#triangleGradient)' d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>
        </svg>
    )
}

export {
    EducationIcon
}