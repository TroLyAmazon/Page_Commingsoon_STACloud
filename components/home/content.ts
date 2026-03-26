export const homeConfig = {
  name: 'STACloud',
  tagline: 'Portal, VPS & Community Plans',
  panelUrl: 'https://portal.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  freeServerUrl: '/free-server',
  logoAlt: 'STACloud',
  summary:
    'STACloud xây dựng portal, VPS và các gói dịch vụ cộng đồng với cách trình bày rõ ràng, tốc độ cao và ưu tiên khả năng quản trị.',
};

export const heroStats = [
  { value: '4', label: 'Gói đang công bố' },
  { value: '24 + 10', label: 'Slots DEV / MC' },
  { value: '0$', label: 'TESTER miễn phí' },
  { value: '24/7', label: 'Hỗ trợ Discord' },
] as const;

export const heroSignals = [
  'Portal và store đã chuyển sang portal.stacloud.dev',
  'DEV và MC được công bố giá trực tiếp trên landing',
  'TESTER miễn phí nhưng người dùng phải tự backup dữ liệu',
] as const;

export const heroStatusStrip = [
  { label: 'DEV', detail: '24 slots', value: '0.1$ / 2.000 VNĐ', tone: 'emerald' },
  { label: 'MC', detail: '10 slots', value: '0.2$ / 3.000 VNĐ', tone: 'cyan' },
  { label: 'PROXY', detail: 'Tạm ngưng', value: 'Không mở mới', tone: 'amber' },
  { label: 'TESTER', detail: 'Node tài trợ', value: '0$ / 0 VNĐ', tone: 'rose' },
] as const;

export const dashboardEntries = [
  {
    label: 'Portal',
    value: 'portal.stacloud.dev',
    meta: 'Quản trị và store',
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
    value: 'Discord ticket',
    meta: 'Ưu tiên xử lý nhanh',
    tone: 'emerald',
  },
  {
    label: 'Routing',
    value: 'VN + SG + HK',
    meta: 'Tối ưu cộng đồng',
    tone: 'blue',
  },
] as const;

export const products = [
  {
    title: 'Portal Gaming',
    eyebrow: 'Điều Khiển',
    description:
      'Quản lý game server, node và store trên portal đồng bộ hơn với flow vận hành hiện tại của STACloud.',
    chips: ['Portal', 'Store', 'Fast Control'],
  },
  {
    title: 'VPS Compute',
    eyebrow: 'Hạ Tầng',
    description:
      'Phù hợp cho backend, automation, bot và workload cần môi trường linh hoạt hơn shared hosting truyền thống.',
    chips: ['Compute Ready', 'Low Latency', 'Stable Routing'],
  },
  {
    title: 'Gói Cộng Đồng',
    eyebrow: 'Service Plans',
    description:
      'DEV, MC, PROXY FREE và TESTER được công bố cùng giá, slot và lưu ý sử dụng để người dùng quyết định nhanh.',
    chips: ['DEV', 'MC', 'TESTER'],
  },
] as const;

export const features = [
  {
    title: 'Thông tin gói quét nhanh',
    description:
      'Giá, slot, trạng thái và cảnh báo được gom thành các block dễ nhìn để người dùng không cần hỏi lại những thứ cơ bản.',
  },
  {
    title: 'Portal rõ cho người mới',
    description:
      'Người dùng mới vẫn có thể đăng nhập portal, mở store, theo dõi tài nguyên và hiểu luồng vận hành mà không bị rối.',
  },
  {
    title: 'Thiết kế cho workload thật',
    description:
      'Từ game hosting, bot, web app đến workload backend nhẹ, bố cục hiện tại phản ánh đúng nhu cầu dùng thực tế.',
  },
  {
    title: 'Status board dễ theo dõi',
    description:
      'Trang chủ và landing gói dịch vụ cùng hướng về cảm giác dashboard, giúp thông tin vận hành hiện lên rõ ràng hơn.',
  },
  {
    title: 'Luồng Discord ngắn gọn',
    description:
      'Người dùng chỉ cần vào Discord, xem tình trạng tài nguyên, rồi mở ticket với nhu cầu cụ thể thay vì dò nhiều thông báo rời rạc.',
  },
  {
    title: 'Ngôn ngữ đồng nhất hơn',
    description:
      'CTA, tiêu đề và nhịp nội dung đang được kéo về cùng một giọng để thương hiệu trông liền mạch hơn giữa các trang.',
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
      'Phần mình thích nhất là nhìn vào đã biết portal ở đâu, gói nào đang mở và gói nào cần chú ý dữ liệu. Quyết định nhanh hơn hẳn.',
    author: 'Minh Trí',
    role: 'Người dùng cộng đồng',
  },
  {
    quote:
      'Khi giá và policy được đưa thẳng lên landing, support đỡ phải trả lời lại những câu hỏi cơ bản và flow vận hành gọn hơn nhiều.',
    author: 'Lê Nam',
    role: 'Developer',
  },
  {
    quote:
      'STACloud đang có cảm giác của một dịch vụ hạ tầng thật hơn vì portal, status và dịch vụ cộng đồng đều được trình bày như một hệ thống thống nhất.',
    author: 'Quốc Bảo',
    role: 'Customer',
  },
] as const;

export const faqs = [
  'Tôi nên chọn DEV, MC hay TESTER?',
  'Gói TESTER có những rủi ro gì cần lưu ý?',
  'PROXY FREE hiện còn mở hay đã tạm ngưng?',
  'Tôi kiểm tra tài nguyên còn lại ở đâu?',
  'Portal hiện dùng domain nào để đăng nhập?',
  'STACloud hỗ trợ workload nào tốt nhất ở thời điểm này?',
  'VPS và portal có đi chung một hệ vận hành không?',
  'Kênh Discord nào là nơi hỗ trợ nhanh nhất hiện tại?',
] as const;
