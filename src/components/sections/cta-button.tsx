import { Heart } from 'lucide-react';

const CtaButton = () => {
  return (
    <>
      <a
        href="https://giftclick.org/aff_c?offer_id=4339&aff_id=64391"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 text-[#24180e] font-bold text-xs rounded-lg shadow-2xl border border-[#4b3114]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,184,0,0.34)] mb-1.5 w-full md:w-auto relative !mx-0 !py-2 !rounded-[18px] !bg-[linear-gradient(90deg,#ffcc18_0%,#f3b302_100%)] !px-2.5 hover:brightness-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Heart
          className="w-2.5 h-2.5 mr-1 text-[#24180e]/90 animate-pulse"
          fill="currentColor"
        />
        START REVIEW →
        <Heart
          className="w-2.5 h-2.5 ml-1 text-[#24180e]/90 animate-pulse"
          fill="currentColor"
        />
      </a>
      <p className="text-[#4b3114] text-[9px] italic mb-2">
        (Instant approval · No purchase required)
      </p>
    </>
  );
};

export default CtaButton;
