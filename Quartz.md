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
