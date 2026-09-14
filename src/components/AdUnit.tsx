interface AdUnitProps {
  slot: 'header' | 'footer' | 'in-content' | 'sidebar' | 'between-posts';
  className?: string;
}

/**
 * AdUnit — Generic Google AdSense placeholder component.
 *
 * HOW TO ACTIVATE ADSENSE:
 * 1. Add the AdSense script to src/app/layout.tsx (see comments there).
 * 2. Replace the placeholder <div> below with the real <ins> tag from your
 *    AdSense dashboard, using the corresponding data-ad-slot for each position.
 *
 * Example replacement:
 *   <ins
 *     className="adsbygoogle"
 *     style={{ display: 'block' }}
 *     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *     data-ad-slot="XXXXXXXXXX"
 *     data-ad-format="auto"
 *     data-full-width-responsive="true"
 *   />
 */
export default function AdUnit({ slot, className = '' }: AdUnitProps) {
  const heights: Record<AdUnitProps['slot'], string> = {
    header: 'h-24',
    footer: 'h-20',
    'in-content': 'h-28',
    sidebar: 'h-64',
    'between-posts': 'h-20',
  };

  return (
    <div
      id={`adsense-${slot}`}
      data-ad-slot={slot}
      className={`w-full flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded-lg ${heights[slot]} ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <span className="text-xs text-gray-300 select-none font-medium tracking-wide uppercase">
        Advertisement · {slot}
      </span>
    </div>
  );
}
