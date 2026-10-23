import {
  AbsoluteFill,
  Sequence,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { Frame, Copy } from "./Visuals";
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
        name="Opening hook"
        durationInFrames={3.5 * fps}
        premountFor={fps}
      >
        <Copy
          eyebrow="SOUND ON · NO MUSIC"
          title={"Take a moment.\nLook around."}
        />
      </Sequence>
      <Sequence
        name="Quiet middle"
        from={7 * fps}
        durationInFrames={3.5 * fps}
        premountFor={fps}
      >
        <Copy
          eyebrow="COME ALONG FOR THE RIDE"
          title={"Just the view.\nJust being here."}
          small
        />
      </Sequence>
      <Sequence
        name="Follow invitation"
        from={19 * fps}
        durationInFrames={3 * fps}
        premountFor={fps}
      >
        <Copy
          eyebrow="MORE JOURNEYS AHEAD"
          title={"Follow\nThe Bus Nerd."}
          small
        />
      </Sequence>
    </AbsoluteFill>
  );
};
