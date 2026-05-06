'use client';

import { Clock, Flame, TicketPercent, Drumstick } from 'lucide-react';
import { useState, useEffect } from 'react';

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(309); // 5:09 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="border-b border-primary/20 py-2 px-4 text-center relative z-10 overflow-hidden bg-[linear-gradient(90deg,#ffe57a_0%,#ffc800_45%,#f0b100_100%)]">
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <div className="flex justify-around">
          <Flame className="w-6 h-6 text-primary/20 -mt-2" />
          <TicketPercent className="w-4 h-4 text-primary/15 -mt-1" />
          <Drumstick className="w-5 h-5 text-primary/20 -mt-2" />
          <Flame className="w-5 h-5 text-primary/15 -mt-2" />
          <TicketPercent className="w-4 h-4 text-primary/15 -mt-1" />
          <Drumstick className="w-6 h-6 text-primary/20 -mt-2" />
          <Flame className="w-5 h-5 text-primary/15 -mt-2" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 max-w-xl mx-auto relative">
        <Clock className="w-4 h-4 text-[#24180e] flex-shrink-0" />
        <Flame className="w-3 h-3 text-[#4b3114]/60 animate-pulse flex-shrink-0" />
        <p className="text-[#24180e] text-xs md:text-sm font-medium">
          <span className="font-bold">
            You have {formattedTime} minutes left to unlock your $750 Buffalo
            Wild Wings Gift Card!
          </span>
        </p>
        <Flame className="w-3 h-3 text-[#4b3114]/60 animate-pulse flex-shrink-0" />
      </div>

      <p className="text-[#4b3114] text-[10px] mt-0.5">
        Complete the steps before access expires
      </p>
    </div>
  );
};

export default CountdownBanner;
