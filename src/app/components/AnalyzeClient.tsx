'use client';

import React, { useCallback, useState } from 'react';
import type { AnalyzeResult } from '@/types/analyze';

export default function AnalyzeClient() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFile = useCallback((f: File | null) => {
    if (!f) {
      setFile(null);
      return;
    }
    if (f.type !== 'application/pdf') {
      setError('Chỉ hỗ trợ tệp PDF.');
      return;
    }
    setError(null);
    setFile(f);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const f = e.dataTransfer.files?.[0] ?? null;
      handleFile(f);
    },
    [handleFile],
  );

  const onDragOver = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0] ?? null;
      handleFile(f);
    },
    [handleFile],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);
    if (!file) {
      setError('Vui lòng chọn tệp PDF.');
      return;
    }
    setLoading(true);
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('jobDescription', jobDescription);
      const res = await fetch('/api/analyze', { method: 'POST', body: form });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed: ${res.status}`);
      }
      const data = (await res.json()) as AnalyzeResult;
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra.');
    } finally {
      setLoading(false);
    }
  }

  const removeFile = useCallback(() => {
    setFile(null);
  }, []);

  const copyJson = useCallback(() => {
    if (!result) return;
    const data = JSON.stringify(result, null, 2);
    navigator.clipboard.writeText(data).catch(() => {});
  }, [result]);

  const downloadJson = useCallback(() => {
    if (!result) return;
    const data = JSON.stringify(result, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'analysis.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [result]);

  const progressAngle = result ? Math.round((result.matchScore / 100) * 360) : 0;

  return (
    <main>
      <div className="container">
        <section className="hero card">
          <h1>AI Resume Scanner</h1>
          <p>Phân tích hồ sơ PDF bằng AI, gợi ý câu hỏi phỏng vấn và chấm điểm phù hợp.</p>
          <form className="u-flow" onSubmit={onSubmit}>
            <label
              className={`dropzone${isDragging ? ' active' : ''}`}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
            >
              <input type="file" accept="application/pdf" onChange={onFileChange} hidden />
              <div className="dz-content">
                <div className="dz-icon" aria-hidden>
                  📄
                </div>
                <div className="dz-text">
                  <strong>Kéo & thả</strong> CV PDF vào đây, hoặc{' '}
                  <span className="link">chọn tệp</span>
                </div>
                <div className="dz-sub">Hỗ trợ tệp PDF tối đa ~50MB</div>
              </div>
            </label>

            {file && (
              <div className="card file-card">
                <div className="file-row">
                  <div className="file-name" title={file.name}>
                    {file.name}
                  </div>
                  <button
                    type="button"
                    className="btn ghost"
                    onClick={removeFile}
                    disabled={loading}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            )}

            <div className="card">
              <label>Mô tả công việc (tuỳ chọn)</label>
              <textarea
                rows={6}
                placeholder="Dán JD để tăng độ chính xác đánh giá phù hợp"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <div className="actions">
              <button type="submit" className="btn primary" disabled={loading}>
                {loading ? 'Đang phân tích...' : 'Phân tích hồ sơ'}
              </button>
            </div>

            {error && (
              <div className="card error" role="alert" aria-live="polite">
                {error}
              </div>
            )}
          </form>
        </section>

        {result && (
          <section className="results u-flow">
            <div className="card score-card">
              <div className="score-wrap">
                <div
                  className="score-badge"
                  style={{
                    background: `conic-gradient(#10b981 0deg, #10b981 ${progressAngle}deg, #e5e7eb ${progressAngle}deg 360deg)`,
                  }}
                >
                  <div className="score-inner">
                    <div className="score-num">{result.matchScore}</div>
                    <div className="score-label">điểm phù hợp</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="results-grid">
              <div className="card accent success">
                <h2>Ưu điểm</h2>
                <ul className="result-list success">
                  {(result.strengths || []).slice(0, 10).map((s, i) => (
                    <li key={`st-${i}`}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="card accent warning">
                <h2>Điểm cần cải thiện</h2>
                <ul className="result-list warning">
                  {(result.gaps || []).slice(0, 10).map((g, i) => (
                    <li key={`gap-${i}`}>{g}</li>
                  ))}
                </ul>
              </div>

              <div className="card accent info">
                <h2>Kỹ năng</h2>
                <div className="chips">
                  {(result.extracted.skills || []).slice(0, 30).map((s, i) => (
                    <span className="chip" key={`${s}-${i}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card accent neutral">
                <h2>Kinh nghiệm</h2>
                <ul className="list">
                  {(result.extracted.experiences || []).slice(0, 10).map((exp, i) => (
                    <li key={`exp-${i}`}>{exp}</li>
                  ))}
                </ul>
              </div>

              <div className="card accent slate">
                <h2>Chứng chỉ</h2>
                <ul className="list">
                  {(result.extracted.certifications || []).slice(0, 10).map((c, i) => (
                    <li key={`cert-${i}`}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="card accent primary">
                <h2>Câu hỏi phỏng vấn gợi ý</h2>
                <ul className="list">
                  {(result.interviewQuestions || []).slice(0, 10).map((q, i) => (
                    <li key={`q-${i}`}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>

            <details className="card details">
              <summary>Chi tiết JSON</summary>
              <div className="code-actions">
                <button type="button" className="btn" onClick={copyJson}>
                  Sao chép
                </button>
                <button type="button" className="btn" onClick={downloadJson}>
                  Tải về
                </button>
              </div>
              <pre className="code-block">{JSON.stringify(result, null, 2)}</pre>
            </details>
          </section>
        )}
      </div>
    </main>
  );
}
