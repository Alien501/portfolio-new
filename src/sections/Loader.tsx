"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ShinyBorder from "@/components/shared/ShinyBorder";
import AlienIcon from "@/components/shared/icons/alien";

interface KuralData {
  kural: {
    Number: number;
    Line1: string;
    Line2: string;
    Translation: string;
    mv: string;
    sp: string;
    mk: string;
    couplet: string;
    explanation: string;
    transliteration1: string;
    transliteration2: string;
  };
  adhigaram: {
    name: string;
    translation: string;
    transliteration: string;
    number: number;
    start: number;
    end: number;
  };
}

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [kuralData, setKuralData] = useState<KuralData | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const getKural = async () => {
    try {
      const kural = await fetch(
        "https://thirukural-six.vercel.app/api/v1/kural/random"
      );
      if (kural.status == 200) {
        const data = await kural.json();
        setKuralData(data.data);
        setLoading(false);
        setTimeout(() => setShowContent(true), 500);
      }
    } catch (error) {
      console.error("Something went wrong while fetching kural!");
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getKural();
  }, []);

  useEffect(() => {
    if(contentRef.current) {
        gsap.timeline({
            defaults: {
                duration: .8
            }
        }).from('.tamil-text-1', {
            opacity: 0,
            duration: 1,
        }).from('.tamil-text-2', {
            opacity: 0,
        }, '0.8').from('.tamil-text-data', {
            opacity: 0
        }).from('.split-line', {
            scaleX: 0,
            transformOrigin: 'center'
        }).from('.en-text', {
            opacity: 0
        }).from('.en-text-data', {
            opacity: 0
        }).from('.continue-button', {
            y: 100,
            opacity: 0,
        }).play()
    }
  }, [showContent]);

  if (!showContent) {
    return (
      <div className="absolute left-0 top-0 bottom-0 right-0 flex items-center justify-center bg-black/0 backdrop-blur-ssm z-50">
        <div className="text-center">
          <AlienIcon />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-0 right-0 bottom-0">
        <div ref={contentRef} className="flex justify-center items-center flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] overflow-hidden">
            <div className="-space-y-2 text-left font-tamil text-2xl leading-snug mx-auto">
                <p className="tamil-text-1 text-gradient">&ldquo;{kuralData?.kural.Line1}</p>
                <p className="tamil-text-2 text-gradient">{kuralData?.kural.Line2}&rdquo;</p>
                <div className="flex justify-end -mt-3">
                    <span className="tamil-text-data text-gradient text-right">- {kuralData?.adhigaram.name} (குறள் {kuralData?.kural.Number})</span>
                </div>
            </div>
            <br />
            <span className="w-[320px] split-line h-0.5 bg-primary-light/50"></span>
            <br />
            <div className="-space-y-2 text-left font-tamil text-xl leading-snug mx-auto">
                <p className="en-text text-gradient">&ldquo;{kuralData?.kural.Translation}&rdquo;</p>
                <div className="flex justify-end -mt-2">
                    <span className="en-text-data text-gradient text-right">- {kuralData?.adhigaram.translation} (Couplet {kuralData?.kural.Number})</span>
                </div>
            </div>
            <br />
            <div className="continue-button">
                <button onClick={onComplete} className="bg-primary-dark/10 outline outline-primary-light/0 relative rounded-md h-[32px] flex items-center justify-center cursor-pointer hover:shadow-[var(--shadow-inset)] transition-all duration-300">
                    <span className="text-sm pl-8 pr-8 pt-0 pb-0 font-wotfard text-primary-dark">Go in</span>
                    <ShinyBorder />
                </button>
            </div>
        </div>
    </div>
  );
}
