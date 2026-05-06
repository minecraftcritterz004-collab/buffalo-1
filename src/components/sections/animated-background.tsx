import React from 'react';
import {
  Flame,
  BadgePercent,
  CreditCard,
  Drumstick,
  Trophy,
} from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Flame className="absolute top-20 left-10 w-12 h-12 text-primary animate-rotate-slow" />
        <BadgePercent className="absolute top-40 left-20 w-8 h-8 text-accent animate-float-spin" />
        <Drumstick className="absolute top-32 right-16 w-10 h-10 text-primary/80 animate-twinkle" />
        <CreditCard className="absolute bottom-40 left-16 w-10 h-10 text-accent animate-rotate-reverse" />
        <Trophy className="absolute bottom-60 right-20 w-12 h-12 text-primary animate-float-gentle" />
        <Flame className="absolute top-1/2 left-8 w-8 h-8 text-accent animate-rotate-slow" />
        <BadgePercent className="absolute top-1/3 right-12 w-8 h-8 text-primary/80 animate-float-spin" />
      </div>
    </>
  );
};

export default AnimatedBackground;
