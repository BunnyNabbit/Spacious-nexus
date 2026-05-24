---
title: "My use of Quartz"
---
[*Quartz*](https://quartz.jzhao.xyz/) is the site generator used by *[[index|spacious nexus]]*.

## How I use it

### Git

The true source of information comes from my *[[SilverBullet]]* space hosted on a VPS. To sync documents from my space to my local filesystem, I use *[SilverBullet+](https://silverbullet.plus/)*. From there, I use whichever I do for *[[Git]]* to push changes to the [git repository](https://github.com/BunnyNabbit/Spacious-nexus). As I primarily author notes in SilverBullet, I tend to use *GitHub Desktop Plus* for this.

### Excluding documents from the explorer

I selectively stage changes and commit them to the git repository. Naturally, all of these notes are public. However, some notes aren’t too useful to the general public or are incomplete. But I don’t want to exclude those notes from being published. So instead, I hide them from the explorer.

I use a variation of [this guide](https://noxz.tech/articles/explorer_filters_in_quartz) for creating the explorer filter. It’s different in that I use the `draft` field instead of that guide’s use of `explorerexclude`.

- [ ] Document what was changed. Potentially I’ll have to do this again.

### Automation

- I run `pm2 start "pnpm exec quartz build --watch" --name quartz`
- I have a cron job to `git pull` in 2-hour intervals.
  - It doesn’t work. uh...

I’m getting the idea that I should set up a git hook on my remote repository. But I’m not too sure about updating two repositories. So instead, I have this:

- I set up a `post-commit` hook on my local repository.  
  ```bash
  #!/bin/sh
  powershell.exe -Command "Start-Process -FilePath 'C:\Users\Aon Langton\updateQuartz.cmd'"
  ```
- That’s just to open up a new shell window. `updateQuartz.cmd` looks like this:  
  ```powershell
  pause
  git.exe push
  ssh.exe user@example.invalid "cd ./quartz/content && git pull"
  ```
- Now, when I commit, I get asked if I should push the changes. When I do, my server gets updated. Opening a new window is necessary as I am asked for a passphrase.

### Custom 404 page

I needed my 404 page to be useful. I edited `/quartz/components/pages/404.tsx` to include a link to [the Agora](https://anagora.org/).

```diff
@@ const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
      <h1>404</h1>
+      <p>This page doesn't exist. Well... that's not right. It's yet to exist! Or maybe it was removed? Either way, this is still very normal.</p>
+      <p>But that doesn't mean it stops here. Try seeing if something else exists on <a id="agora">the Agora</a>.</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
@@
+NotFound.afterDOMLoaded = `
+function agoraLink() {
+  const agora = window.document.getElementById("agora")
+  for (let node of document.querySelectorAll("#agora")) {
+    node.href = "https://anagora.org/?q=" + encodeURIComponent(window.location.pathname)
+  }
+}
+setInterval(agoraLink, 1000)
+agoraLink()
+`

 export default (() => NotFound) satisfies QuartzComponentConstructor
```

This potentially enables a more [[social]] aspect of linking. I can link to *the [[Agora]]*. It'll be a 404 page, sure. But folks that are interested in the *Agora* typically write about it, so there is bound to be enough coverage. I can also be rather lax when linking to [[concepts]], even if it's something I wouldn't [[write]] about. Since [[Journal/2026-05-20]], the *spacious nexus* is part of that *Agora*

It creates an interesting opportunity for connecting pages that don't exist. On one hand it's a page that doesn't exist on my graph, but it's also a page that exists elsewhere and has [[connections]] within the vast *Agora*.

### Explicit unpublishing

My committed notes are public by default. But sometimes it doesn’t make sense to publish these to my website. Quartz comes with [explicit publishing](https://quartz.jzhao.xyz/plugins/ExplicitPublish), so I edited the plugin to be used for explicit unpublishing. This is similar to how the [RemoveDrafts](https://quartz.jzhao.xyz/plugins/RemoveDrafts) plugin works, with the difference being that it acts when `publish` is `false` on a document’s frontmatter.

`/quartz/plugins/filters/explicit.ts`  
```ts
import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const explicitlyUnpublished: boolean = vfile.data?.frontmatter?.publish === false || vfile.data?.frontmatter?.publish === "false"
    return !explicitlyUnpublished
  },
})
```
