'use client';

interface FilterPillsProps {
  labels: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function FilterPills({
  labels,
  activeIndex,
  onSelect,
}: FilterPillsProps) {
  return (
    <div className='flex flex-wrap gap-3 mb-8'>
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`cursor-pointer px-4 py-1.5 rounded-full text-sm border transition
            ${
              i === activeIndex
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-foreground-muted hover:bg-background-muted'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
