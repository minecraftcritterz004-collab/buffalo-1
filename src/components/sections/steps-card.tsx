import { MousePointerClick, Mail, CircleHelp, TicketPercent, Trophy } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    text: 'Click the "Start Review" button',
  },
  {
    icon: Mail,
    text: 'Enter your email and basic details',
  },
  {
    icon: CircleHelp,
    text: 'Answer the required questions',
  },
  {
    icon: TicketPercent,
    text: 'Complete 4–5 partner offers',
  },
  {
    icon: Trophy,
    text: 'Unlock Buffalo Wild Wings Rewards',
  },
];

const StepsCard = () => {
  return (
    <div className="relative rounded-lg mb-2 border border-primary/35 bg-white/88 shadow-[0_18px_60px_rgba(75,49,20,0.12)] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255,204,24,0.18), rgba(255,255,255,0.12)), url(\'/aerie-background.jpeg\')',
          opacity: 0.18,
        }}
      />

      <ol className="relative z-10 text-left space-y-1 text-foreground p-2.5 !text-base !rounded-none">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={index}
              className="flex items-start gap-1.5 text-[13px] md:text-sm"
            >
              <span
                className="flex-shrink-0 w-4 h-4 text-white rounded-full flex items-center justify-center font-bold text-[9px] mt-0.5"
                style={{ backgroundColor: '#4b3114' }}
              >
                {index + 1}
              </span>
              <div className="flex items-center gap-1 flex-1">
                <span className="flex-shrink-0 text-primary">
                  <Icon className="w-2.5 h-2.5" />
                </span>
                <span className="text-[#24180e] font-medium">{step.text}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StepsCard;
