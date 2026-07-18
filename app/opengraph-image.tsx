import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #3b82f6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="64" height="64" rx="16" fill="rgba(255,255,255,0.15)" />
            <path
              d="M20 18h24a2 2 0 012 2v24a2 2 0 01-2 2H20a2 2 0 01-2-2V20a2 2 0 012-2z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path d="M24 28h16M24 34h12M24 40h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="44" cy="44" r="10" fill="#22c55e" />
            <path d="M40 44l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-2px",
          }}
        >
          AI Resume Analyzer
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Upload your resume. Get an instant ATS score. Land your dream job.
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {["ATS Score", "AI Analysis", "Keyword Check"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "999px",
                padding: "10px 24px",
                color: "white",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
