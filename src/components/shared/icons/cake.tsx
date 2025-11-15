import './cake.css';

const CakeIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary-light)" />
                    <stop offset="100%" stopColor="var(--color-primary-dark)" />
                </linearGradient>
            </defs>
            <g fill="url(#triangleGradient)" stroke="url(#triangleGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path strokeDasharray="28" strokeDashoffset="28" d="M12 21h8v-9c0 -1.1 -0.9 -2 -2 -2h-6M12 21h-8v-9c0 -1.1 0.9 -2 2 -2h6">
                    <animate fill="freeze" attributeName="strokeDashoffset" dur="0.4s" values="28;0" />
                </path>
                <path strokeDasharray="4" strokeDashoffset="4" d="M12 10v-2">
                    <animate fill="freeze" attributeName="strokeDashoffset" begin="0.4s" dur="0.2s" values="4;0" />
                </path>
                <path strokeDasharray="20" strokeDashoffset="20" d="M4 16h1c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2h1">
                    <animate fill="freeze" attributeName="strokeDashoffset" begin="0.5s" dur="0.2s" values="20;0" />
                </path>
            </g>
            <g  fill="url(#triangleGradient)">
                <path className="cake-fire" d="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z" opacity="0">
                    <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z;M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 12 0 12 0C12 0 14 2.89543 14 4Z" />
                    <set fill="freeze" attributeName="opacity" begin="0.6s" to="1" />
                </path>
                <path fillOpacity="0" d="M15.5 14C15.5 14 14 16 12 16C10 16 8.5 14 8.5 14C8.5 14 7 16 5 16H4V21H20V16H19C17 16 15.5 14 15.5 14Z">
                    <animate fill="freeze" attributeName="fillOpacity" begin="0.9s" dur="0.5s" values="0;1" />
                </path>
            </g>
        </svg>
    )
}

export {
    CakeIcon
}