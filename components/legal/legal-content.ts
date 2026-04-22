export type LegalSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: LegalSubsection[];
};

export const legalLastUpdated = '26/03/2026';
export const slaLastUpdated = '22/04/2026';

export const termsSections: LegalSection[] = [
  {
    title: '1. Thanh toán',
    bullets: [
      'Dịch vụ sẽ được kích hoạt sau khi chúng tôi nhận đủ thanh toán của bạn.',
      'Chúng tôi không hỗ trợ hoàn tiền, vì vậy vui lòng cân nhắc kỹ trước khi mua.',
      'Chúng tôi có thể giới hạn hoặc tạm ngưng dịch vụ miễn phí hoặc trả phí nếu phát hiện hành vi lạm dụng.',
    ],
  },
  {
    title: '2. Chấm dứt dịch vụ',
    bullets: [
      'Chúng tôi có thể tạm ngưng hoặc chấm dứt tài khoản của bạn khi cần, theo quyền quyết định của chúng tôi.',
      'Nếu tài khoản của bạn bị chấm dứt, bạn sẽ mất quyền truy cập và dữ liệu của bạn có thể bị xóa.',
    ],
  },
  {
    title: '3. Trách nhiệm pháp lý và bảo đảm',
    bullets: [
      'Dịch vụ được cung cấp theo hiện trạng và theo khả năng sẵn có. Chúng tôi không thể bảo đảm dịch vụ sẽ luôn hoàn hảo hoặc không bị gián đoạn.',
      'Chúng tôi không chịu trách nhiệm đối với bất kỳ mất mát, thiệt hại hoặc sự cố dữ liệu nào.',
    ],
  },
  {
    title: '4. Bảo mật tài khoản',
    bullets: [
      'Bạn có trách nhiệm giữ an toàn cho tài khoản của mình.',
      'Chúng tôi không chịu trách nhiệm cho các truy cập trái phép do mật khẩu yếu hoặc do sự bất cẩn của người dùng.',
      'Nếu bạn cho rằng có người đang sử dụng tài khoản của mình mà không được phép, hãy liên hệ với chúng tôi ngay lập tức.',
    ],
  },
  {
    title: '5. Sử dụng dịch vụ',
    bullets: [
      'Không thực hiện bất kỳ hành vi nào gây nghẽn mạng hoặc ảnh hưởng tiêu cực tới người dùng khác.',
      'Các tài khoản vi phạm quy định này hoặc gây rủi ro cho hệ thống có thể bị tạm ngưng vĩnh viễn mà không cần thông báo thêm.',
    ],
  },
  {
    title: '6. Quy định về nội dung',
    bullets: [
      'Không được phép đăng tải nội dung bất hợp pháp, vi phạm bản quyền, khiêu dâm hoặc phỉ báng.',
      'Chúng tôi có thể yêu cầu bạn hỗ trợ xác minh một số nội dung khi cần thiết.',
      'Nếu bạn không hợp tác, chúng tôi có thể hạn chế nội dung hoặc tài khoản của bạn.',
    ],
  },
  {
    title: '7. Fair Use: Điều gì được phép và điều gì không',
    paragraphs: [
      'Thông báo Fair Use: Tất cả các gói trả phí đều áp dụng chính sách sử dụng hợp lý. Vui lòng sử dụng ở mức phù hợp và không ảnh hưởng tới chất lượng dịch vụ của người khác.',
    ],
    subsections: [
      {
        title: '7.1 Những gì được phép',
        bullets: [
          'Tuân thủ pháp luật: Sử dụng dịch vụ hợp pháp và có trách nhiệm.',
          'Công bằng: Không chiếm dụng quá mức tài nguyên hoặc gây ảnh hưởng đến hiệu năng hay bảo mật của người khác.',
          'Tôn trọng: Tôn trọng nền tảng, đội ngũ vận hành và cộng đồng của chúng tôi.',
        ],
      },
      {
        title: '7.2 Những gì không được phép',
        bullets: [
          'Lạm dụng tài nguyên: Không sử dụng băng thông quá mức, gây quá tải máy chủ hoặc làm gián đoạn mạng lưới của chúng tôi.',
          'Bot và công cụ trái phép: Không sử dụng spam bot, selfbot, crypto-mining, VPN hoặc proxy service, hay bất kỳ công cụ nào gây quá tải cho máy chủ hoặc mạng, đặc biệt trên gói miễn phí.',
          'Bot game trên free tier: Free Fire Bot và Minecraft Bot không được phép trên gói miễn phí.',
          'Mã bị làm rối: Không được tải lên hoặc chạy mã bị obfuscate, mã hóa hoặc cố tình làm cho khó đọc trên free tier.',
        ],
      },
      {
        title: '7.3 Quy định về nội dung',
        bullets: [
          'Không được phép có nội dung bị cấm: Nội dung bất hợp pháp, độc hại hoặc phản cảm đều không được chấp nhận.',
          'Gỡ bỏ nội dung: STACloud có quyền gỡ bỏ bất kỳ nội dung nào vi phạm các quy định này hoặc quyền của bên thứ ba.',
        ],
      },
      {
        title: '7.4 Bảo mật',
        bullets: [
          'Giữ an toàn cho hệ thống: Không hack, không phát tán mã độc và không truy cập trái phép.',
          'Nếu bạn phát hiện lỗ hổng bảo mật, vui lòng báo cho chúng tôi.',
        ],
      },
      {
        title: '7.5 Thực thi',
        bullets: [
          'Giám sát: Chúng tôi có thể giám sát việc sử dụng để giữ môi trường công bằng và an toàn.',
          'Phát hiện lạm dụng tự động: Chúng tôi sử dụng hệ thống tự động để phát hiện hành vi lạm dụng như crypto mining, selfbot hoặc proxy. Tài khoản và máy chủ có thể bị tạm ngưng mà không cần thông báo trước nếu bị gắn cờ. Hãy bảo đảm script của bạn tuân thủ quy định.',
          'Hợp tác từ người dùng: Vui lòng hỗ trợ nếu chúng tôi cần điều tra một vấn đề nào đó.',
          'Vi phạm: Chúng tôi có thể gỡ bỏ nội dung, tạm ngưng hoặc chấm dứt tài khoản nếu các quy định này bị vi phạm.',
        ],
      },
    ],
  },
  {
    title: '8. Thay đổi điều khoản',
    paragraphs: [
      'Chúng tôi có thể cập nhật các điều khoản này bất kỳ lúc nào. Nếu bạn tiếp tục sử dụng dịch vụ sau khi có thay đổi, điều đó đồng nghĩa với việc bạn chấp nhận các điều khoản mới.',
    ],
  },
  {
    title: '9. Liên hệ',
    paragraphs: ['Nếu cần hỗ trợ, vui lòng liên hệ qua email: stacloud.dev@gmail.com.'],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: '1. Thông tin chúng tôi thu thập',
    bullets: [
      'Thông tin tài khoản và liên hệ như email, tên người dùng, cũng như các thông tin bạn cung cấp khi tạo tài khoản hoặc liên hệ hỗ trợ.',
      'Thông tin thanh toán và giao dịch cần thiết để kích hoạt dịch vụ và xác nhận thanh toán. Tùy phương thức thanh toán, một phần dữ liệu thanh toán có thể được xử lý bởi nhà cung cấp bên thứ ba thay vì được chúng tôi lưu trữ trực tiếp.',
      'Thông tin kỹ thuật và vận hành như địa chỉ IP, trình duyệt hoặc thiết bị, thời gian truy cập, nhật ký sử dụng, ticket hỗ trợ và dữ liệu cấu hình liên quan đến dịch vụ.',
    ],
  },
  {
    title: '2. Cách chúng tôi sử dụng thông tin',
    bullets: [
      'Để cung cấp, kích hoạt, vận hành và cải thiện dịch vụ.',
      'Để xử lý thanh toán, ngăn chặn lạm dụng và duy trì tính ổn định cũng như bảo mật của hệ thống.',
      'Để liên hệ với bạn về hỗ trợ, thông báo quan trọng, vấn đề tài khoản và cập nhật dịch vụ.',
    ],
  },
  {
    title: '3. Chia sẻ thông tin',
    bullets: [
      'Chúng tôi không bán thông tin cá nhân của bạn.',
      'Chúng tôi có thể chia sẻ một phần thông tin với nhà cung cấp dịch vụ hoặc đối tác hạ tầng khi việc đó là cần thiết để vận hành dịch vụ, xử lý thanh toán hoặc điều tra lạm dụng.',
      'Chúng tôi có thể tiết lộ thông tin nếu pháp luật yêu cầu, để thực thi quy định, hoặc để bảo vệ nền tảng, người dùng và quyền lợi của chúng tôi.',
    ],
  },
  {
    title: '4. Thời gian lưu trữ dữ liệu',
    bullets: [
      'Chúng tôi lưu giữ thông tin trong khoảng thời gian hợp lý cần thiết để cung cấp dịch vụ, tuân thủ nghĩa vụ pháp lý, giải quyết tranh chấp và thực thi chính sách.',
      'Nếu tài khoản hoặc dịch vụ bị chấm dứt, dữ liệu liên quan có thể bị xóa mà không cần thông báo thêm, dù một số log hoặc bản sao lưu có thể còn tồn tại tạm thời.',
    ],
  },
  {
    title: '5. Bảo mật',
    bullets: [
      'Chúng tôi áp dụng các biện pháp hợp lý để giúp bảo vệ thông tin của bạn, nhưng không có dịch vụ trực tuyến nào có thể được bảo đảm an toàn tuyệt đối.',
      'Bạn có trách nhiệm bảo vệ thông tin đăng nhập tài khoản của mình và tự duy trì bản sao lưu dữ liệu khi cần.',
    ],
  },
  {
    title: '6. Cookie và công nghệ tương tự',
    bullets: [
      'Chúng tôi có thể sử dụng cookie, local storage hoặc công nghệ tương tự để duy trì phiên đăng nhập, ghi nhớ tùy chọn và cải thiện trải nghiệm website hoặc portal.',
      'Chúng tôi cũng có thể thu thập thông tin sử dụng để chẩn đoán lỗi, tối ưu hiệu năng và phát hiện hành vi lạm dụng.',
    ],
  },
  {
    title: '7. Trách nhiệm của người dùng',
    bullets: [
      'Vui lòng cung cấp thông tin chính xác và giữ cho thông tin tài khoản luôn được cập nhật.',
      'Không tải lên hoặc chạy nội dung vi phạm Điều khoản dịch vụ hoặc pháp luật hiện hành.',
      'Bạn vẫn chịu trách nhiệm đối với dữ liệu và nội dung mà bạn lưu trữ hoặc xử lý thông qua dịch vụ của chúng tôi.',
    ],
  },
  {
    title: '8. Quyền và yêu cầu của bạn',
    bullets: [
      'Bạn có thể liên hệ để yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin của mình, tùy thuộc vào yêu cầu pháp lý, bảo mật và vận hành.',
      'Chúng tôi có thể cần xác minh danh tính của bạn trước khi xử lý một số yêu cầu nhất định.',
    ],
  },
  {
    title: '9. Quyền riêng tư của trẻ em',
    paragraphs: [
      'Dịch vụ của chúng tôi không dành cho trẻ em nếu không có sự cho phép hoặc giám sát phù hợp. Nếu bạn cho rằng chúng tôi đã thu thập thông tin cá nhân của trẻ em một cách không phù hợp, vui lòng liên hệ để chúng tôi xem xét và xử lý.',
    ],
  },
  {
    title: '10. Thay đổi chính sách này',
    paragraphs: [
      'Chúng tôi có thể cập nhật Chính sách quyền riêng tư này bất kỳ lúc nào. Việc bạn tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận phiên bản đã cập nhật.',
    ],
  },
  {
    title: '11. Liên hệ',
    paragraphs: ['Nếu bạn có câu hỏi về Chính sách quyền riêng tư này, vui lòng liên hệ: stacloud.dev@gmail.com.'],
  },
];

export const slaSections: LegalSection[] = [
  {
    title: '1. Phạm vi áp dụng',
    paragraphs: [
      'SLA này áp dụng cho các dịch vụ trả phí do STACloud trực tiếp vận hành và cấp phát cho khách hàng, bao gồm các gói compute trả phí và quyền truy cập panel đi kèm dịch vụ đó.',
    ],
    bullets: [
      'Không áp dụng cho các gói miễn phí hoặc tài trợ như PROXY FREE, TESTER, node dùng thử, hay bất kỳ dịch vụ community nào được ghi chú là free/sponsored.',
      'Không áp dụng cho Discord, Zalo, email support hoặc các nền tảng cộng đồng của bên thứ ba.',
      'SLA chỉ áp dụng cho thời gian sau khi dịch vụ đã được kích hoạt hợp lệ và thanh toán đầy đủ.',
    ],
  },
  {
    title: '2. Cam kết uptime',
    bullets: [
      'STACloud đặt mục tiêu uptime hàng tháng ở mức 99.9% cho các dịch vụ thuộc phạm vi SLA.',
      'Uptime hàng tháng được tính theo công thức: (tổng thời gian trong tháng - downtime hợp lệ) / tổng thời gian trong tháng.',
      'Downtime hợp lệ là khoảng thời gian dịch vụ không thể truy cập do lỗi phía STACloud kéo dài liên tục từ 5 phút trở lên.',
    ],
  },
  {
    title: '3. Bảo trì và gián đoạn có kế hoạch',
    bullets: [
      'Các đợt bảo trì có kế hoạch sẽ được thông báo trước khi có thể, thông qua portal, ticket hoặc kênh cộng đồng phù hợp.',
      'Bảo trì khẩn cấp có thể được thực hiện mà không cần báo trước nếu việc trì hoãn gây rủi ro cho hệ thống hoặc dữ liệu.',
      'Thời gian bảo trì có kế hoạch hoặc bảo trì khẩn cấp hợp lý sẽ không được tính vào downtime hợp lệ của SLA.',
    ],
  },
  {
    title: '4. Trường hợp loại trừ',
    bullets: [
      'Lỗi do cấu hình, mã nguồn, container, game server, bot hoặc ứng dụng của chính người dùng.',
      'Sự cố do hành vi lạm dụng, vượt fair use, vi phạm Terms of Service hoặc bị tạm ngưng vì lý do bảo mật/vận hành.',
      'Sự cố từ nhà cung cấp upstream, mạng Internet công cộng, DNS bên thứ ba, tấn công DDoS quy mô lớn, hoặc sự kiện bất khả kháng.',
      'Mất dữ liệu, lỗi backup hoặc gián đoạn phát sinh trên các gói miễn phí, sponsored hoặc tester.',
    ],
  },
  {
    title: '5. Yêu cầu kiểm tra SLA',
    bullets: [
      'Nếu cho rằng dịch vụ đã vi phạm SLA, bạn cần mở ticket hoặc gửi email trong vòng 7 ngày kể từ thời điểm sự cố kết thúc.',
      'Yêu cầu cần nêu rõ dịch vụ bị ảnh hưởng, khung thời gian xảy ra sự cố, mức độ tác động và thông tin để STACloud đối chiếu log.',
      'STACloud có quyền xác minh lại log hệ thống trước khi xác nhận một yêu cầu SLA.',
    ],
  },
  {
    title: '6. Service credit',
    paragraphs: [
      'Nếu vi phạm SLA được xác nhận, STACloud có thể cấp service credit dưới dạng gia hạn chu kỳ hoặc cộng credit nội bộ, không quy đổi thành tiền mặt.',
    ],
    bullets: [
      'Uptime từ 99.0% đến dưới 99.9%: service credit 10% giá trị chu kỳ hiện tại.',
      'Uptime từ 95.0% đến dưới 99.0%: service credit 25% giá trị chu kỳ hiện tại.',
      'Uptime dưới 95.0%: service credit 50% giá trị chu kỳ hiện tại.',
      'Tổng service credit tối đa cho một chu kỳ không vượt quá phí của chính chu kỳ đó.',
    ],
  },
  {
    title: '7. Giới hạn trách nhiệm',
    bullets: [
      'Service credit theo SLA là biện pháp khắc phục duy nhất cho downtime thuộc phạm vi SLA.',
      'SLA này không tạo ra nghĩa vụ hoàn tiền mặt và không thay thế các giới hạn trách nhiệm đã nêu trong Terms of Service.',
      'STACloud có thể cập nhật SLA này khi cần thiết để phù hợp với thay đổi hạ tầng hoặc chính sách vận hành.',
    ],
  },
  {
    title: '8. Liên hệ',
    paragraphs: [
      'Mọi yêu cầu liên quan đến SLA vui lòng liên hệ qua email stacloud.dev@gmail.com hoặc ticket support chính thức trên Discord của STACloud.',
    ],
  },
];
