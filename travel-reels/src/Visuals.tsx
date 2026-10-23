import type { ReactNode } from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Frame = ({ children }: { children: ReactNode }) => (
  <AbsoluteFill style={{ background: "#002725", overflow: "hidden" }}>
    {children}
  </AbsoluteFill>
);

export const EndCredit = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div
      style={{
        position: "absolute",
        left: 85,
        bottom: 300,
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 34,
        fontWeight: 500,
        letterSpacing: 0,
        textShadow: "0 1px 6px rgba(0,0,0,.5)",
        opacity: interpolate(frame, [0, 0.3 * fps], [0, 0.85], {
          extrapolateRight: "clamp",
        }),
      }}
    >
      The Bus Nerd
    </div>
  );
};
