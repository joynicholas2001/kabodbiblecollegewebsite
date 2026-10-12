import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#142B45",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C5A15B",
          fontWeight: 800,
          fontFamily: "serif",
          borderRadius: "6px",
          border: "1px solid #C5A15B",
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
