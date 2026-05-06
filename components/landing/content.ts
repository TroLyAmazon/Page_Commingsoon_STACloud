export const siteConfig = {
  name: 'STACloud',
  siteUrl: 'https://stacloud.dev/',
  panelUrl: 'https://portal.stacloud.dev/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  zaloUrl: 'https://zalo.me/g/ekaldlnq5sqdn37lvikk',
  discordGroupUrl: 'https://discord.gg/nq8B4JXmnm',
  statusChannel: '🗺️｜server-status-and-slot',
  supportChannel: 'ticket support',
  copyrightText: '© 2025-2026 STACloud',
  testerAlertMessage:
    'Cảnh báo: TESTER là node tài trợ, có thể bị can thiệp hoặc sập bất ngờ bất cứ lúc nào. Bạn phải tự backup dữ liệu; STACloud không chịu trách nhiệm về mất mát dữ liệu trên node này.',
};

export const heroStats = [
  { value: '8', label: 'Gói / dịch vụ đang công bố' },
  { value: '24 + 10', label: 'Slots DEV / MC Singapore' },
  { value: '3 ngày', label: 'Thời gian đặt trước VPS lớn' },
  { value: '0$', label: 'OpenClaw / TESTER' },
] as const;

export const servicePlans = [
  {
    name: 'TESTER',
    description:
      'Gói miễn phí dành cho nhu cầu test nhanh trên node tài trợ. Phù hợp trải nghiệm, thử bot nhỏ hoặc kiểm tra môi trường trước khi dùng gói trả phí.',
    price: '0$ / 0 VNĐ',
    highlight: 'Hoàn toàn miễn phí',
    specs: ['1 vCore', '1 GB RAM', '5 GB Disk', 'Node tài trợ'],
    addOns: ['Kiểm tra tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trước khi đăng ký.'],
    status: 'warning',
    statusLabel: 'Miễn phí',
    accent: 'from-rose-400/25 to-orange-300/10',
    warnings: [
      'Node này được tài trợ nên có thể bị can thiệp hoặc sập bất ngờ bất cứ lúc nào.',
      'Vui lòng tự chủ động backup dữ liệu.',
      'STACloud không chịu trách nhiệm về mất mát dữ liệu trên node này.',
    ],
  },
  {
    name: 'OPENCLAW',
    description:
      'OpenClaw Beta đã mở miễn phí cho cộng đồng. Phù hợp để trải nghiệm nhanh, đặc biệt với nhu cầu app web và các workload liên quan đến AI.',
    price: 'FREE / 0 VNĐ',
    highlight: 'Beta miễn phí',
    specs: ['Cần domain riêng', 'Xác minh qua ticket', 'Khuyến nghị Singapore / Việt Nam'],
    addOns: [
      'Dùng domain riêng: miễn phí sau khi xác minh.',
      'Dùng domain STACloud: phụ phí 10.000 VNĐ.',
      'Cần inbox ticket để xác minh và gán domain vào hệ thống OpenClaw.',
    ],
    status: 'beta',
    statusLabel: 'Beta miễn phí',
    accent: 'from-blue-400/25 to-cyan-300/10',
    warnings: [
      'OpenClaw hiện là bản Beta nên có thể thay đổi hoặc gián đoạn trong quá trình trải nghiệm.',
      'Nên chọn server Singapore hoặc Việt Nam cho OpenClaw.',
      'Không khuyến nghị chọn Hong Kong cho workload AI vì một số dịch vụ AI có thể bị hạn chế.',
    ],
  },
  {
    name: 'DEV SG',
    description:
      'Gói tiêu chuẩn dùng CPU AMD Milan tại Singapore, phù hợp app nhỏ, bot, web dev và môi trường test cần chi phí thấp theo chu kỳ.',
    price: '5.000 VNĐ (0.3$) / chu kỳ',
    highlight: '24 Slots',
    specs: ['1 vCore AMD Milan', '1 GB RAM', '2 GB SSD', 'Singapore / OVH Shield'],
    addOns: [
      'Upsize tối đa 2 vCore và 2 GB RAM.',
      '+5.000 VNĐ cho mỗi 1 vCore.',
      '+10.000 VNĐ cho mỗi 1 GB RAM.',
    ],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-sky-400/30 to-cyan-300/10',
    warnings: [],
  },
  {
    name: 'MC SG',
    description:
      'Gói tiêu chuẩn dùng CPU AMD Milan tại Singapore cho Minecraft community nhỏ và nhu cầu test plugin với tài nguyên cao hơn DEV.',
    price: '8.000 VNĐ (0.5$) / chu kỳ',
    highlight: '10 Slots',
    specs: ['1 vCore AMD Milan', '2 GB RAM', '3 GB SSD', 'Singapore / OVH Shield'],
    addOns: [
      'Upsize tối đa 2 vCore và 4 GB RAM.',
      '+10.000 VNĐ cho mỗi 1 vCore.',
      '+15.000 VNĐ cho mỗi 1 GB RAM.',
    ],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-emerald-400/30 to-lime-300/10',
    warnings: [],
  },
  {
    name: 'PROXY HK',
    description:
      'Gói proxy locate Hong Kong cấu hình nhỏ, hiện đang tạm ngưng vì hết slot. Shield AntiDDoS được tính riêng theo lưu lượng.',
    price: 'Shield AntiDDoS 20.000 VNĐ / 1 GB',
    highlight: 'Tạm ngưng - hết slot',
    specs: ['0.5 vCore', '512 MB RAM', '1 GB SSD', 'Hong Kong'],
    addOns: ['Theo dõi Discord để biết thời điểm mở slot mới.'],
    status: 'paused',
    statusLabel: 'Hết slot',
    accent: 'from-amber-300/25 to-orange-300/10',
    warnings: [],
  },
  {
    name: 'STA-XEON-01',
    description:
      'Economy Edition dùng Intel Xeon E5-26xx v3 tại OVH Singapore. Tối ưu chi phí cho sinh viên, treo tool, bot Discord, web nhỏ hoặc test lab.',
    price: '66.000 VNĐ / tháng',
    highlight: 'Economy OVH SG',
    specs: ['2 vCore Intel Xeon E5-26xx v3', '~3.1 GHz', '7 GB RAM', 'Full port theo yêu cầu'],
    addOns: [
      'Hạ tầng OVH Singapore với AntiDDoS layer 3 & 4.',
      'Phù hợp workload tiết kiệm chi phí nhưng cần RAM tốt.',
      'Yêu cầu đặt trước 3 ngày để khởi tạo và tối ưu tài nguyên.',
    ],
    status: 'preorder',
    statusLabel: 'Đặt trước',
    accent: 'from-violet-400/20 to-cyan-300/10',
    warnings: [],
  },
  {
    name: 'STA-AMD-EPYC-01',
    description:
      'Standard Edition hiệu năng cao dùng AMD EPYC Milan Gen 3 tại OVH Singapore. Phù hợp Minecraft, game server, web app và workload cần CPU mạnh.',
    price: '129.000 VNĐ / tháng',
    highlight: 'Standard EPYC',
    specs: ['2 vCore AMD Milan', '8 GB RAM', 'Full port theo yêu cầu', 'OVH Singapore'],
    addOns: [
      'Hỗ trợ chia nhỏ thành nhiều server hoặc port khác nhau.',
      'Bảo vệ AntiDDoS mạnh từ hạ tầng OVH.',
      'Yêu cầu đặt trước 3 ngày để phân bổ máy chủ.',
    ],
    status: 'preorder',
    statusLabel: 'Đặt trước',
    accent: 'from-cyan-400/25 to-emerald-300/10',
    warnings: [],
  },
  {
    name: 'STA-AMD-EPYC-02',
    description:
      'Premium Edition hiệu năng cao dùng AMD EPYC Milan Gen 3 tại OVH Singapore. Dành cho workload cần nhiều vCore, nhiều RAM hoặc chia nhiều server.',
    price: '249.000 VNĐ / tháng',
    highlight: 'Premium EPYC',
    specs: ['4 vCore AMD Milan', '16 GB RAM', 'Full port theo yêu cầu', 'OVH Singapore'],
    addOns: [
      'Có thể đổi sang AMD Gen 4 hoặc Gen 5 theo khả năng hạ tầng.',
      'Hỗ trợ chia nhỏ thành nhiều server hoặc port khác nhau.',
      'Yêu cầu đặt trước 3 ngày để phân bổ máy chủ.',
    ],
    status: 'preorder',
    statusLabel: 'Đặt trước',
    accent: 'from-indigo-400/25 to-cyan-300/10',
    warnings: [],
  },
] as const;

export const locations = [
  {
    name: 'Singapore',
    flagSrc: '/flags/singapore.svg',
    speed: 'OVH 10Gbps',
    description:
      'Location chính cho DEV, MC, Intel Xeon, AMD EPYC và OpenClaw. Độ trễ tốt về Việt Nam, phù hợp game server, web app, bot và workload AI.',
    availability: 'Free / Paid',
  },
  {
    name: 'Hong Kong',
    flagSrc: '/flags/hong-kong.svg',
    speed: 'Proxy Locate',
    description:
      'Có gói PROXY HK nhưng hiện hết slot. Không khuyến nghị chọn Hong Kong cho OpenClaw hoặc workload AI vì có thể bị hạn chế một số dịch vụ.',
    availability: 'Paused',
  },
  {
    name: 'Việt Nam',
    flagSrc: '/flags/vietnam.svg',
    speed: 'Low Latency',
    description:
      'Phù hợp người dùng nội địa và là location được khuyến nghị cho OpenClaw khi cần độ trễ thấp trong nước.',
    availability: 'OpenClaw / Paid',
  },
] as const;

export const benefits = [
  {
    title: 'Có đủ gói free, beta và trả phí',
    description:
      'TESTER và OpenClaw phục vụ trải nghiệm miễn phí, trong khi DEV, MC, Xeon và EPYC đáp ứng nhu cầu vận hành ổn định hơn.',
  },
  {
    title: 'Cấu hình và giá rõ ràng',
    description:
      'Mỗi gói đều hiển thị giá, CPU, RAM, disk, location, trạng thái slot và yêu cầu đặt trước nếu có.',
  },
  {
    title: 'Hạ tầng Singapore mạnh',
    description:
      'Các gói trả phí chính chạy trên OVH Singapore, có AntiDDoS và phù hợp độ trễ từ Singapore về Việt Nam.',
  },
  {
    title: 'Chính sách rủi ro minh bạch',
    description:
      'Gói TESTER và OpenClaw Beta có cảnh báo rõ để người dùng chủ động backup, chọn location phù hợp và tạo ticket đúng quy trình.',
  },
] as const;

export const quickSteps = [
  {
    step: '01',
    title: 'Chọn nhóm gói phù hợp',
    description:
      'Chọn TESTER/OpenClaw nếu chỉ cần trải nghiệm miễn phí, DEV/MC cho nhu cầu nhỏ, hoặc Xeon/EPYC cho workload ổn định hơn.',
  },
  {
    step: '02',
    title: 'Gửi nhu cầu qua ticket',
    description:
      'Cho STACloud biết gói muốn đăng ký, location, nhu cầu full port, domain OpenClaw hoặc yêu cầu chia nhỏ server nếu có.',
  },
  {
    step: '03',
    title: 'Chờ xác minh và cấp phát',
    description:
      'Các gói lớn như STA-XEON-01, STA-AMD-EPYC-01 và STA-AMD-EPYC-02 cần đặt trước 3 ngày để khởi tạo và tối ưu tài nguyên.',
  },
] as const;

export const notes = [
  'TESTER miễn phí nhưng là node tài trợ, có thể bị can thiệp hoặc sập bất ngờ; người dùng phải tự backup dữ liệu.',
  'OpenClaw Beta miễn phí nhưng cần domain riêng; nếu dùng domain STACloud sẽ có phụ phí 10.000 VNĐ.',
  'DEV SG có giá 5.000 VNĐ (0.3$) / chu kỳ với 24 slots; MC SG có giá 8.000 VNĐ (0.5$) / chu kỳ với 10 slots.',
  'PROXY HK hiện tạm ngưng do hết slot; Shield AntiDDoS tính 20.000 VNĐ / 1 GB.',
  'STA-XEON-01 giá 66.000 VNĐ / tháng; STA-AMD-EPYC-01 giá 129.000 VNĐ / tháng; STA-AMD-EPYC-02 giá 249.000 VNĐ / tháng và đều cần đặt trước 3 ngày.',
  'Theo dõi tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trên Discord.',
] as const;

export const policyGroups = [
  {
    title: 'Gói Miễn Phí Và Beta',
    points: [
      'TESTER có chi phí 0$ / 0 VNĐ với cấu hình 1 vCore, 1 GB RAM và 5 GB Disk.',
      'TESTER là node tài trợ nên có thể bị can thiệp hoặc sập bất ngờ; người dùng phải tự backup dữ liệu.',
      'OpenClaw Beta miễn phí, yêu cầu domain riêng và cần mở ticket để xác minh, gán domain vào hệ thống.',
      'Nếu dùng domain STACloud cho OpenClaw, phụ phí domain là 10.000 VNĐ.',
    ],
  },
  {
    title: 'DEV / MC Singapore',
    points: [
      'DEV SG dùng AMD Milan tại Singapore, giá 5.000 VNĐ (0.3$) / chu kỳ với 1 vCore, 1 GB RAM và 2 GB SSD.',
      'MC SG dùng AMD Milan tại Singapore, giá 8.000 VNĐ (0.5$) / chu kỳ với 1 vCore, 2 GB RAM và 3 GB SSD.',
      'DEV có 24 slots, MC có 10 slots và đều dùng AntiDDoS OVH Shield.',
      'DEV upsize tối đa 2 vCore / 2 GB RAM; MC upsize tối đa 2 vCore / 4 GB RAM.',
    ],
  },
  {
    title: 'Upsize DEV / MC',
    points: [
      'Phụ phí DEV: +5.000 VNĐ cho mỗi 1 vCore và +10.000 VNĐ cho mỗi 1 GB RAM.',
      'Phụ phí MC: +10.000 VNĐ cho mỗi 1 vCore và +15.000 VNĐ cho mỗi 1 GB RAM.',
      'Nên nêu rõ nhu cầu CPU/RAM khi tạo ticket để được tư vấn cấu hình phù hợp.',
    ],
  },
  {
    title: 'Proxy Hong Kong',
    points: [
      'PROXY HK hiện tạm ngưng do hết slot.',
      'Cấu hình công bố là 0.5 vCore, 512 MB RAM và 1 GB SSD.',
      'Shield AntiDDoS được tính 20.000 VNĐ / 1 GB.',
    ],
  },
  {
    title: 'Intel Xeon OVH Singapore',
    points: [
      'STA-XEON-01 dùng 2 vCore Intel Xeon E5-26xx v3 khoảng 3.1 GHz và 7 GB RAM.',
      'Giá STA-XEON-01 là 66.000 VNĐ / tháng, full port theo yêu cầu.',
      'Phù hợp treo tool, bot Discord, web nhỏ hoặc test lab với chi phí tiết kiệm.',
      'Yêu cầu đặt trước 3 ngày để khởi tạo và tối ưu tài nguyên.',
    ],
  },
  {
    title: 'AMD EPYC OVH Singapore',
    points: [
      'STA-AMD-EPYC-01 có 2 vCore AMD Milan, 8 GB RAM, full port theo yêu cầu và giá 129.000 VNĐ / tháng.',
      'STA-AMD-EPYC-02 có 4 vCore AMD Milan, 16 GB RAM, full port theo yêu cầu và giá 249.000 VNĐ / tháng.',
      'Có thể hỗ trợ chia nhỏ thành nhiều server hoặc port khác nhau.',
      'Yêu cầu đặt trước 3 ngày để phân bổ máy chủ.',
    ],
  },
  {
    title: 'Lưu Ý Location OpenClaw',
    points: [
      'Nên chọn Singapore hoặc Việt Nam khi dùng OpenClaw.',
      'Không khuyến nghị chọn Hong Kong cho workload AI vì một số dịch vụ AI có thể bị hạn chế.',
      'OpenClaw là bản Beta nên người dùng không nên kỳ vọng SLA nghiêm ngặt như gói trả phí ổn định.',
    ],
  },
] as const;
