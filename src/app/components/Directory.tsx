type Column = { title: string; items: string[] };

const columns: Column[] = [
  {
    title: 'Mô hình AI',
    items: [
      'GPT-5',
      'OpenAI o3',
      'OpenAI o4-mini',
      'Hỏi OpenAI o1',
      'Gemini 2.5 Pro',
      'Claude 3.7 Sonnet',
      'DeepSeek-R1',
      'Grok 3',
      'Kling AI',
      'Veo 2',
      'PixVerse AI',
      'DALL·E 3',
      'GPT-4o image',
      'Stable Diffusion',
      'Ideogram 2.0',
      'Recraft AI',
      'Playground AI',
      'Stable Video Diffusion',
      'Pika AI',
    ],
  },
  {
    title: 'Công cụ hình ảnh',
    items: [
      'Máy tạo hình ảnh AI',
      'AI chuyển đổi hình ảnh',
      'Trình tạo video AI',
      'AI chuyển ảnh thành video',
      'AI chuyển văn bản thành video',
      'Trình tạo Anime AI',
      'Công Cụ Xóa Watermark AI',
      'Công cụ xóa nền AI',
      'Trình tạo logo AI',
      'Trình nâng cao hình ảnh AI',
      'Chuyển ảnh thành hoạt hình',
      'Chuyển ảnh thành phác thảo',
    ],
  },
  {
    title: 'Công cụ PDF',
    items: [
      'ChatPDF',
      'Bộ dịch PDF',
      'PDF sang PNG',
      'PDF sang JPG',
      'PDF sang PPT',
      'PDF sang Word',
      'OCR PDF',
      'Bộ kiểm tra hồ sơ trí tuệ nhân tạo',
      'Máy quét Hồ sơ AI',
      'Máy quét hóa đơn',
    ],
  },
  {
    title: 'Công cụ viết',
    items: [
      'Bộ phát hiện trí tuệ nhân tạo',
      'Công cụ Nhân hóa Văn bản AI',
      'Trình Giải Toán AI',
      'Bộ Phát hiện ChatGPT',
      'Bỏ qua AI',
      'Trình dịch AI',
      'Chuyển đổi Văn bản',
    ],
  },
  {
    title: 'Tóm tắt',
    items: [
      'Tóm tắt YouTube',
      'Công cụ tóm tắt video AI',
      'Trình tạo Tóm tắt',
      'Trình tạo Podcast AI',
      'Trình tạo bản đồ tư duy AI',
      'Âm thanh thành văn bản',
      'Chế giễu trên Twitter & Instagram',
    ],
  },
  {
    title: 'So sánh',
    items: [
      'Ask AI',
      'AI Chat',
      'VS ChatGPT Plus',
      'VS Poe',
      'VS Claude AI',
      'VS Microsoft Copilot',
      'ChatGPT VS Gemini',
    ],
  },
  {
    title: 'Tìm hiểu thêm',
    items: [
      'Trung tâm Học tập',
      'Trung tâm Trợ giúp',
      'Giá cả',
      'Blog Monica',
      'Thay Đổi Phím tắt',
      'Liên hệ',
      'ChatGPT for Google',
      'Gemini Pro',
    ],
  },
  {
    title: 'Về chúng tôi',
    items: ['Chính sách Bảo mật', 'Điều khoản và Điều kiện', 'Chương trình liên kết', 'Tuyển dụng'],
  },
];

export default function FeatureDirectory() {
  return (
    <section className="directory" id="features">
      <div className="dir-inner">
        {columns.map((col, idx) => (
          <div className="dir-col" key={idx}>
            <h3>{col.title}</h3>
            <ul>
              {col.items.map((it, i) => (
                <li key={i}>
                  <a href="#">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
