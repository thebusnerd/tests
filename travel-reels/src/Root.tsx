import { Composition, Folder } from "remotion";
import { ComeAlong } from "./ComeAlong";
import { Experience } from "./Experience";
import { Adventure } from "./Adventure";
export const Root = () => (
  <>
    <Composition
      id="ComeAlong"
      component={ComeAlong}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={660}
    />
    <Folder name="Drafts-Music-Pending">
      <Composition
        id="Experience-DRAFT"
        component={Experience}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={750}
      />
      <Composition
        id="Adventure-DRAFT"
        component={Adventure}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={600}
      />
    </Folder>
  </>
);
