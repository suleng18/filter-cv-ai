export type ExtractedResume = {
  rawText: string;
  skills: string[];
  experiences: string[];
  certifications: string[];
};

export type AnalyzeRequest = {
  jobDescription?: string;
  text: string;
};

export type AnalyzeResult = {
  matchScore: number; // 0-100
  strengths: string[];
  gaps: string[];
  interviewQuestions: string[];
  extracted: ExtractedResume;
};
