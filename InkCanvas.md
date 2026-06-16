---
draft: true
---
As an artist, I interact with the [InkCanvas](https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.inkcanvas?view=windowsdesktop-10.0) element. I prefer its default stroke styles, especially its natural pencil marks. I don’t develop *Windows* applications, so I don’t know its internals. Strokes are vector-based. It’s typically possible to export (or at least view) drawings in a higher resolution.

Applications that use this element vary wildly differently in what features are supported. This rather annoyed me, given that applications would miss some features or had quirks that made it unbearable to author in.

| Application | Tilt supported | Pressure supported | Clipboard |
|-|-|-|-|
| [*Microsoft Journal*](https://apps.microsoft.com/detail/9n318r854rhh?hl=en-US&gl=US) | Yes | Yes | Yes |
| [*Inkodo*](https://apps.microsoft.com/detail/9nblggh4s50q?hl=en-us&gl=US) | Yes | Yes | Yes |
| [*SketchPal*](https://apps.microsoft.com/detail/9mvt92nrf5mx?hl=en-us&gl=US) | Yes | Yes | No |
| [*Sketch360*](https://apps.microsoft.com/detail/9p89s2qlh11t?hl=en-us&gl=US) | No | Yes | Yes |

- *Microsoft Journal* appears to be mostly intended for note keeping. While it does recognize and index drawings, authoring drawings can be tedious as gestures can be interpreted. Gestures can be undone, restoring the stroke that was misrecognized, but this still causes friction. As collections of ink is being classified and indexed locally, the device can run hot. This can be problematic on a tablet device, where the user’s hand collides with the screen while drawing.
- *Inkodo* features various export options. Strokes can be exported into transparent PNG. It’s possible to export strokes into SVG but this doesn’t work too well with pencil strokes. Achieving high-quality exports is only possible by exporting to PDF, which lack transparency.
- *SketchPal* almost seems perfect as a drawing option for me. It has layers and various tools to assist in drawing. However, its lack of exporting strokes to the clipboard for use in outside applications turns me away.
- *Sketch360* can export timelapses of the strokes being added. While it does have support for layers, I found this rather unstable. Imported strokes with tilt information will display fine, the application doesn’t support adding new tilted strokes.

So. What do I tend to use? I decided to just stick with *Microsoft Journal* for authoring and exporting. The way I export drawings is to use a high-DPI device and take a screenshot. For the device running hot problem, I just remote into a more capable machine via *Windows*’ *Remote Desktop Connection*.
