type Section3DAccentProps = {
  variant?:
    | 'pricing'
    | 'network'
    | 'location'
    | 'catalog'
    | 'legal'
    | 'workflow'
    | 'community'
    | 'service';
  size?: 'compact' | 'default' | 'wide';
  className?: string;
};

const chipLabels = ['AI', 'Linux', 'MC', 'VPS'] as const;
const nodeNames = ['one', 'two', 'three', 'four', 'five'] as const;

function PricingVisual() {
  return (
    <>
      <div className="visual-price-card visual-price-card-main">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-price-card visual-price-card-side">
        <span />
        <span />
      </div>
      <div className="visual-price-token visual-price-token-one" />
      <div className="visual-price-token visual-price-token-two" />
      <div className="visual-price-bar visual-price-bar-one" />
      <div className="visual-price-bar visual-price-bar-two" />
      <div className="visual-price-bar visual-price-bar-three" />
    </>
  );
}

function NetworkVisual() {
  return (
    <>
      <div className="visual-network-core" />
      {nodeNames.map((name) => (
        <div key={name} className={`visual-network-node visual-network-node-${name}`} />
      ))}
      <div className="visual-network-line visual-network-line-one" />
      <div className="visual-network-line visual-network-line-two" />
      <div className="visual-network-line visual-network-line-three" />
      <div className="visual-network-line visual-network-line-four" />
      <div className="visual-network-ring" />
    </>
  );
}

function LocationVisual() {
  return (
    <>
      <div className="visual-location-radar" />
      <div className="visual-location-pin">
        <span />
      </div>
      <div className="visual-location-route visual-location-route-one" />
      <div className="visual-location-route visual-location-route-two" />
      <div className="visual-location-dot visual-location-dot-one" />
      <div className="visual-location-dot visual-location-dot-two" />
      <div className="visual-location-dot visual-location-dot-three" />
    </>
  );
}

function CatalogVisual() {
  return (
    <>
      <div className="visual-catalog-panel">
        {chipLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div className="visual-catalog-folder visual-catalog-folder-one" />
      <div className="visual-catalog-folder visual-catalog-folder-two" />
      <div className="visual-catalog-search">
        <span />
      </div>
      <div className="visual-catalog-cursor" />
    </>
  );
}

function LegalVisual() {
  return (
    <>
      <div className="visual-legal-doc visual-legal-doc-back" />
      <div className="visual-legal-doc visual-legal-doc-front">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-legal-shield">
        <span />
      </div>
      <div className="visual-legal-lock" />
    </>
  );
}

function WorkflowVisual() {
  return (
    <>
      <div className="visual-workflow-line" />
      <div className="visual-workflow-step visual-workflow-step-one">1</div>
      <div className="visual-workflow-step visual-workflow-step-two">2</div>
      <div className="visual-workflow-step visual-workflow-step-three">3</div>
      <div className="visual-workflow-panel">
        <span />
        <span />
      </div>
    </>
  );
}

function CommunityVisual() {
  return (
    <>
      <div className="visual-community-ring" />
      <div className="visual-community-bubble visual-community-bubble-main" />
      <div className="visual-community-bubble visual-community-bubble-side" />
      <div className="visual-community-avatar visual-community-avatar-one" />
      <div className="visual-community-avatar visual-community-avatar-two" />
      <div className="visual-community-avatar visual-community-avatar-three" />
      <div className="visual-community-link visual-community-link-one" />
      <div className="visual-community-link visual-community-link-two" />
    </>
  );
}

function ServiceVisual() {
  return (
    <>
      <div className="visual-service-tower">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="visual-service-panel">
        <span />
        <span />
      </div>
      <div className="visual-service-meter visual-service-meter-one" />
      <div className="visual-service-meter visual-service-meter-two" />
      <div className="visual-service-glass" />
    </>
  );
}

function renderVariant(variant: NonNullable<Section3DAccentProps['variant']>) {
  switch (variant) {
    case 'catalog':
      return <CatalogVisual />;
    case 'community':
      return <CommunityVisual />;
    case 'legal':
      return <LegalVisual />;
    case 'location':
      return <LocationVisual />;
    case 'network':
      return <NetworkVisual />;
    case 'workflow':
      return <WorkflowVisual />;
    case 'service':
      return <ServiceVisual />;
    default:
      return <PricingVisual />;
  }
}

export function Section3DAccent({
  variant = 'service',
  size = 'default',
  className = '',
}: Section3DAccentProps) {
  return (
    <div
      aria-hidden="true"
      className={`visual-3d visual-3d--${variant} visual-3d--${size} ${className}`.trim()}
    >
      <div className="visual-3d-floor" />
      <div className="visual-3d-glow" />
      {renderVariant(variant)}
    </div>
  );
}
