import './Card.css'

interface CardProps {
    title: string,
    child: React.JSX.Element
}

export default function Card({title, child}: CardProps) {
    return(
        <div className="relative h-full perspective-1000 rounded-2xl overflow-hidden card outline outline-primary-light/10">
            <div className="h-full bg-primary-dark/2 p-2 backdrop-blur-2xl rounded-2xl outline outline-primary-light/10 box-shadow bg-gradient-to-b from-[rgba(186,207,247,0.04)] to-[rgba(186,207,247,0.01)] bg-clip-content-box shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.1),inset_0_24px_48px_0_rgba(168,216,245,0.02),0_16px_32px_rgba(0,0,0,0.1)]
                            hover:bg-gradient-to-b hover:from-[rgba(186,207,247,0.04)] hover:to-[rgba(186,207,247,0.04)] hover:shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.2),inset_0_24px_48px_0_rgba(168,216,245,0.06),0_16px_32px_rgba(0,0,0,0.3)]
                            transition-all duration-300
            ">
                <div className="absolute inset-4 pointer-events-none corner-dots"></div>
                <div className="relative z-10">
                    <div className="card-title-wrapper">
                        <p className="font-aeonik-bold text-xl text-gradient text-shadow text-center">{title}</p>
                    </div>
                    <div className="h-full card-child-container font-untitle-sans-light text-xs tracking-wide leading-4 text-primary-dark/80 overflow-y-scroll thin-scrollbar">
                        {child}
                    </div>
                </div>
            </div>
        </div>
    )
}