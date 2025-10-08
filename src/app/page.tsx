import AnalyzeClient from './components/AnalyzeClient';
import { FeaturesSection, StepsSection } from './components/Sections';
import ToolsSection from './components/Tools';
import FeatureDirectory from './components/Directory';
import FAQSection from './components/FAQ';

export default function Page() {
  return (
    <>
      <section className="hero-block" id="drop">
        <div className="hero-inner">
          <h1>
            <span className="gradient-text">
              AI Resume Scanner - Máy quét CV AI trực tuyến miễn phí
            </span>
          </h1>
          <p>
            AI Resume Scanner: Phân tích CV PDF bằng trí tuệ nhân tạo, chấm điểm mức độ phù hợp và
            gợi ý câu hỏi phỏng vấn.
          </p>
          <img
            src="/hero.svg"
            alt="AI Resume Scanner - minh họa máy quét CV AI phân tích CV PDF và chấm điểm phù hợp"
            style={{ maxWidth: '760px', width: '100%', margin: '0 auto' }}
          />
          <AnalyzeClient />
        </div>
      </section>

      <ToolsSection />
      <FeaturesSection />
      <StepsSection />
      <FeatureDirectory />
      <FAQSection />
    </>
  );
}
