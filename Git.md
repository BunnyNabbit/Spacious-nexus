---
draft: true
---
*Git* is a [[Version control system|version control system]].

## Clients

For a standalone client, I use *[Desktop Plus](https://github.com/desktop-plus/desktop-plus)*. If I’m using *[[Visual Studio Code]]*, I use its built-in version control panel. I rarely use the *git* CLI directly, reserving it mostly for advanced operations.

## Hosting

- *[[GitHub]]*.
- ~~*[[Tangled]]*~~. Considering only as a mirror of lately.
- [ ] *[[Codeberg]]*. <!--considering moving there as it pissed off a bunch of folks who only find code as a means to an end. Rewrite this comment to be rational, Gronk. -->

## Advanced operations

### Fast-forward without checking out files

The *[[SilverBullet]]* space is always in sync. But the *Git* repository is not and will have uncommitted changes. A regular merge is not sufficient in my workflow, and stashing changes is prime for breakage.

```powershell
git symbolic-ref HEAD refs/heads/null-branch
git fetch origin main:main
git symbolic-ref HEAD refs/heads/main
```

This stages changes for some reason? Wouldn’t know why, so I just unstage them separately. This allows me to push changes on two separate devices.
