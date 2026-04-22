export const homeConfig = {
  name: 'STACloud',
  tagline: 'Portal, VPS & Community Plans',
  panelUrl: 'https://portal.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  zaloUrl: 'https://zalo.me/g/ekaldlnq5sqdn37lvikk',
  freeServerUrl: '/free-server',
  logoAlt: 'STACloud',
  summary:
    'STACloud giúp bạn xem giá, cấu hình, trạng thái gói, OpenClaw Beta và kênh hỗ trợ ở cùng một nơi để chọn dịch vụ phù hợp nhanh hơn.',
  testerAlertMessage:
    'Cảnh báo: TESTER là node tài trợ, có thể bị can thiệp hoặc gián đoạn bất ngờ. Bạn phải tự backup dữ liệu; STACloud không chịu trách nhiệm về mất mát dữ liệu trên node này.',
};

export const heroStats = [
  { value: '5', label: 'Dịch vụ đang công bố' },
  { value: '24 + 10', label: 'Slots DEV / MC' },
  { value: '2', label: 'Gói có upsize' },
  { value: '0$', label: 'OpenClaw / TESTER' },
] as const;

export const heroSignals = [
  'Portal và store chính thức tại portal.stacloud.dev',
  'OpenClaw Beta đã mở miễn phí cho cộng đồng',
  'Giá và cấu hình DEV / MC đã được cập nhật mới nhất',
] as const;

export const heroStatusStrip = [
  { label: 'DEV', detail: '24 slots', value: '5.000 VNĐ (0.3$)', tone: 'emerald' },
  { label: 'MC', detail: '10 slots', value: '8.000 VNĐ (0.5$)', tone: 'cyan' },
  { label: 'OPENCLAW', detail: 'Beta miễn phí', value: 'Cần domain riêng', tone: 'blue' },
  { label: 'PROXY', detail: 'Tạm ngưng', value: 'Không mở mới', tone: 'amber' },
  { label: 'TESTER', detail: 'Node tài trợ', value: '0$ / 0 VNĐ', tone: 'rose' },
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
    title: 'VPS Compute',
    eyebrow: 'Hạ Tầng',
    description:
      'Phù hợp cho backend, automation, bot và các workload cần môi trường linh hoạt, ổn định.',
    chips: ['Compute Ready', 'Low Latency', 'Stable Routing'],
  },
  {
    title: 'Gói Cộng Đồng',
    eyebrow: 'Service Plans',
    description:
      'So sánh nhanh DEV, MC, PROXY FREE và TESTER với giá, cấu hình, trạng thái và cảnh báo quan trọng.',
    chips: ['DEV', 'MC', 'TESTER'],
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
      'Mỗi gói đều hiển thị đầy đủ giá, cấu hình, trạng thái và tùy chọn nâng cấp để bạn dễ so sánh.',
  },
  {
    title: 'Đăng ký nhanh',
    description:
      'Bạn có thể xem gói phù hợp trước, rồi vào Discord hoặc Zalo để liên hệ hỗ trợ mà không mất thời gian hỏi lại thông tin cơ bản.',
  },
  {
    title: 'Theo dõi trạng thái dễ dàng',
    description:
      'Portal, kênh trạng thái và thông tin gói được đặt cùng một luồng để bạn theo dõi nhanh hơn.',
  },
  {
    title: 'Phù hợp nhiều nhu cầu',
    description:
      'Từ bot, app nhỏ, máy chủ Minecraft đến môi trường test nhanh, mỗi gói đều có mục đích sử dụng rõ ràng.',
  },
  {
    title: 'Kênh hỗ trợ rõ ràng',
    description:
      'Discord và Zalo cộng đồng được đặt ngay trên trang để bạn biết liên hệ ở đâu khi cần hỗ trợ.',
  },
  {
    title: 'Chính sách minh bạch',
    description:
      'Điều khoản, quyền riêng tư, SLA và cảnh báo dữ liệu đều được công bố công khai để bạn yên tâm sử dụng.',
  },
] as const;

export const locations = [
  {
    name: 'Singapore',
    flagSrc: '/flags/singapore.svg',
    badge: 'Community + Paid',
    speed: '10 Gbps',
    uptime: '99.99% Uptime',
    availability: 'Free / Paid',
  },
  {
    name: 'Hong Kong',
    flagSrc: '/flags/hong-kong.svg',
    badge: 'Community + Paid',
    speed: '5 Gbps',
    uptime: '99.99% Uptime',
    availability: 'Free / Paid',
  },
  {
    name: 'Việt Nam',
    flagSrc: '/flags/vietnam.svg',
    badge: 'Paid Focus',
    speed: '10 Gbps',
    uptime: '99.99% Uptime',
    availability: 'Only Paid',
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
  'Tôi nên chọn DEV, MC hay TESTER?',
  'OpenClaw Beta cần chuẩn bị domain như thế nào?',
  'Phụ phí upsize của DEV và MC hiện là bao nhiêu?',
  'Gói TESTER có những rủi ro gì cần lưu ý?',
  'PROXY FREE hiện còn mở hay đã tạm ngưng?',
  'Tôi kiểm tra tài nguyên còn lại ở đâu?',
  'Portal hiện dùng domain nào để đăng nhập?',
  'STACloud hỗ trợ workload nào tốt nhất ở thời điểm này?',
  'Kênh Discord nào là nơi hỗ trợ nhanh nhất hiện tại?',
] as const;
