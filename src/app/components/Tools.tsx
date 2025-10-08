import React from 'react';

type ToolCard = {
  title: string;
  href?: string;
  gradient: string; // css class suffix
  subtitle?: string;
};

const tools: ToolCard[] = [
  { title: 'Bộ dịch PDF', gradient: 'rose' },
  { title: 'PDF sang JPG', gradient: 'violet' },
  { title: 'PDF sang Word', gradient: 'zinc' },
  { title: 'Máy quét AI', href: '#drop', gradient: 'indigo' },
];

export default function ToolsSection() {
  return (
    <section className="tools" aria-labelledby="tools-heading">
      <h2 id="tools-heading">Bộ công PDF Tools</h2>
      <p className="tools-sub">
        Tìm bất kỳ công cụ nào bạn muốn ở đây, giúp hiệu quả trong tầm tay
      </p>
      <div className="tools-grid">
        {tools.map((t, i) => (
          <a
            key={i}
            className={`tool-card grad-${t.gradient}`}
            href={t.href ?? '#'}
            aria-label={t.title}
          >
            <div className="tool-title">{t.title}</div>
            <div className="tool-ghost">➜</div>
          </a>
        ))}
      </div>

      <div className="tools-cta">
        <a className="btn primary" href="#">
          Tìm thêm công cụ ngay bây giờ
        </a>
      </div>
    </section>
  );
}
