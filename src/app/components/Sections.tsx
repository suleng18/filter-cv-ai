export function FeaturesSection() {
  return (
    <section id="features" className="features card">
      <h2>Tại sao nên sử dụng máy quét hồ sơ AI?</h2>
      <div className="feature-grid">
        <div className="feature">
          <h3>🛠️ Tối ưu hóa Quy trình Tuyển dụng</h3>
          <p>
            Xử lý và phân tích hồ sơ nhanh chóng giúp nhà tuyển dụng tập trung vào việc tương tác
            với ứng viên tiềm năng.
          </p>
        </div>
        <div className="feature">
          <h3>🤝 Hiểu Rõ Hơn về Ứng viên</h3>
          <p>Tạo câu hỏi phỏng vấn theo CV, cung cấp cái nhìn sâu sắc về kỹ năng và kinh nghiệm.</p>
        </div>
        <div className="feature">
          <h3>🚀 Tăng Hiệu Quả Tuyển Dụng</h3>
          <p>
            Tự động hóa tác vụ lặp lại để dành thời gian cho các khía cạnh chiến lược của tuyển
            dụng.
          </p>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <a className="btn primary" href="#drop">
          Thêm vào trình duyệt
        </a>
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section id="how" className="steps card">
      <h2>3 bước đơn giản để sử dụng máy quét hồ sơ</h2>
      <div className="steps-grid">
        <div className="step">
          <div className="step-num">1</div>
          <h3>Tải Lên</h3>
          <p>Tải hồ sơ ứng viên lên dưới dạng file .pdf.</p>
        </div>
        <div className="step">
          <div className="step-num">2</div>
          <h3>Phân Tích</h3>
          <p>AI phân tích kỹ năng, kinh nghiệm và chứng chỉ tức thời.</p>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <h3>Đánh Giá</h3>
          <p>Xem tổng hợp và chấm điểm phù hợp dựa trên yêu cầu công việc.</p>
        </div>
      </div>
    </section>
  );
}

export function WhyUseSection() {
  return (
    <section className="card section-narrow" id="why-use">
      <h2>Why Use AI Resume Scanner</h2>
      <ul className="list">
        <li>Tiết kiệm thời gian sàng lọc CV, nhất quán trong đánh giá.</li>
        <li>Gợi ý câu hỏi phỏng vấn bám sát nội dung CV và JD.</li>
        <li>Dễ tích hợp vào quy trình hiện tại và mở rộng cho nhiều vị trí.</li>
      </ul>
    </section>
  );
}

export function HowToUseSection() {
  return (
    <section className="card section-narrow" id="how-to-use">
      <h2>How To Use</h2>
      <ol className="list">
        <li>Nhấn “Chọn tệp” và tải lên CV PDF.</li>
        <li>(Tuỳ chọn) Dán JD để tăng độ chính xác khi chấm điểm.</li>
        <li>Nhấn “Phân tích hồ sơ” và xem kết quả.</li>
      </ol>
    </section>
  );
}

export function MetricsSection() {
  return (
    <section className="card section-narrow" id="metrics">
      <h2>Metrics Explanation</h2>
      <ul className="list">
        <li>
          <strong>Match Score</strong>: Điểm 0–100 ước lượng mức phù hợp của CV với JD.
        </li>
        <li>
          <strong>Strengths/Gaps</strong>: Ưu điểm và điểm cần làm rõ để hỗ trợ ra quyết định.
        </li>
        <li>
          <strong>Interview Questions</strong>: Gợi ý câu hỏi để xác thực trải nghiệm thực tế.
        </li>
      </ul>
    </section>
  );
}

export function CrossSellSection() {
  return (
    <section className="card section-narrow" id="cross-sell">
      <h2>Cross Sell</h2>
      <ul className="list">
        <li>
          <a href="#">PDF to JPG</a> – chuyển đổi nhanh trang CV thành hình để chèn vào form nội bộ.
        </li>
        <li>
          <a href="#">PDF to Word</a> – xuất CV sang Word để biên tập, làm nổi bật nội dung.
        </li>
        <li>
          <a href="#">OCR PDF</a> – trích xuất văn bản từ CV scan để tìm kiếm và so khớp từ khoá.
        </li>
      </ul>
    </section>
  );
}
