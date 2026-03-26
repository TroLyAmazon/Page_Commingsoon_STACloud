export const siteConfig = {
  name: 'STACloud',
  siteUrl: 'https://stacloud.dev/',
  panelUrl: 'https://portal.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  discordGroupUrl: 'https://discord.gg/nq8B4JXmnm',
  statusChannel: '🗺️｜server-status-and-slot',
  supportChannel: 'support',
  copyrightText: '© 2025-2026 STACloud',
};

export const heroStats = [
  { value: '4', label: 'Gói đang công bố' },
  { value: '24 + 10', label: 'Slots DEV / MC' },
  { value: '0$', label: 'TESTER miễn phí' },
  { value: '1', label: 'Gói tạm ngưng' },
] as const;

export const servicePlans = [
  {
    name: 'DEV',
    description: 'Dành cho app nhỏ, bot, web dev và môi trường test cần chi phí thấp theo chu kỳ.',
    price: '0.1$ hoặc 2.000 VNĐ / chu kỳ',
    highlight: '24 Slots',
    specs: ['0.75 vCore', '1 GB RAM', '2 GB SSD'],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-sky-400/30 to-cyan-300/10',
    warnings: [],
  },
  {
    name: 'MC',
    description: 'Dành cho Minecraft community nhỏ và nhu cầu test plugin với tài nguyên cao hơn DEV.',
    price: '0.2$ hoặc 3.000 VNĐ / chu kỳ',
    highlight: '10 Slots',
    specs: ['1 vCore', '2 GB RAM', '3 GB SSD'],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-emerald-400/30 to-lime-300/10',
    warnings: [],
  },
  {
    name: 'PROXY FREE',
    description: 'Gói middle layer và proxy hiện đã tạm ngưng mở mới theo thông báo mới nhất.',
    price: 'Tạm ngưng',
    highlight: 'Không mở mới',
    specs: ['0.5 vCore', '512 MB RAM', '1 GB SSD'],
    status: 'paused',
    statusLabel: 'Tạm ngưng',
    accent: 'from-amber-300/25 to-orange-300/10',
    warnings: [],
  },
  {
    name: 'TESTER',
    description: 'Node mới hoàn toàn miễn phí cho nhu cầu test nhanh, nhưng đi kèm cảnh báo dữ liệu rõ ràng.',
    price: '0$ / 0 VNĐ',
    highlight: 'Node tài trợ',
    specs: ['1 vCore', '1 GB RAM', '5 GB Disk'],
    status: 'warning',
    statusLabel: 'Miễn phí',
    accent: 'from-rose-400/25 to-orange-300/10',
    warnings: [
      'Node này được tài trợ nên có thể bị can thiệp hoặc sập bất ngờ bất cứ lúc nào.',
      'Vui lòng tự chủ động backup dữ liệu.',
      'STACloud không chịu trách nhiệm về mất mát dữ liệu trên node này.',
    ],
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
      'Mở ticket trên Discord, gửi đủ thông tin cần thiết, admin xử lý nhanh và cấp server theo đúng gói còn slot.',
  },
  {
    title: 'Thông tin gói minh bạch',
    description:
      'DEV, MC, PROXY FREE và TESTER đều được công bố kèm giá, trạng thái, cấu hình và cảnh báo ngay trên landing.',
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
    title: 'Gửi thông tin cần thiết',
    description: 'Cho admin biết gói bạn muốn đăng ký và nhu cầu sử dụng để được kiểm tra slot nhanh hơn.',
  },
  {
    step: '03',
    title: 'Chờ duyệt và cấp',
    description: 'Admin kiểm tra slot còn lại, xác nhận đúng gói rồi cấp server khi ticket hợp lệ.',
  },
] as const;

export const notes = [
  'Chọn đúng gói DEV, MC hoặc TESTER trước khi mở ticket; PROXY FREE hiện đang tạm ngưng.',
  'DEV có giá 0.1$ hoặc 2.000 VNĐ mỗi chu kỳ, MC có giá 0.2$ hoặc 3.000 VNĐ mỗi chu kỳ.',
  'TESTER miễn phí nhưng bắt buộc tự backup vì node tài trợ có thể gián đoạn bất ngờ.',
  'Theo dõi tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trên Discord.',
] as const;

export const policyGroups = [
  {
    title: 'DEV & MC',
    points: [
      'DEV có chi phí 0.1$ hoặc 2.000 VNĐ / chu kỳ với cấu hình 0.75 vCore, 1 GB RAM, 2 GB SSD.',
      'MC có chi phí 0.2$ hoặc 3.000 VNĐ / chu kỳ với cấu hình 1 vCore, 2 GB RAM, 3 GB SSD.',
      'Hai gói này hiện được công bố với 24 slots DEV và 10 slots MC.',
    ],
  },
  {
    title: 'PROXY FREE',
    points: [
      'PROXY FREE hiện ở trạng thái tạm ngưng và chưa mở slot mới.',
      'Cấu hình hiện công bố là 0.5 vCore, 512 MB RAM và 1 GB SSD.',
      'Nếu cần workload proxy, hãy theo dõi Discord để chờ thông báo kế tiếp.',
    ],
  },
  {
    title: 'TESTER Miễn Phí',
    points: [
      'TESTER có chi phí 0$ / 0 VNĐ với cấu hình 1 vCore, 1 GB RAM và 5 GB Disk.',
      'Node này được tài trợ nên có thể bị can thiệp hoặc sập bất ngờ bất cứ lúc nào.',
      'Người dùng phải tự backup dữ liệu và chấp nhận rủi ro mất mát dữ liệu trên node này.',
    ],
  },
  {
    title: 'Tài Nguyên Còn Lại',
    points: [
      'Kiểm tra tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trước khi mở ticket.',
      'Việc theo dõi slot trước giúp admin xử lý nhanh hơn và tránh gửi sai kỳ vọng.',
      'Landing hiện đã được đồng bộ theo đúng thông báo cập nhật gói dịch vụ mới nhất.',
    ],
  },
] as const;
