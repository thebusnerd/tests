import {
  AbsoluteFill,
  Sequence,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { Frame, EndCredit } from "./Visuals";
export const ComeAlong = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Frame>
        <Series>
          <Series.Sequence
            name="Panoramic town · original ambience"
            durationInFrames={11.5 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3073.mp4")}
              trimBefore={0.3 * fps}
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Street details · original ambience"
            durationInFrames={4.5 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3062.mp4")}
              trimBefore={0.4 * fps}
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Winding road · original ambience"
            durationInFrames={2.7 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3076.mp4")}
              trimBefore={0.1 * fps}
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
          <Series.Sequence
            name="Valley farewell · original ambience"
            durationInFrames={3.3 * fps}
            premountFor={fps}
          >
            <Video
              src={staticFile("clips/3075.mp4")}
              trimBefore={0.2 * fps}
              premountFor={fps}
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Series.Sequence>
        </Series>
      </Frame>
      <Sequence
        name="Small end credit"
        from={20 * fps}
        durationInFrames={2 * fps}
        premountFor={fps}
      >
        <EndCredit />
      </Sequence>
    </AbsoluteFill>
  );
};
