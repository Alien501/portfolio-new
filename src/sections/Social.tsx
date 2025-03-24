import './Social.css'

type SocialItem = {
    icon: React.ReactNode;
    link: string;
}

const socialLinks: SocialItem[] = [
    {
        icon: <svg
            viewBox="0 0 256 250"
            width="256"
            height="250"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
        >
            <path
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
        </svg>,
        link: 'https://github.com/Alien501'
    },
    {
        icon: <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
            <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"/></svg>        ,
        link: 'https://www.linkedin.com/in/vignesh-chellapandi-2207b5257/'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42">
        <g fill="none" fillRule="evenodd">
          <g fillRule="nonzero">
            <path fill="currentColor" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/>
            <path fill="currentColor" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/>
            <path fill="currentColor" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/>
          </g>
          <path fill="currentColor" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/>
          <path fill="currentColor" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/>
        </g>
      </svg>
      ,
        link: 'mailto:cvignesh404@gmail.com'
    },
    {
        icon: <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="transparent"/><stop offset="100%" stopColor="transparent"/></linearGradient></defs><path fill="transparent" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/><path fill="currentColor" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/></svg>,
        link: 'https://t.me/Alien_501'
    },
    // {
    //     icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="_1O4jTk-dZ-VIxsCuYB6OR8" viewBox="0 0 216 216">
    //     <defs>
    //         <radialGradient id="snoo-radial-gragient" cx="169.75" cy="92.19" r="50.98" fx="169.75" fy="92.19" gradientTransform="matrix(1 0 0 .87 0 11.64)" gradientUnits="userSpaceOnUse">
    //             <stop offset="0" stopColor="black"/>
    //             <stop offset=".4" stopColor="black"/>
    //             <stop offset=".51" stopColor="black"/>
    //             <stop offset=".62" stopColor="black"/>
    //             <stop offset=".7" stopColor="black"/>
    //             <stop offset=".72" stopColor="black"/>
    //             <stop offset=".76" stopColor="black"/>
    //             <stop offset=".8" stopColor="black"/>
    //             <stop offset=".83" stopColor="black"/>
    //             <stop offset=".85" stopColor="black"/>
    //             <stop offset=".88" stopColor="black"/>
    //             <stop offset=".9" stopColor="black"/>
    //         </radialGradient>
    //         <radialGradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-2" cx="47.31" r="50.98" fx="47.31"/>
    //         <radialGradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-3" cx="109.61" cy="85.59" r="153.78" fx="109.61" fy="85.59" gradientTransform="matrix(1 0 0 .7 0 25.56)"/>
    //         <radialGradient id="snoo-radial-gragient-4" cx="-6.01" cy="64.68" r="12.85" fx="-6.01" fy="64.68" gradientTransform="matrix(1.07 0 0 1.55 81.08 27.26)" gradientUnits="userSpaceOnUse">
    //             <stop offset="0" stopColor="black"/>
    //             <stop offset=".5" stopColor="black"/>
    //             <stop offset=".7" stopColor="black"/>
    //             <stop offset=".82" stopColor="black"/>
    //             <stop offset=".92" stopColor="black"/>
    //             <stop offset="1" stopColor="black"/>
    //         </radialGradient>
    //         <radialGradient xlinkHref="#snoo-radial-gragient-4" id="snoo-radial-gragient-5" cx="-73.55" cy="64.68" r="12.85" fx="-73.55" fy="64.68" gradientTransform="matrix(-1.07 0 0 1.55 62.87 27.26)"/>
    //         <radialGradient id="snoo-radial-gragient-6" cx="107.93" cy="166.96" r="45.3" fx="107.93" fy="166.96" gradientTransform="matrix(1 0 0 .66 0 57.4)" gradientUnits="userSpaceOnUse">
    //             <stop offset="0" stopColor="transparent"/>
    //             <stop offset=".29" stopColor="transparent"/>
    //             <stop offset=".73" stopColor="transparent"/>
    //             <stop offset="1"/>
    //         </radialGradient>
    //         <radialGradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-7" cx="147.88" cy="32.94" r="39.77" fx="147.88" fy="32.94" gradientTransform="matrix(1 0 0 .98 0 .54)"/>
    //         <radialGradient id="snoo-radial-gragient-8" cx="131.31" cy="73.08" r="32.6" fx="131.31" fy="73.08" gradientUnits="userSpaceOnUse">
    //             <stop offset=".48" stopColor="transparent"/>
    //             <stop offset=".67" stopColor="transparent"/>
    //             <stop offset=".75"/>
    //             <stop offset=".82" stopColor="transparent"/>
    //         </radialGradient>
    //     </defs>
    //     <path fill="currentColor" stroke-width="0" d="M108 0C48.35 0 0 48.35 0 108c0 29.82 12.09 56.82 31.63 76.37l-20.57 20.57C6.98 209.02 9.87 216 15.64 216H108c59.65 0 108-48.35 108-108S167.65 0 108 0Z"/>
    //     <circle cx="169.22" cy="106.98" r="25.22" fill="url(#snoo-radial-gragient)" stroke-width="0"/>
    //     <circle cx="46.78" cy="106.98" r="25.22" fill="url(#snoo-radial-gragient-2)" stroke-width="0"/>
    //     <ellipse cx="108.06" cy="128.64" fill="url(#snoo-radial-gragient-3)" stroke-width="0" rx="72" ry="54"/>
    //     <path fill="url(#snoo-radial-gragient-4)" stroke-width="0" d="M86.78 123.48c-.42 9.08-6.49 12.38-13.56 12.38s-12.46-4.93-12.04-14.01c.42-9.08 6.49-15.02 13.56-15.02s12.46 7.58 12.04 16.66Z"/>
    //     <path fill="url(#snoo-radial-gragient-5)" stroke-width="0" d="M129.35 123.48c.42 9.08 6.49 12.38 13.56 12.38s12.46-4.93 12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46 7.58-12.04 16.66Z"/>
    //     <ellipse cx="79.63" cy="116.37" className="snoo-cls-11" rx="2.8" ry="3.05"/>
    //     <ellipse cx="146.21" cy="116.37" className="snoo-cls-11" rx="2.8" ry="3.05"/>
    //     <path fill="url(#snoo-radial-gragient-6)" stroke-width="0" d="M108.06 142.92c-8.76 0-17.16.43-24.92 1.22-1.33.13-2.17 1.51-1.65 2.74 4.35 10.39 14.61 17.69 26.57 17.69s22.23-7.3 26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z"/>
    //     <circle cx="147.49" cy="49.43" r="17.87" fill="url(#snoo-radial-gragient-7)" stroke-width="0"/>
    //     <path fill="url(#snoo-radial-gragient-8)" stroke-width="0" d="M107.8 76.92c-2.14 0-3.87-.89-3.87-2.27 0-16.01 13.03-29.04 29.04-29.04 2.14 0 3.87 1.73 3.87 3.87s-1.73 3.87-3.87 3.87c-11.74 0-21.29 9.55-21.29 21.29 0 1.38-1.73 2.27-3.87 2.27Z"/>
    //     <path fill="transparent" stroke-width="0" d="M62.82 122.65c.39-8.56 6.08-14.16 12.69-14.16 6.26 0 11.1 6.39 11.28 14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14 6.05-13.56 15.2c-.42 9.15 4.97 13.83 12.04 13.83h.52c-6.44-.16-11.3-4.79-10.91-13.2Zm90.48 0c-.39-8.56-6.08-14.16-12.69-14.16-6.26 0-11.1 6.39-11.28 14.33-.17-8.88 5.13-15.99 12.05-15.99 7.07 0 13.14 6.05 13.56 15.2.42 9.15-4.97 13.83-12.04 13.83h-.52c6.44-.16 11.3-4.79 10.91-13.2Z"/>
    // </svg>,
    //     link: 'https://www.reddit.com/user/Thin-Mycologist906/'
    // },
]

const SocialCard = ({ icon, link }: SocialItem) => {
    return (
        <a target='_' role='button' href={link} className="social-card h-[32px] w-[32px] bg-primary-dark/5 p-1 rounded-md outline outline-primary-light/10 hover:shadow-md">
            {icon}
        </a>
    )
}

export default function Social() {
    return (
        <div className="lg:h-[100px] h-[80px] flex justify-evenly flex-wrap items-center">
            {
                socialLinks.map((socialLink, index) => <SocialCard key={index} {...socialLink} />)
            }
        </div>
    )
}