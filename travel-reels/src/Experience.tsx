import {
  AbsoluteFill,
  Series,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { Frame, Copy } from "./Visuals";
// PICTURE DRAFT ONLY: awaiting cleared music and the four unavailable uploads.
export const Experience = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Frame>
        <Series>
          <Series.Sequence
            name="Valley opening"
            durationInFrames={4 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3075.mp4")}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Town detail"
            durationInFrames={6 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3062.mp4")}
              trimBefore={0.2 * fps}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Evening panorama"
            durationInFrames={12 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3073.mp4")}
              trimBefore={0.3 * fps}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Road through the valley"
            durationInFrames={3 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3076.mp4")}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
        </Series>
      </Frame>
      <Sequence name="Hook" durationInFrames={3.5 * fps} premountFor={fps}>
        <Copy
          eyebrow="EXPERIENCE THE JOURNEY"
          title={"Some views\nstay with you."}
        />
      </Sequence>
      <Sequence
        name="End invitation"
        from={22 * fps}
        durationInFrames={3 * fps}
        premountFor={fps}
      >
        <Copy
          eyebrow="THE BUS NERD"
          title={"Follow for\nthe next view."}
          small
        />
      </Sequence>
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 85,
          fontSize: 25,
          color: "#c4df00",
          fontFamily: "sans-serif",
        }}
      >
        PICTURE DRAFT · MUSIC PENDING
      </div>
    </AbsoluteFill>
  );
};
