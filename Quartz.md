---
draft: true
---
[*Quartz*](https://quartz.jzhao.xyz/) is the site generator used by *[[index|spacious nexus]]*.

## How I use it

### Git

The true source of information comes from my *[[SilverBullet]]* space hosted on a VPS. To sync documents from my space to my local filesystem, I use *[SilverBullet+](https://silverbullet.plus/)*. From there, I use whichever I do for *[[Git]]* to push changes to the [git repository](https://github.com/BunnyNabbit/Spacious-nexus).

### Excluding documents from the explorer

I selectively stage changes and commit them to the git repository. Naturally, all of these notes are public. However, some notes aren’t too useful to the general public or are incomplete. But I don’t want to exclude those notes from being published. So instead, I hide them from the explorer.

I use a variation of [this guide](https://noxz.tech/articles/explorer_filters_in_quartz) for creating the explorer filter. It’s different in that I use the `draft` field instead of that guide’s use of `explorerexclude`.

- [ ] Document what was changed. Potentially I’ll have to do this again.

### Automation

- I run `pm2 start "pnpm exec quartz build --watch" --name quartz`
- I have a cron job to `git pull` in 2-hour intervals.
- It doesn’t work. uh...

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

This potentially enables a more [[social]] aspect of linking. I can link to *the [[Agora]]*. It'll be a 404 page, sure. But folks that are interested in the *Agora* typically write about it, so there is bound to be enough coverage. I can also be rather lax when linking to [[concepts]], even if it's something I wouldn't [[write]] about. The *spacious nexus* currently isn't part of that *Agora*, but I’m considering joining. I see many reasons why I should.

It creates an interesting opportunity for connecting pages that don't exist. On one hand it's a page that doesn't exist on my graph, but it's also a page that exists elsewhere and has [[connections]] within the vast *Agora*.
