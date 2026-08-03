import { ImageResponse } from "next/og";

const SIZE = { width: 1200, height: 630 };

/** Shared 1200×630 branded card for Open Graph and Twitter image routes. */
export function SocialCardImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f1f5ec",
          color: "#1a2a22",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3d7a4a",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              background: "#b8f000",
              border: "2px solid #1a2a22",
            }}
          />
          shivamsabbarwal.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Shivam
            <br />
            Sabbarwal
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: "#c0267e",
              maxWidth: 820,
              lineHeight: 1.25,
            }}
          >
            Engineering leader who ships products and modernizes production
            systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            fontWeight: 600,
            color: "#3d5248",
          }}
        >
          <div>Senior Software Engineer · Cardata</div>
          <div
            style={{
              display: "flex",
              height: 8,
              width: 180,
              background:
                "linear-gradient(90deg, #b8f000 0%, #c0267e 55%, #f5a524 100%)",
            }}
          />
        </div>
      </div>
    ),
    { ...SIZE },
  );
}
