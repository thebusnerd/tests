import {
  AbsoluteFill,
  Series,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { Frame, EndCredit } from "./Visuals";
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
      <Sequence
        name="Small end credit"
        from={23 * fps}
        durationInFrames={2 * fps}
        premountFor={fps}
      >
        <EndCredit />
      </Sequence>
    </AbsoluteFill>
  );
};
