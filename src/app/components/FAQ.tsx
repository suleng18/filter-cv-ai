import React from 'react';

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: 'Có miễn phí sử dụng Máy Quét Hồ Sơ AI không?',
    a: 'Có, bạn có thể nhận gói miễn phí để sử dụng thử công cụ sau khi đăng ký.',
  },
  {
    q: 'Có giới hạn về kích thước khi tải lên các tệp tin PDF không?',
    a: 'Công cụ hỗ trợ các tệp PDF có kích thước tối đa khoảng 50MB (tùy môi trường).',
  },
  {
    q: 'Ai sẽ được hưởng lợi từ AI Resume Scanner?',
    a: 'Nhà tuyển dụng, HR, và cả ứng viên muốn tối ưu hóa hồ sơ đều có thể sử dụng để đánh giá nhanh mức độ phù hợp.',
  },
  {
    q: 'Resume Scanner là gì?',
    a: 'Là công cụ quét và phân tích nội dung CV, trích xuất thông tin chính, gợi ý câu hỏi phỏng vấn và chấm điểm phù hợp với JD.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="faq">
      <h2>Câu hỏi thường gặp</h2>
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
