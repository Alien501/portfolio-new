import { PersonSpeakIcon } from '../shared/icons/person-speak'
import './Card.css'

interface CardProps {
    title: string,
    child: React.JSX.Element
    icon?: React.JSX.Element
}

export default function Card({title, child, icon=<PersonSpeakIcon />}: CardProps) {
    return(
        <div className="relative h-full perspective-1000 rounded-2xl overflow-hidden card outline outline-primary-light/10">
            <div className="h-full bg-primary-dark/2 p-2 backdrop-blur-2xl rounded-2xl outline outline-primary-light/10 box-shadow
                            bg-gradient-to-b from-[var(--border-from-color)]
                            to-[var(--border-to-color)] bg-clip-content-box
                            shadow-[var(--shadow-inset)]
                            hover:bg-gradient-to-b hover:from-[var(--border-from-color)] hover:to-[var(--border-from-color)]
                            hover:shadow-[var(--shadow-inset-hover)]
                            transition-all duration-300"
            >
                <div className="absolute inset-4 pointer-events-none corner-dots"></div>
                <div className="relative z-10">
                    <div className="card-title-wrapper flex justify-center -space-x-[0.5] -top-2 items-center">
                        <span>{icon}</span>
                        <p className="font-aeonik-bold text-xl text-gradient text-shadow text-center">{title}</p>
                    </div>
                    <div className="h-full card-child-container font-wotfard text-xs tracking-wide leading-4 text-primary-dark/80 overflow-y-scroll thin-scrollbar">
                        {child}
                    </div>
                </div>
            </div>
        </div>
    )
}