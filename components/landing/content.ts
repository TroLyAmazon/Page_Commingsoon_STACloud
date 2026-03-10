export const siteConfig = {
  name: 'STACloud',
  siteUrl: 'https://stacloud.dev/',
  panelUrl: 'https://panel.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  discordGroupUrl: 'https://discord.gg/nq8B4JXmnm',
  statusChannel: 'server-status-and-slot',
  supportChannel: 'support',
  signature: 'Fork Jexactyl, built on Pterodactyl',
  copyrightYear: '2026',
};

export const heroStats = [
  { value: '3', label: 'Gói free đang mở' },
  { value: '10Gbps', label: 'Băng thông uplink' },
  { value: '24h', label: 'Khung giờ hỗ trợ khôi phục' },
] as const;

export const freePlans = [
  {
    name: 'DEV FREE',
    description: 'Dành cho app nhỏ, bot, web dev và môi trường test nhanh.',
    specs: ['0.75 vCore', '1 GB RAM', '2 GB SSD'],
    status: 'Open',
    accent: 'from-sky-400/30 to-cyan-300/10',
  },
  {
    name: 'MC FREE',
    description: 'Gói cho Minecraft cộng đồng quy mô nhỏ và test plugin.',
    specs: ['1 vCore', '2 GB RAM', '3 GB SSD'],
    status: 'Open',
    accent: 'from-emerald-400/30 to-lime-300/10',
  },
  {
    name: 'PROXY FREE',
    description: 'Proxy và middle layer. Tạm thời ngừng cấp mới.',
    specs: ['0.5 vCore', '512 MB RAM', '1 GB SSD'],
    status: 'Paused',
    accent: 'from-amber-300/25 to-orange-300/10',
  },
] as const;

export const locations = [
  {
    name: 'Singapore',
    flagSrc: '/flags/singapore.svg',
    speed: '10Gbps',
    description: 'Tuyến quốc tế ổn định cho workload cần độ trễ tốt và kết nối rộng.',
    availability: 'Free / Paid',
  },
  {
    name: 'Hongkong',
    flagSrc: '/flags/hong-kong.svg',
    speed: '5Gbps',
    description: 'Phù hợp cho nhu cầu tuyến quốc tế bổ sung và workload cần thêm lựa chọn khu vực.',
    availability: 'Free / Paid',
  },
  {
    name: 'VietNam',
    flagSrc: '/flags/vietnam.svg',
    speed: '10Gbps',
    description: 'Ưu tiên truy cập nội địa nhanh cho cộng đồng và dự án hướng người dùng Việt.',
    availability: 'Only Paid',
  },
] as const;

export const benefits = [
  {
    title: 'Panel dễ quản lý',
    description:
      'Triển khai trên Jexactyl fork và hệ sinh thái Pterodactyl quen thuộc, dễ dùng cho người mới.',
  },
  {
    title: 'Nhanh, rõ, gọn',
    description:
      'Mở ticket trên Discord, gửi đúng format, admin xử lý và cấp server ngay khi có slot.',
  },
  {
    title: 'Tập trung cộng đồng',
    description:
      'Free server ưu tiên cho học tập, test dự án, Minecraft nhỏ và nhu cầu thực sự đang chạy.',
  },
] as const;

export const quickSteps = [
  {
    step: '01',
    title: 'Mở ticket',
    description: 'Nhấn nút Tạo Ticket tại kênh support trên Discord của STACloud.',
  },
  {
    step: '02',
    title: 'Gửi đúng định dạng',
    description: 'Email + Loại Server (Python/Bedrock) + Port trong khoảng 30000-50000.',
  },
  {
    step: '03',
    title: 'Nhận server',
    description: 'Admin tạo server nhanh khi ticket hợp lệ và hệ thống còn slot.',
  },
] as const;

export const requestFormat = 'tla@gmail.com + Python + 30005';

export const notes = [
  'Kiểm tra các loại Egg có sẵn tại Panel -> Store trước khi gửi yêu cầu.',
  'Cung cấp email chính xác để nhận thông tin đăng nhập.',
  'Theo dõi tài nguyên còn trống tại kênh server-status-and-slot trên Discord.',
] as const;

export const policyGroups = [
  {
    title: 'Suspended',
    points: [
      'Server mới nhưng không chạy ngay có thể bị suspended.',
      'Không hoạt động liên tiếp 3 ngày sẽ bị tạm khóa tự động.',
      'Tạo ticket trong 24h để được hỗ trợ active lại.',
    ],
  },
  {
    title: 'Chính sách xóa dữ liệu',
    points: [
      'Sau ngày thứ 4 không hoạt động, dữ liệu có thể bị xóa vĩnh viễn.',
      'Qua mốc 24h hỗ trợ, STACloud không đảm bảo giữ lại dữ liệu.',
      'Tài nguyên free ưu tiên cho người dùng đang sử dụng thật.',
    ],
  },
] as const;
