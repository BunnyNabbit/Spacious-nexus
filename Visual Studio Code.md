## Extensions

Extensions that I use.

### Formatting

- [*JSDoc Folder*](https://marketplace.visualstudio.com/items?itemName=aydgn.jsdoc-folder). Automatically folds documentation comments. Combined with *Prettier* and [BunnyNabbit/prettier-plugin-drone-class](https://github.com/BunnyNabbit/prettier-plugin-drone-class) for elegant handling of symbol summaries.
- [*space Camel*](https://marketplace.visualstudio.com/items?itemName=BunnyNabbit.space-camel). Adds virtual spaces to camelCase/PascalCase.

### Audible editor

I enjoy sound feedback in software. There are extensions that enable this. Some of them seem to be based on the [*play-sound*](https://www.npmjs.com/package/play-sound) *[[npm]]* package. *play-sound* poorly on a default Windows setup but adding *[MPlayer](http://www.mplayerhq.hu/design7/dload.html)* to PATH helps to prevent the media player from opening.

- *[TypaTone (Keyboard sounds)](https://marketplace.visualstudio.com/items?itemName=smo.typatone-vscode)*. Based on *[TypaTone](https://typatone.com/)*.
- *[Sound Syntax](https://marketplace.visualstudio.com/items?itemName=EmreCebeci.soundsyntax)*.
- *[Rainbow Fart](https://marketplace.visualstudio.com/items?itemName=saekiraku.rainbow-fart)*.

## Accessibility and signals

*Visual Studio Code* has accessibility features. Signals are one of them. These are enabled when a screen reader is detected. However, there is a way to force them on, providing an audible experience regardless of whether a screen reader is being used.

In a configuration, an enabled set of signals look like this:

```json
{
	"accessibility.signalOptions.volume": 100,
	"accessibility.signalOptions.debouncePositionChanges": false,
  	"accessibility.signals.save": { "sound": "userGesture" },
	"accessibility.signals.format": { "sound": "always" },
	"accessibility.signals.lineHasError": { "sound": "on" },
	"accessibility.signals.lineHasWarning": { "sound": "on" },
	"accessibility.signals.lineHasFoldedArea":  { "sound": "on" },
}
```

There are way more signals. Type in “accessibility.signals” and let it autocomplete the rest.
