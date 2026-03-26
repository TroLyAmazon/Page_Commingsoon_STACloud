import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </BaseIcon>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m13 2-8 11h6l-1 9 8-11h-6l1-9Z" />
    </BaseIcon>
  );
}

export function CardStackIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </BaseIcon>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 18.5c1.8-1.4 3.5-2.1 5.1-2.1h7.4A2.5 2.5 0 0 0 20 13.9V6.5A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5V16l1 2.5Z" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </BaseIcon>
  );
}

export function CheckShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 7 3v5c0 4.2-2.6 8-7 10-4.4-2-7-5.8-7-10V6l7-3Z" />
      <path d="m9.4 11.6 1.8 1.8 3.8-4" />
    </BaseIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.8v4.7l3.1 1.9" />
    </BaseIcon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-2.7 6.1-6.1 2.7 2.7-6.1 6.1-2.7Z" />
    </BaseIcon>
  );
}

export function CubeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
      <path d="m12 12 7-5" />
      <path d="M12 12 5 7" />
      <path d="M12 12v9" />
    </BaseIcon>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 3.5h6l4 4v12A1.5 1.5 0 0 1 16.5 21h-9A1.5 1.5 0 0 1 6 19.5v-14A2 2 0 0 1 8 3.5Z" />
      <path d="M14 3.5v4h4" />
      <path d="M9 12h6" />
      <path d="M9 15h6" />
    </BaseIcon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4" />
      <path d="M12 3.5c2.3 2.4 3.6 5.4 3.6 8.5S14.3 18.1 12 20.5c-2.3-2.4-3.6-5.4-3.6-8.5S9.7 5.9 12 3.5Z" />
    </BaseIcon>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </BaseIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </BaseIcon>
  );
}

export function LifeBuoyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="m8.8 8.8-2.5-2.5" />
      <path d="m15.2 8.8 2.5-2.5" />
      <path d="m8.8 15.2-2.5 2.5" />
      <path d="m15.2 15.2 2.5 2.5" />
    </BaseIcon>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5.5" y="10" width="13" height="10" rx="2.2" />
      <path d="M8.5 10V7.8A3.5 3.5 0 0 1 12 4.3a3.5 3.5 0 0 1 3.5 3.5V10" />
    </BaseIcon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20.5s5.5-4.9 5.5-9a5.5 5.5 0 1 0-11 0c0 4.1 5.5 9 5.5 9Z" />
      <circle cx="12" cy="11.5" r="1.8" />
    </BaseIcon>
  );
}

export function ServerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01" />
      <path d="M8 17h.01" />
      <path d="M12 7h4" />
      <path d="M12 17h4" />
    </BaseIcon>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 1.9 4.8L19 9.7l-5.1 1.9L12 16.5l-1.9-4.9L5 9.7l5.1-1.9L12 3Z" />
      <path d="m5 18 1 2" />
      <path d="m18 5 1 2" />
    </BaseIcon>
  );
}

export function TicketIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V10a2 2 0 0 0 0 4v1.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 15.5V14a2 2 0 0 0 0-4V8.5Z" />
      <path d="M12 6v12" />
    </BaseIcon>
  );
}

export function TriangleAlertIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4.5 20 19H4l8-14.5Z" />
      <path d="M12 9v4.6" />
      <path d="M12 16.6h.01" />
    </BaseIcon>
  );
}
