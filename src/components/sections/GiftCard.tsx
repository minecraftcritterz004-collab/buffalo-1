import Image from 'next/image';
import React from 'react';

const GiftCard = () => {
  return (
    <a
      href="https://www.buffalowildwings.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Buffalo Wild Wings"
      className="flex items-center justify-center p-6"
    >
        <div className="relative w-[280px] h-[170px] mt-[1rem] m-auto">
          <Image
            src="/card.png"
            alt="Buffalo Wild Wings Gift Card"
            fill
            className="drop-shadow-2xl rounded-[1em]"
          />
        </div>
    </a>
  );
};

export default GiftCard;
