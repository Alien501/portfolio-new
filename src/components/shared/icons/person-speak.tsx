import './person-speak.css'

const PersonSpeakIcon = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide gradient-icon lucide-speech-icon lucide-speech"
    >
        <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary-light)" />
                <stop offset="100%" stopColor="var(--color-primary-dark)" />
            </linearGradient>
        </defs>
      <path 
        stroke='url(#triangleGradient)'
        d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
      />
      <path 
        stroke='url(#triangleGradient)'
        d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"
        className="wave-path wave-path-2"
      />
      <path 
        stroke='url(#triangleGradient)'
        d="M17 15a3.5 3.5 0 0 0-.025-4.975"
        className="wave-path wave-path-3"
      />
    </svg>
  )
}

export {
    PersonSpeakIcon
}