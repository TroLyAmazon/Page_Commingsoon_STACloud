export const homeConfig = {
  name: 'STACloud',
  tagline: 'Low Latency • High Performance',
  panelUrl: 'https://panel.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  freeServerUrl: '/free-server',
  logoAlt: 'STACloud',
  summary:
    'STACloud xây dựng hạ tầng cho gaming panel, VPS và free server với trải nghiệm quản trị rõ ràng, tốc độ cao và phong cách vận hành nghiêm túc.',
};

export const heroStats = [
  { value: '24/7', label: 'Giám sát hạ tầng' },
  { value: '99.99%', label: 'Uptime mục tiêu' },
  { value: '10Gbps', label: 'Network uplink' },
  { value: '3', label: 'Dòng sản phẩm chính' },
] as const;

export const heroSignals = [
  'Gaming panel trên nền Jexactyl fork',
  'VPS routing tối ưu cho workload dev',
  'Free server cho cộng đồng đang hoạt động',
] as const;

export const products = [
  {
    title: 'Gaming Panel',
    eyebrow: 'Game Hosting',
    description:
      'Quản lý server game trên panel rõ ràng, tối ưu cho Minecraft, bot game và cộng đồng nhỏ cần cấp phát nhanh.',
    chips: ['Panel Control', 'Instant Deploy', 'DDoS Guard'],
  },
  {
    title: 'VPS Compute',
    eyebrow: 'Virtual Infrastructure',
    description:
      'Phù hợp cho workload backend, automation, web app và dịch vụ cần môi trường linh hoạt hơn hosting chia sẵn.',
    chips: ['Compute Ready', 'Low Latency', 'Stable Routing'],
  },
  {
    title: 'Free Server',
    eyebrow: 'Community Tier',
    description:
      'Tài nguyên miễn phí cho cộng đồng học tập, thử nghiệm và vận hành server nhỏ với quy trình đăng ký rõ ràng.',
    chips: ['Discord Ticket', 'Fast Review', 'Policy Clear'],
  },
] as const;

export const features = [
  {
    title: 'Mạng dành cho hạ tầng thật',
    description:
      'Không chỉ là một landing đẹp. STACloud được định hình như một lớp hạ tầng có giám sát, tuyến tốt và định hướng scale rõ ràng.',
  },
  {
    title: 'Panel điều khiển dễ nắm',
    description:
      'Người dùng mới vẫn có thể triển khai, theo dõi tài nguyên và vận hành server mà không bị ngợp bởi giao diện rối.',
  },
  {
    title: 'Thiết kế cho gaming và dev',
    description:
      'Từ game panel đến bot, web app và workload backend nhẹ, hệ thống được sắp theo đúng nhu cầu cộng đồng thường dùng.',
  },
  {
    title: 'Bảo vệ và uptime',
    description:
      'DDoS protection, giám sát 24/7 và network uplink lớn giúp dịch vụ giữ phong cách của một nhà cung cấp hạ tầng thật sự.',
  },
  {
    title: 'Quy trình cấp phát nhanh',
    description:
      'Free server và các gói vận hành được trình bày theo flow ngắn, giúp support xử lý nhanh và người dùng ít sai thông tin hơn.',
  },
  {
    title: 'Thương hiệu công nghệ rõ nét',
    description:
      'Phong cách giao diện hướng về control panel, network node và data infrastructure thay vì cảm giác của một landing chung chung.',
  },
] as const;

export const infrastructureItems = [
  {
    label: 'Control Layer',
    value: 'STA Cloud, Fork Jexactyl, built on Pterodactyl.',
    accent: 'cyan',
  },
  {
    label: 'Routing',
    value: 'VN + SG + HK Optimized',
    accent: 'amber',
  },
  {
    label: 'Support',
    value: '24/7 Discord',
    accent: 'emerald',
  },
  {
    label: 'Workloads',
    value: 'Gaming / VPS / Bot',
    accent: 'blue',
  },
] as const;

export const locations = [
  {
    name: 'Singapore',
    flagSrc: '/flags/singapore.svg',
    badge: 'Enterprise-grade facility',
    speed: '10 Gbps',
    uptime: '99.99% Uptime',
    availability: 'Free / Paid',
  },
  {
    name: 'Hongkong',
    flagSrc: '/flags/hong-kong.svg',
    badge: 'Enterprise-grade facility',
    speed: '5 Gbps',
    uptime: '99.99% Uptime',
    availability: 'Free / Paid',
  },
  {
    name: 'Việt Nam',
    flagSrc: '/flags/vietnam.svg',
    badge: 'Enterprise-grade facility',
    speed: '10 Gbps',
    uptime: '99.99% Uptime',
    availability: 'Only Paid',
  },
] as const;

export const testimonials = [
  {
    quote:
      'Ấn tượng nhất là giao diện panel và tốc độ phản hồi support. Nhìn và dùng đều có cảm giác của một dịch vụ hạ tầng chỉnh chu hơn hẳn.',
    author: 'Minh Trí',
    role: 'Người dùng cộng đồng',
  },
  {
    quote:
      'Điểm mạnh của STACloud là không cố làm mọi thứ mơ hồ. Rule rõ, location rõ và free server được vận hành như một phần thật của hệ thống.',
    author: 'Lê Nam',
    role: 'Developer',
  },
  {
    quote:
      'Mình dùng cho bot và test app nhỏ khá ổn. Nếu họ đẩy tiếp mảng VPS và gaming panel thì bộ nhận diện hiện tại rất hợp hướng công nghệ.',
    author: 'Quốc Bảo',
    role: 'Customer',
  },
] as const;

export const faqs = [
  'Tôi có thể bắt đầu với free server rồi nâng cấp sau không?',
  'STACloud hiện hỗ trợ những workload nào tốt nhất?',
  'VPS và gaming panel có cùng hệ thống quản trị không?',
  'Server của STACloud đang đặt ở đâu?',
  'Làm sao để xin thêm slot ở free panel?',
  'Vì sao server có thể bị suspended ở free tier?',
  'STACloud có hỗ trợ Minecraft server không?',
  'Kênh hỗ trợ nhanh nhất hiện tại là gì?',
] as const;
