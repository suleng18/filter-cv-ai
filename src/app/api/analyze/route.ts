import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: '/api/analyze', methods: ['POST'] });
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file');
    const jobDescription = (form.get('jobDescription') as string) || undefined;

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Missing PDF file' }, { status: 400 });
    }
    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Only PDF supported' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse PDF with dynamic import to keep route light
    let text = '';
    try {
      const mod = await import('pdf-parse');
      const pdfParse = (mod as any).default || (mod as any);
      const data = await pdfParse(buffer);
      text = String(data?.text || '');
    } catch (e) {
      console.warn('pdf-parse failed, continue with empty text');
    }

    const extract = await import('@/lib/extract');
    const aiMod = await import('@/lib/ai/provider');

    const skills = extract.extractSkills(text);
    const experiences = extract.extractExperiences(text);
    const certifications = extract.extractCertifications(text);

    const ai = aiMod.getAIProvider();
    let aiResult: any;
    try {
      aiResult = await ai.analyze({ jobDescription, text });
    } catch (e) {
      aiResult = {
        matchScore: Math.min(100, skills.length * 5),
        strengths: skills.slice(0, 5).map((s) => `Có kinh nghiệm với ${s}`),
        gaps: skills.slice(5, 10).map((s) => `Cần làm rõ mức độ: ${s}`),
        interviewQuestions: [
          'Hãy mô tả dự án gần đây nhất và vai trò của bạn?',
          'Bạn giải quyết sự cố sản xuất như thế nào?',
          'Kinh nghiệm làm việc nhóm và code review của bạn?',
        ],
        extracted: { rawText: text, skills: [], experiences: [], certifications: [] },
      };
    }

    return NextResponse.json({
      ...aiResult,
      extracted: {
        rawText: text,
        skills: aiResult.extracted?.skills?.length ? aiResult.extracted.skills : skills,
        experiences: aiResult.extracted?.experiences?.length
          ? aiResult.extracted.experiences
          : experiences,
        certifications: aiResult.extracted?.certifications?.length
          ? aiResult.extracted.certifications
          : certifications,
      },
    });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
