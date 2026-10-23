# The Bus Nerd — travel Reels

## Current delivery status

- **ComeAlong**: completed 22-second vertical edit, original location audio only; no music and no voiceover. The revised version has no opening captions, slogans, permanent watermark or colour overlays. A small “The Bus Nerd” credit appears only during the final two seconds.
- **Experience-DRAFT**: 25-second picture draft. **Not ready to post**: cleared music and remaining footage review are outstanding.
- **Adventure-DRAFT**: 20-second structure draft. **Not ready to post**: cleared music and vehicle/stop/transfer footage review are outstanding. Current accessible material contains landscapes and street details; no vehicle or transfer story is claimed.

Four uploads were accessible: IMG_3062, IMG_3073, IMG_3075, IMG_3076. The download tool rejected IMG_3068, IMG_3071, IMG_3074 and IMG_3077 because they exceed its 32 MiB per-file limit. Smaller copies are needed to review them. No location names or route numbers have been added.

The same minimal text treatment is applied to both picture drafts. Their pending status is shown by their Studio names and these notes, rather than over the footage.

## Editable source

Each shot has its own JSX timeline node. Source is in `src/`, and self-contained prepared media is in `public/clips/`. The prior introductory Reel is a separate project and was not changed.

```sh
npm_config_cache=/tmp/npm-cache npm ci
npm run studio -- src/index.ts --no-open
npm run check
```

Use the existing isolated checkout. No Git worktree is needed. Studio is for local editing; the delivery is the MP4 in the repository's `exports/travel/` directory.

## Render the completed no-music Reel

```sh
npx remotion render src/index.ts ComeAlong out/03-come-along.mp4 --codec=h264 --pixel-format=yuv420p --browser-executable=/usr/bin/chromium --concurrency=2
```

On other machines use your own Chrome executable or omit that argument to let Remotion manage Chrome. Do not export the two music drafts as finished deliverables until their tracks are supplied, rights documented and the edits cut to those tracks.

## Audio and framing

Landscape originals are reframed to a full 9:16 canvas using cover cropping. Media were converted to 30 fps H.264/AAC with rotation baked in. Original audio was retained. Gentle level adjustments were applied (3062 +6 dB, 3073 +14 dB, 3075 unchanged, 3076 +14 dB), with a peak limiter. Some recordings are naturally very quiet. No sounds, speech, music or events were fabricated.

## Music clearance

Requests to the checked official music pages on incompetech.com and freepd.com returned proxy HTTP 403. No third-party tracks were downloaded or used, and no unverified licence is claimed. Two user-supplied, Instagram-cleared tracks and their source/licence details remain required.

## Captions

See `CAPTIONS.md`; only caption 3 currently accompanies a completed Reel.
