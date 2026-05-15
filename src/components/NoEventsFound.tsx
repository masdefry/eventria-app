interface NoEventsFoundProps {
  activeFilterLabel: string;
  onReset: () => void;
}

export function NoEventsFound({
  activeFilterLabel,
  onReset,
}: NoEventsFoundProps) {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-center'>
      <span className='text-5xl mb-4'>🎭</span>
      <h3 className='text-lg font-semibold text-foreground mb-1'>
        No events found
      </h3>
      <p className='text-sm text-foreground-muted mb-4'>
        There are no events for{' '}
        <span className='font-medium text-foreground'>{activeFilterLabel}</span>{' '}
        right now.
      </p>
      <button
        onClick={onReset}
        className='text-sm text-primary hover:underline cursor-pointer'
      >
        ← Back to All Fun
      </button>
    </div>
  );
}
