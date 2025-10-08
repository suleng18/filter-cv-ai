import React from 'react';

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: 'AI Resume Scanner là gì?',
    a: 'Là công cụ giúp quét và phân tích nội dung CV (PDF) bằng AI, chấm điểm phù hợp và gợi ý câu hỏi phỏng vấn.',
  },
  {
    q: 'Công cụ có miễn phí không?',
    a: 'Bạn có thể dùng miễn phí với giới hạn hợp lý. Với nhu cầu cao hơn, hãy liên hệ để mở rộng quota.',
  },
  {
    q: 'Hỗ trợ kích thước tệp tối đa bao nhiêu?',
    a: 'Khuyến nghị ≤ 10MB trên bản serverless. Bản Docker tự host có thể xử lý tệp lớn hơn.',
  },
  {
    q: 'Có an toàn khi tải CV lên không?',
    a: 'Chúng tôi chỉ xử lý tạm thời cho mục đích phân tích. Hãy kiểm tra chính sách bảo mật trước khi dùng dữ liệu nhạy cảm.',
  },
  {
    q: 'Làm sao để tăng độ chính xác điểm phù hợp?',
    a: 'Hãy dán mô tả công việc (JD) vào ô tuỳ chọn để AI so khớp CV với yêu cầu chi tiết hơn.',
  },
  {
    q: 'Tôi có thể xuất kết quả không?',
    a: 'Bạn có thể sao chép hoặc tải về JSON kết quả ngay trong phần “Chi tiết JSON”.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="faq section-narrow">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <details className="faq-item" key={idx}>
            <summary>
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden>
                ⌄
              </span>
            </summary>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
