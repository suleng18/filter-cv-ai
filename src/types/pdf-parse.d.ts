declare module 'pdf-parse' {
  const pdfParse: (buffer: Buffer | ArrayBuffer | Uint8Array) => Promise<{ text?: string }>;
  export default pdfParse;
}
