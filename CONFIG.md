---
draft: true
publish: false
---
[How to change editor and ui fonts - Tricks & Techniques - SilverBullet Community](https://community.silverbullet.md/t/how-to-change-editor-and-ui-fonts/752)
```space-style
@font-face {
  font-family: 'Arial';
}

#sb-root {
       --editor-font: "Arial" !important;
       --ui-font: "Arial" !important;
}
```

```space-lua
-- managed-by: configuration-manager
command.update { name = "Open Command Palette", key = "Mod-Shift-p" }
command.update { name = "Navigate: Page Picker", key = "Mod-r" }
command.update { name = "Silversearch: Search", key = "" }
command.update { name = "Sync: Space", key = "Mod-s" }
```
# Templates
```space-lua
-- the `templates` global table is available for custom templates
templates.linkButton = template.new [==[<a href="${link}"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/${icon}.ico"></a>]==]
```

> See zhose _foul smelling_ animals? Zhey’re hap[[Watersports|p]]ier zhan you. Zhey smell bad. But zhey’re happier zhan __you’ll ever be__. *Steve Jobs* once said “you’re Holding it wrong.”.
