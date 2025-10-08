import { AnalyzeRequest, AnalyzeResult } from '@/types/analyze';

export interface AIProvider {
  analyze(input: AnalyzeRequest): Promise<AnalyzeResult>;
}

function scoreMatch(skillsFromCv: string[], jd?: string): number {
  if (!jd) return Math.min(100, skillsFromCv.length * 5);
  const jdLower = jd.toLowerCase();
  const hits = skillsFromCv.filter((s) => jdLower.includes(s)).length;
  const ratio = skillsFromCv.length ? hits / skillsFromCv.length : 0;
  return Math.round(Math.min(100, 50 + ratio * 50));
}

export class MockAIProvider implements AIProvider {
  async analyze(input: AnalyzeRequest): Promise<AnalyzeResult> {
    const skills = Array.from(
      new Set((input.text.match(/[A-Za-z+#.]{2,}/g) || []).map((s) => s.toLowerCase())),
    ).slice(0, 30);
    const matchScore = scoreMatch(skills, input.jobDescription);
    return {
      matchScore,
      strengths: skills.slice(0, 5).map((s) => `Có kinh nghiệm với ${s}`),
      gaps: skills.slice(5, 10).map((s) => `Cần làm rõ mức độ: ${s}`),
      interviewQuestions: [
        'Hãy mô tả dự án gần đây nhất và vai trò của bạn?',
        'Bạn giải quyết sự cố sản xuất như thế nào?',
        'Kinh nghiệm làm việc nhóm và code review của bạn?',
      ],
      extracted: {
        rawText: input.text,
        skills,
        experiences: [],
        certifications: [],
      },
    };
  }
}

export class OpenAIProvider implements AIProvider {
  private client: any;
  constructor(apiKey: string) {
    // Lazy import to avoid SSR issues
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const OpenAI = require('openai').default;
    this.client = new OpenAI({ apiKey });
  }
  async analyze(input: AnalyzeRequest): Promise<AnalyzeResult> {
    const system =
      'Bạn là trợ lý tuyển dụng. Phân tích CV, chấm điểm phù hợp (0-100), liệt kê strengths, gaps, tạo 5 câu hỏi phỏng vấn. Trả về JSON theo schema {matchScore,strengths,gaps,interviewQuestions,extracted:{rawText,skills,experiences,certifications}}.';
    const prompt = `CV:\n${input.text}\n\nJD:\n${input.jobDescription ?? ''}\n`;
    const resp = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
    });
    console.log('🚀 - OpenAIProvider - resp:', resp);

    const content = resp.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(content);
    // Basic runtime validation/normalization
    return {
      matchScore: Math.max(0, Math.min(100, Number(parsed.matchScore) || 0)),
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
      gaps: Array.isArray(parsed.gaps) ? parsed.gaps : [],
      interviewQuestions: Array.isArray(parsed.interviewQuestions) ? parsed.interviewQuestions : [],
      extracted: {
        rawText: String(parsed.extracted?.rawText ?? input.text),
        skills: Array.isArray(parsed.extracted?.skills) ? parsed.extracted.skills : [],
        experiences: Array.isArray(parsed.extracted?.experiences)
          ? parsed.extracted.experiences
          : [],
        certifications: Array.isArray(parsed.extracted?.certifications)
          ? parsed.extracted.certifications
          : [],
      },
    };
  }
}

export function getAIProvider(): AIProvider {
  const useOpenAI = process.env.OPENAI_API_KEY && process.env.AI_PROVIDER !== 'mock';
  if (useOpenAI) return new OpenAIProvider(process.env.OPENAI_API_KEY as string);
  return new MockAIProvider();
}
