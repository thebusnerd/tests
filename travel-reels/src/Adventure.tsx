import {
  AbsoluteFill,
  Series,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { Frame, Copy } from "./Visuals";
// STRUCTURE DRAFT ONLY: vehicle / transfer footage and cleared music still needed.
export const Adventure = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Frame>
        <Series>
          <Series.Sequence
            name="Winding roads"
            durationInFrames={2.5 * fps}
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
          <Series.Sequence
            name="Street-level detail"
            durationInFrames={4 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3062.mp4")}
              trimBefore={1 * fps}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Town rooftops"
            durationInFrames={4 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3073.mp4")}
              trimBefore={3 * fps}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Valley reveal"
            durationInFrames={3.5 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3075.mp4")}
              trimBefore={0.3 * fps}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Panoramic finish"
            durationInFrames={6 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3073.mp4")}
              trimBefore={7 * fps}
              muted
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
        </Series>
      </Frame>
      <Sequence name="Opening" durationInFrames={2.5 * fps} premountFor={fps}>
        <Copy
          eyebrow="THE ADVENTURE ALONG THE WAY"
          title={"Follow\nthe road."}
        />
      </Sequence>
      <Sequence
        name="Closing"
        from={17 * fps}
        durationInFrames={3 * fps}
        premountFor={fps}
      >
        <Copy eyebrow="THE BUS NERD" title={"Where\nnext?"} small />
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
        DRAFT · FOOTAGE & MUSIC PENDING
      </div>
    </AbsoluteFill>
  );
};
