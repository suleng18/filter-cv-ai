import pdf from 'pdf-parse';

export async function parsePdfToText(fileBuffer: Buffer): Promise<string> {
  const data = await pdf(fileBuffer);
  return data.text || '';
}
