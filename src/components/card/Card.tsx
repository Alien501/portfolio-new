import { PersonSpeakIcon } from '../shared/icons/person-speak'
import './Card.css'

interface CardProps {
    title: string,
    child: React.JSX.Element
    icon?: React.JSX.Element
}

export default function Card({title, child, icon=<PersonSpeakIcon />}: CardProps) {
    return(
        <div className="card-container relative h-full perspective-1000 overflow-hidden card outline outline-primary-light/10">
            <div className="h-full bg-primary-dark/2 p-2 backdrop-blur-2xl hover:outline hover:outline-primary-light/10 hover:box-shadow
                            hover:bg-gradient-to-b hover:from-[var(--border-from-color)]
                            hover:to-[var(--border-to-color)] hover:bg-clip-content-box
                            hover:shadow-[var(--shadow-inset)]
                            transition-all duration-300"
            >
                <div className="absolute inset-4 pointer-events-none corner-dots"></div>
                <div className="relative z-10">
                    <div className="card-title-wrapper flex justify-center -space-x-[0.5] -top-2 items-center">
                        <span>{icon}</span>
                        <p className="font-aeonik-bold text-xl text-gradient text-center relative z-10 card-heading-text overflow-hidden p-[0.5]">{title}</p>
                    </div>
                    <div className="h-full mt-4 card-child-container font-wotfard text-xs tracking-wide leading-4 text-primary-dark/80 overflow-y-scroll thin-scrollbar">
                        {child}
                    </div>
                </div>
            </div>
        </div>
    )
}