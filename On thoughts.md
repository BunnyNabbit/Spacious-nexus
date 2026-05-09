What I use is SilverBullet. It’s not perfect, it’s terrible, really. But it gets there.

> it’s terrible, really.

That’s because I’m a big fan of proportional fonts. So, I find monotype fonts looking terrible for me. Yes, that means I use them everywhere, including for programming. Yes, I think it looks nice. No, I can’t go back. The website you’re reading this on isn’t in monospace, obviously. But where I’m writing it on is. I’m sure that makes sense.

## So, ‘fonts,’, huh?

I was used to monospace fonts in programming. I didn’t write much either. But at one point I discovered that the font could be changed in Visual Studio Code. That point was when I was also used to seeing Arial as a font used for a game’s chat interface. So, I used that font as my editor’s font. Sure, I thought there were problems when selecting blocks of code and that code didn’t quite align anymore. But I remained ignorant. And then I gotten used to it and see the benefits over monotype fonts.

I like proportional fonts in programming because:

- It’s very compact.
- Arial looks nice at any resolution. Some fonts aren’t tuned for that.
- Some specific typos can be found easily.

Downsides includes:
- Alignment. Not important if you’re using an opinionated formatter. Elastic tabstops would’ve fix this, but nobody cares about the human aspect of coding anymore, do they?
- Some specific typos can be missed easily. Arial has issues with l and I characters looking identical. Spell checkers fixes this.

Maybe I’d like my terminal to also use proportional fonts. However, very little is done for this. Most terminals just don’t work under any proportional fonts, usually they still put glyphs in a cell grid.

Actually. It is possible to change the font in SilverBullet. [How to change editor and ui fonts - Tricks & Techniques - SilverBullet Community](https://community.silverbullet.md/t/how-to-change-editor-and-ui-fonts/752)

```space-style
@font-face {
  font-family: 'Arial';
}

#sb-root {
       --editor-font: "Arial" !important;
       --ui-font: "Arial" !important;
}
```

Just that. A code block is all that’s needed. Any page, it just works.
