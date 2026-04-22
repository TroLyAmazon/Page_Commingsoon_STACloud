export const siteConfig = {
  name: 'STACloud',
  siteUrl: 'https://stacloud.dev/',
  panelUrl: 'https://portal.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  zaloUrl: 'https://zalo.me/g/ekaldlnq5sqdn37lvikk',
  discordGroupUrl: 'https://discord.gg/nq8B4JXmnm',
  statusChannel: '🗺️｜server-status-and-slot',
  supportChannel: 'support',
  copyrightText: '© 2025-2026 STACloud',
  testerAlertMessage:
    'Cảnh báo: TESTER là node tài trợ, có thể bị can thiệp hoặc gián đoạn bất ngờ. Bạn phải tự backup dữ liệu; STACloud không chịu trách nhiệm về mất mát dữ liệu trên node này.',
};

export const heroStats = [
  { value: '5', label: 'Dịch vụ đang công bố' },
  { value: '24 + 10', label: 'Slots DEV / MC' },
  { value: '2', label: 'Gói có upsize' },
  { value: '0$', label: 'OpenClaw / TESTER' },
] as const;

export const servicePlans = [
  {
    name: 'DEV',
    description:
      'Gói tiêu chuẩn cho app nhỏ, bot, web dev và môi trường test cần chi phí thấp theo chu kỳ.',
    price: '5.000 VNĐ (0.3$) / chu kỳ',
    highlight: '24 Slots',
    specs: ['1 vCore', '1 GB RAM', '2 GB SSD'],
    addOns: [
      'Tối đa 2 vCore và 2 GB RAM.',
      '+5.000 VNĐ cho mỗi 1 vCore.',
      '+10.000 VNĐ cho mỗi 1 GB RAM.',
    ],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-sky-400/30 to-cyan-300/10',
    warnings: [],
  },
  {
    name: 'MC',
    description:
      'Gói tiêu chuẩn cho Minecraft community nhỏ và nhu cầu test plugin với tài nguyên cao hơn DEV.',
    price: '8.000 VNĐ (0.5$) / chu kỳ',
    highlight: '10 Slots',
    specs: ['1 vCore', '2 GB RAM', '3 GB SSD'],
    addOns: [
      'Tối đa 2 vCore và 4 GB RAM.',
      '+10.000 VNĐ cho mỗi 1 vCore.',
      '+15.000 VNĐ cho mỗi 1 GB RAM.',
    ],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-emerald-400/30 to-lime-300/10',
    warnings: [],
  },
  {
    name: 'OPENCLAW',
    description:
      'OpenClaw Beta đã mở miễn phí cho cộng đồng. Phù hợp để thử nghiệm nhanh, đặc biệt với nhu cầu liên quan đến AI và app web.',
    price: 'FREE / 0 VNĐ',
    highlight: 'Beta miễn phí',
    specs: ['Cần domain riêng', 'Gán domain qua ticket', 'Khuyến nghị SG / VN'],
    addOns: [
      'Dùng domain riêng: miễn phí sau khi xác minh.',
      'Dùng domain STACloud: phụ phí 10.000 VNĐ.',
      'Cần mở ticket để xác minh và gán domain vào hệ thống OpenClaw.',
    ],
    status: 'beta',
    statusLabel: 'Beta miễn phí',
    accent: 'from-blue-400/25 to-cyan-300/10',
    warnings: [
      'OpenClaw hiện là bản Beta nên có thể thay đổi hoặc gián đoạn trong quá trình thử nghiệm.',
      'Nên chọn server Singapore hoặc Việt Nam cho OpenClaw.',
      'Không khuyến nghị chọn Hong Kong cho workload AI vì một số dịch vụ AI có thể bị hạn chế.',
    ],
  },
  {
    name: 'PROXY FREE',
    description: 'Gói proxy miễn phí hiện đang tạm ngưng và chưa mở mới ở thời điểm này.',
    price: 'Tạm ngưng',
    highlight: 'Không mở mới',
    specs: ['0.5 vCore', '512 MB RAM', '1 GB SSD'],
    addOns: [],
    status: 'paused',
    statusLabel: 'Tạm ngưng',
    accent: 'from-amber-300/25 to-orange-300/10',
    warnings: [],
  },
  {
    name: 'TESTER',
    description: 'Gói miễn phí dành cho nhu cầu test nhanh trên node tài trợ.',
    price: '0$ / 0 VNĐ',
    highlight: 'Node tài trợ',
    specs: ['1 vCore', '1 GB RAM', '5 GB Disk'],
    addOns: [],
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
    name: 'Hong Kong',
    flagSrc: '/flags/hong-kong.svg',
    speed: '5Gbps',
    description: 'Phù hợp cho nhu cầu tuyến quốc tế bổ sung và workload cần thêm lựa chọn khu vực.',
    availability: 'Free / Paid',
  },
  {
    name: 'Việt Nam',
    flagSrc: '/flags/vietnam.svg',
    speed: '10Gbps',
    description: 'Ưu tiên truy cập nội địa nhanh cho cộng đồng và dự án hướng người dùng Việt.',
    availability: 'Only Paid',
  },
] as const;

export const benefits = [
  {
    title: 'Giá và cấu hình rõ ràng',
    description: 'Mỗi gói đều hiển thị đầy đủ giá, cấu hình, trạng thái và lưu ý quan trọng.',
  },
  {
    title: 'Hỗ trợ nhanh qua cộng đồng',
    description:
      'Bạn có thể liên hệ Discord hoặc Zalo cộng đồng để được hướng dẫn chọn gói và đăng ký nhanh hơn.',
  },
  {
    title: 'Chính sách minh bạch',
    description:
      'Thông tin về upsize, cảnh báo dữ liệu và các chính sách liên quan đều được công bố công khai.',
  },
  {
    title: 'OpenClaw miễn phí',
    description:
      'OpenClaw Beta đã mở miễn phí cho cộng đồng, hỗ trợ gán domain riêng sau khi xác minh qua ticket.',
  },
] as const;

export const quickSteps = [
  {
    step: '01',
    title: 'Chọn gói phù hợp',
    description: 'Xem giá, cấu hình và trạng thái của từng gói trước khi đăng ký.',
  },
  {
    step: '02',
    title: 'Gửi nhu cầu sử dụng',
    description:
      'Cho STACloud biết gói bạn muốn đăng ký, có cần upsize hay không và nhu cầu sử dụng thực tế.',
  },
  {
    step: '03',
    title: 'Nhận cấp phát',
    description: 'Sau khi xác nhận slot và thông tin hợp lệ, dịch vụ sẽ được cấp theo gói đã chọn.',
  },
] as const;

export const notes = [
  'Chọn đúng gói DEV, MC hoặc TESTER trước khi mở ticket; PROXY FREE hiện đang tạm ngưng.',
  'OpenClaw Beta miễn phí nhưng cần domain riêng; nếu dùng domain STACloud sẽ có phụ phí 10.000 VNĐ.',
  'DEV có giá 5.000 VNĐ (0.3$) / chu kỳ; MC có giá 8.000 VNĐ (0.5$) / chu kỳ.',
  'Nếu cần thêm tài nguyên, DEV cho upsize tối đa 2 vCore / 2 GB RAM và MC cho upsize tối đa 2 vCore / 4 GB RAM.',
  'Theo dõi tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trên Discord.',
] as const;

export const policyGroups = [
  {
    title: 'Gói Tiêu Chuẩn',
    points: [
      'DEV có chi phí 5.000 VNĐ (0.3$) / chu kỳ với cấu hình 1 vCore, 1 GB RAM và 2 GB SSD.',
      'MC có chi phí 8.000 VNĐ (0.5$) / chu kỳ với cấu hình 1 vCore, 2 GB RAM và 3 GB SSD.',
      'Hai gói này hiện được công bố với 24 slots DEV và 10 slots MC.',
    ],
  },
  {
    title: 'Tùy Chọn Nâng Cấp',
    points: [
      'DEV được nâng tối đa lên 2 vCore và 2 GB RAM.',
      'Phụ phí DEV: +5.000 VNĐ cho mỗi 1 vCore, +10.000 VNĐ cho mỗi 1 GB RAM.',
      'MC được nâng tối đa lên 2 vCore và 4 GB RAM; phụ phí là +10.000 VNĐ cho mỗi 1 vCore và +15.000 VNĐ cho mỗi 1 GB RAM.',
    ],
  },
  {
    title: 'OpenClaw Beta',
    points: [
      'OpenClaw Beta hiện được mở miễn phí cho cộng đồng sử dụng thử.',
      'Người dùng cần có domain riêng và mở ticket để STACloud xác minh, gán domain vào hệ thống OpenClaw.',
      'Nếu muốn sử dụng domain của STACloud, phụ phí domain là 10.000 VNĐ.',
      'Nên chọn server Singapore hoặc Việt Nam; không khuyến nghị Hong Kong cho workload AI vì một số dịch vụ AI có thể bị hạn chế.',
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
] as const;
