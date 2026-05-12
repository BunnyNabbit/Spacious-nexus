Prior to changing settings, consider if a separate profile should be used. Duplicating the current OBS profile can be done with `Profile > Duplicate...`.

![[media/OBS duplicate profile.webp|OBS screenshot. The profile tab is expanded with the cursor hovering over the duplicate button.]]

## Simple

1. In the output tab in settings with “Output Mode” set to “Simple”. Use “Lossless Quality” preset on the recording section.
2. On the advanced tab, set “Color Format” to “I444 (8-bit, 4:4:4, 3 planes)”.

Videos will be recorded in .avi format if this is done.

## Advanced lossless H.264

1. Ensure that in the output tab in settings with “Output Mode” is set to “Advanced”.
2. Switch over to the “Recording” tab.
3. Set options in the “Recording Settings” section:
   - Recording Format: Hybrid MP4 (.mp4)
   - Video Encoder: x264
   - Optionally set “Audio Encoder” to any lossless format.
4. Set options in the “Encoder Settings” section:
   - Rate Control: CRF
   - CRF: 0
   - x264 options (separated by space): `qp=0`
   - Set “CPU Usage Preset” to highest of what your device can handle. Or set to fastest if you plan to re-encode the video.
5. On the advanced tab, set “Color Format” to “I444 (8-bit, 4:4:4, 3 planes)”.

## Re-encode

Whichever way the video is encoded, it may not exactly be tightly compacted. For this, it may be recommended to re-encode recorded lossless video.

```powershell
ffmpeg -i "./input-video.mp4" -codec:v libx264 -codec:a copy -preset placebo -qp 0 "./output-video.mp4"
```

If `-preset placebo` is too slow. Try `-preset veryslow`.

## Verify (frame extraction)

Check that these lossless videos are in fact lossless. I do this by extracting frames and manually checking them. Using [FFmpeg](https://ffmpeg.org/), this command can be used:

```powershell
ffmpeg -i "./video.mp4" ./frame%04d.png
```
