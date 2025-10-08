# AI Resume Scanner (Clone)

Một bản dựng tối giản, thuần TypeScript/Next.js mô phỏng chức năng Máy quét Hồ sơ AI.

## Tính năng

- Upload CV PDF, trích xuất văn bản
- Heuristic extraction: kỹ năng, kinh nghiệm, chứng chỉ
- Phân tích phù hợp bằng AI (Mock hoặc OpenAI)
- Kết quả dạng JSON: matchScore, strengths, gaps, interviewQuestions

## Yêu cầu

- Node.js 18+

## Cài đặt

```bash
pnpm install # hoặc npm/yarn
```

## Cấu hình

Tạo file `.env.local` dựa trên mẫu:

```bash
AI_PROVIDER=mock
# Khi dùng OpenAI
# OPENAI_API_KEY=sk-...
```

## Chạy dev

```bash
pnpm dev
```

## Build & Start

```bash
pnpm build && pnpm start
```

## Cấu trúc thư mục

- `src/app` App Router, API route `POST /api/analyze`
- `src/lib` utils xử lý PDF, trích xuất
- `src/types` kiểu dữ liệu chia sẻ

## Ghi chú

- Hỗ trợ PDF <= ~50MB (tùy môi trường). PDF scan kém có thể giảm độ chính xác.
- Mặc định dùng Mock AI để demo. Đổi sang OpenAI bằng cách đặt `AI_PROVIDER=openai` và cấu hình `OPENAI_API_KEY`.
