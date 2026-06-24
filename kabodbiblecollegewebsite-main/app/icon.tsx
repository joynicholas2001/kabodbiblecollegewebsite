import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#5B2D90",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F5B800",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
