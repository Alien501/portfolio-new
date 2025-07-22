import ShinyBorder from "@/components/shared/ShinyBorder";

export default function Resume() {
  return (
    <div className="h-[80px] flex justify-center items-center">
      <a
        target="_"
        href="/others/Vignesh's Resume.pdf"
        role="button"
        className="bg-primary-dark/10 outline outline-primary-light/0 relative rounded-md h-[32px] flex items-center justify-center cursor-pointer hover:shadow-[var(--shadow-inset)] transition-all duration-300"
      >
        <span className="text-sm pl-8 pr-8 pt-0 pb-0">Resume</span>
        <ShinyBorder />
      </a>
    </div>
  );
}
