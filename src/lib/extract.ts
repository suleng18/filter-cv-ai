const SKILL_KEYWORDS = [
  'javascript',
  'typescript',
  'react',
  'next.js',
  'node',
  'python',
  'java',
  'aws',
  'docker',
  'kubernetes',
  'sql',
  'nosql',
  'graphql',
  'rest',
  'microservices',
  'ci/cd',
  'git',
  'linux',
  'gcp',
  'azure',
];

export function extractSkills(text: string): string[] {
  const normalized = text.toLowerCase();
  const found = new Set<string>();
  for (const kw of SKILL_KEYWORDS) {
    if (normalized.includes(kw)) found.add(kw);
  }
  return Array.from(found).sort();
}

export function extractExperiences(text: string): string[] {
  const lines = text
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);
  return lines
    .filter((l) =>
      /\b(\d+\+?\s?(years|năm)|intern|junior|senior|lead|manager|engineer|developer)\b/i.test(l),
    )
    .slice(0, 20);
}

export function extractCertifications(text: string): string[] {
  const CERT_PATTERNS = [
    /aws\s*certified[^\n]*/i,
    /azure\s*certified[^\n]*/i,
    /gcp\s*certified[^\n]*/i,
    /pmp|prince2|scrum\s*master/i,
    /oracle\s*certified[^\n]*/i,
  ];
  const lines = text
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);
  const results: string[] = [];
  for (const line of lines) {
    if (CERT_PATTERNS.some((p) => p.test(line))) results.push(line);
  }
  return Array.from(new Set(results)).slice(0, 20);
}
