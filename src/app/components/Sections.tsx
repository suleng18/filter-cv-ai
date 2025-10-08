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
