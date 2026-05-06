export const homeConfig = {
  name: 'STACloud',
  tagline: 'Portal, VPS & Community Plans',
  panelUrl: 'https://portal.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  zaloUrl: 'https://zalo.me/g/ekaldlnq5sqdn37lvikk',
  freeServerUrl: '/free-server',
  logoAlt: 'STACloud',
  summary:
    'STACloud giúp bạn xem giá, cấu hình, trạng thái slot, OpenClaw Beta và các gói VPS mới ở cùng một nơi để chọn dịch vụ phù hợp nhanh hơn.',
  testerAlertMessage:
    'Cảnh báo: TESTER là node tài trợ, có thể bị can thiệp hoặc sập bất ngờ bất cứ lúc nào. Bạn phải tự backup dữ liệu; STACloud không chịu trách nhiệm về mất mát dữ liệu trên node này.',
};

export const heroStats = [
  { value: '8', label: 'Gói / dịch vụ đang công bố' },
  { value: '24 + 10', label: 'Slots DEV / MC SG' },
  { value: '66k+', label: 'VPS OVH SG / tháng' },
  { value: '0$', label: 'OpenClaw / TESTER' },
] as const;

export const heroSignals = [
  'Portal và store chính thức tại portal.stacloud.dev',
  'OpenClaw Beta miễn phí, cần domain riêng và xác minh qua ticket',
  'Đã bổ sung PROXY HK, Intel Xeon và AMD EPYC Singapore',
] as const;

export const heroStatusStrip = [
  { label: 'TESTER', detail: 'Node tài trợ', value: '0$ / 0 VNĐ', tone: 'rose' },
  { label: 'DEV / MC SG', detail: 'AMD Milan', value: '5.000đ / 8.000đ', tone: 'emerald' },
  { label: 'OPENCLAW', detail: 'Beta miễn phí', value: 'Cần domain riêng', tone: 'blue' },
  { label: 'PROXY HK', detail: 'Hết slot', value: 'Shield 20k / 1GB', tone: 'amber' },
  { label: 'STA-XEON-01', detail: 'OVH Singapore', value: '66.000đ / tháng', tone: 'cyan' },
  { label: 'STA-AMD-EPYC-01 / STA-AMD-EPYC-02', detail: 'AMD EPYC', value: '129k / 249k', tone: 'blue' },
] as const;

export const dashboardEntries = [
  {
    label: 'Portal',
    value: 'portal.stacloud.dev',
    meta: 'Đăng nhập và quản lý',
    tone: 'cyan',
  },
  {
    label: 'Status',
    value: '🗺️｜server-status-and-slot',
    meta: 'Theo dõi tài nguyên',
    tone: 'amber',
  },
  {
    label: 'Support',
    value: 'Discord / Zalo',
    meta: 'Kênh hỗ trợ cộng đồng',
    tone: 'emerald',
  },
  {
    label: 'Routing',
    value: 'VN + SG + HK',
    meta: 'Khu vực triển khai',
    tone: 'blue',
  },
] as const;

export const products = [
  {
    title: 'Portal Gaming',
    eyebrow: 'Điều Khiển',
    description:
      'Quản lý game server, node và store trên cùng một portal thuận tiện, rõ ràng và dễ sử dụng.',
    chips: ['Portal', 'Store', 'Fast Control'],
  },
  {
    title: 'VPS OVH Singapore',
    eyebrow: 'Hạ Tầng',
    description:
      'Có thêm Intel Xeon tiết kiệm chi phí và AMD EPYC hiệu năng cao cho bot, web app, game server, test lab hoặc workload cần nhiều RAM.',
    chips: ['STA-XEON-01', 'STA-AMD-EPYC-01', 'STA-AMD-EPYC-02'],
  },
  {
    title: 'Gói Cộng Đồng',
    eyebrow: 'Service Plans',
    description:
      'So sánh nhanh TESTER, DEV SG, MC SG và PROXY HK với giá, cấu hình, trạng thái slot và cảnh báo quan trọng.',
    chips: ['TESTER', 'DEV SG', 'MC SG'],
  },
  {
    title: 'OpenClaw Beta',
    eyebrow: 'Free Beta',
    description:
      'OpenClaw đã mở miễn phí cho cộng đồng. Bạn cần có domain riêng để xác minh và gán vào hệ thống qua ticket.',
    chips: ['OpenClaw', 'Free Beta', 'Domain Required'],
  },
] as const;

export const features = [
  {
    title: 'Giá và cấu hình rõ ràng',
    description:
      'Mỗi gói đều hiển thị đầy đủ giá, CPU, RAM, disk, location, trạng thái và tùy chọn nâng cấp để bạn dễ so sánh.',
  },
  {
    title: 'Đăng ký nhanh qua ticket',
    description:
      'Bạn có thể xem gói phù hợp trước, rồi vào Discord hoặc Zalo để liên hệ hỗ trợ mà không mất thời gian hỏi lại thông tin cơ bản.',
  },
  {
    title: 'Theo dõi trạng thái dễ dàng',
    description:
      'Portal, kênh trạng thái và thông tin gói được đặt cùng một luồng để bạn theo dõi slot, tài nguyên còn lại và thông báo mới.',
  },
  {
    title: 'Phù hợp nhiều nhu cầu',
    description:
      'Từ bot, app nhỏ, máy chủ Minecraft, OpenClaw Beta đến VPS Xeon/EPYC cho workload cần RAM và CPU tốt hơn.',
  },
  {
    title: 'Hạ tầng OVH Singapore',
    description:
      'Các gói trả phí chính dùng OVH Singapore, có AntiDDoS và độ trễ phù hợp cho người dùng tại Việt Nam.',
  },
  {
    title: 'Chính sách minh bạch',
    description:
      'Điều khoản, quyền riêng tư, SLA, cảnh báo dữ liệu TESTER và lưu ý OpenClaw đều được công bố rõ ràng trước khi đăng ký.',
  },
] as const;

export const locations = [
  {
    name: 'Singapore',
    flagSrc: '/flags/singapore.svg',
    badge: 'OVH SG Focus',
    speed: '10 Gbps',
    uptime: '99.99% Uptime',
    availability: 'Free / Paid',
  },
  {
    name: 'Hong Kong',
    flagSrc: '/flags/hong-kong.svg',
    badge: 'Proxy HK',
    speed: '5 Gbps',
    uptime: 'Paused Slot',
    availability: 'Proxy Paused',
  },
  {
    name: 'Việt Nam',
    flagSrc: '/flags/vietnam.svg',
    badge: 'OpenClaw Recommended',
    speed: '10 Gbps',
    uptime: '99.99% Uptime',
    availability: 'OpenClaw / Paid',
  },
] as const;

export const testimonials = [
  {
    quote:
      'Mình vào trang là biết ngay gói nào phù hợp, giá bao nhiêu và gói nào cần tự backup dữ liệu.',
    author: 'Minh Trí',
    role: 'Người dùng cộng đồng',
  },
  {
    quote:
      'Thông tin giá, upsize và cảnh báo được ghi rõ nên mình không phải hỏi đi hỏi lại trước khi đăng ký.',
    author: 'Lê Nam',
    role: 'Developer',
  },
  {
    quote:
      'Portal, trạng thái dịch vụ và chính sách được đặt cùng một nơi nên dễ theo dõi hơn nhiều.',
    author: 'Quốc Bảo',
    role: 'Customer',
  },
] as const;

export const faqs = [
  'Tôi nên chọn TESTER, DEV SG, MC SG hay VPS trả phí?',
  'OpenClaw Beta cần chuẩn bị domain như thế nào?',
  'Phụ phí upsize của DEV SG và MC SG hiện là bao nhiêu?',
  'Gói TESTER có những rủi ro gì cần lưu ý?',
  'PROXY HK hiện còn mở hay đã tạm ngưng?',
  'STA-XEON-01, STA-AMD-EPYC-01 và STA-AMD-EPYC-02 cần đặt trước bao lâu?',
  'Tôi kiểm tra tài nguyên còn lại ở đâu?',
  'Với OpenClaw nên chọn Singapore, Việt Nam hay Hong Kong?',
  'Kênh Discord nào là nơi hỗ trợ nhanh nhất hiện tại?',
] as const;
