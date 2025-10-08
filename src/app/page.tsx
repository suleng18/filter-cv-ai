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
            <span className="gradient-text">Máy quét CV trực tuyến miễn phí</span>
          </h1>
          <p>Nhanh chóng xác định ứng viên đáng tin cậy nhất, tối ưu hóa quy trình tuyển dụng.</p>
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
