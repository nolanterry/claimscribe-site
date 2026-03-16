import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ClaimScribe — AI-Powered Damage Scoping for Restoration Contractors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #080810 0%, #111827 50%, #080810 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #EAB308 0%, #FACC15 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#EAB308",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "#080810",
            }}
          >
            CS
          </div>
          <span style={{ color: "#EAB308", fontSize: "28px", fontWeight: 700 }}>
            ClaimScribe
          </span>
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          AI-Powered Damage Scoping for Restoration Contractors
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          Photo AI damage analysis, voice-to-scope, Xactimate codes, branded PDF reports. Never miss a billable line item again.
        </div>
        <div style={{ display: "flex", marginTop: "32px" }}>
          <div
            style={{
              background: "#EAB308",
              color: "#080810",
              padding: "12px 32px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Try Free for 14 Days → claimscribe.ai
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
