import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
export const LIME = "#c4df00";
export const Frame = ({ children }: { children: React.ReactNode }) => (
  <AbsoluteFill
    style={{
      background: "#002725",
      overflow: "hidden",
      fontFamily: "Arial, Helvetica, sans-serif",
      color: "white",
    }}
  >
    {children}
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        background:
          "linear-gradient(180deg,rgba(0,25,22,.35) 0%,transparent 28%,transparent 55%,rgba(0,25,22,.70) 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 190,
        left: 85,
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontSize: 25,
        fontWeight: 700,
        letterSpacing: 4,
        textShadow: "0 2px 14px #001a18",
      }}
    >
      <div style={{ width: 7, height: 28, background: LIME }} />
      THE BUS NERD
    </div>
  </AbsoluteFill>
);
export const Copy = ({
  eyebrow,
  title,
  small = false,
}: {
  eyebrow?: string;
  title: string;
  small?: boolean;
}) => {
  const f = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  return (
    <div
      style={{
        position: "absolute",
        left: 85,
        right: 150,
        bottom: 340,
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "white",
        opacity: interpolate(
          f,
          [0, 0.22 * fps, durationInFrames - 0.25 * fps, durationInFrames],
          [0, 1, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        ),
        translate: `0 ${interpolate(f, [0, 0.6 * fps], [22, 0], { extrapolateRight: "clamp" })}px`,
        textShadow: "0 3px 25px rgba(0,20,18,.7)",
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            color: LIME,
            marginBottom: 22,
          }}
        >
          {eyebrow}
        </div>
      )}
      <div
        style={{
          whiteSpace: "pre-line",
          fontSize: small ? 66 : 88,
          lineHeight: 1.06,
          fontWeight: 800,
          letterSpacing: -3,
        }}
      >
        {title}
      </div>
      <div style={{ width: 90, height: 5, background: LIME, marginTop: 28 }} />
    </div>
  );
};
