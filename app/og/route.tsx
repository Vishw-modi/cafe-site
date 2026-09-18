import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";


export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FDFBF7",
          backgroundImage: "radial-gradient(circle at 50% 50%, #F5EFE6 0%, #FDFBF7 100%)",
          color: "#2C221E",
          fontFamily: "serif",
          padding: "60px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Subtle decorative border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid #E8E2D8",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8F9E8B",
              marginBottom: "16px",
              fontFamily: "sans-serif",
            }}
          >
            Sanctuary of Calm
          </span>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: "300",
              letterSpacing: "0.05em",
              margin: "0 0 16px 0",
              color: "#2C221E",
            }}
          >
            {siteConfig.name}
          </h1>

          <div
            style={{
              width: "80px",
              height: "2px",
              backgroundColor: "#C4A484",
              marginBottom: "20px",
            }}
          />

          <p
            style={{
              fontSize: "24px",
              fontStyle: "italic",
              color: "#2C221E",
              opacity: 0.8,
              margin: 0,
            }}
          >
            {siteConfig.tagline}
          </p>

          <span
            style={{
              fontSize: "14px",
              color: "#C4A484",
              marginTop: "32px",
              fontFamily: "sans-serif",
            }}
          >
            {siteConfig.address.street} • {siteConfig.address.neighborhood}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
