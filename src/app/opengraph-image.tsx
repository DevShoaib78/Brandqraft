import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "BrandQraft | Branding, Digital Marketing & Business Scaling Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#043E52",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative top-right accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(225,106,61,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Decorative bottom-left accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(28,146,144,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            color: "#1C9290",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Branding · Digital Marketing · Business Scaling
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 28,
            letterSpacing: "-0.02em",
          }}
        >
          BrandQraft
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.65)",
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 700,
            marginBottom: 56,
          }}
        >
          Transforming innovative ideas into thriving brands — end-to-end, from ideation to growth.
        </div>

        {/* Accent divider */}
        <div
          style={{
            display: "flex",
            width: 80,
            height: 4,
            background: "#E16A3D",
            marginBottom: 36,
          }}
        />

        {/* Bottom domain */}
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.4)",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          brandqraft.co
        </div>
      </div>
    ),
    { ...size }
  );
}
