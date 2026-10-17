---
draft: true
publish: false
---
## Why move?

To rely on open source infrastructure. But mainly because of how generative <abbr title="artificial intelligence">AI</abbr> features are being pushed to *[[GitHub]]*’s user base. That got me hard, and I have since taken a stronger view on code quality. I’d rather not normalize the use of <abbr title="large language models">LLMs</abbr>, especially for inexperienced programmers.

The idea is also that it’s something I should’ve done from the beginning. *Forgejo* has decent feature parity with *GitHub*. Not too late, I just have 30 or more repositories to move over.

*Forgejo* being self-hosted software, I could eventually migrate over to a self-hosted instance. However, my servers are constantly under storage pressure, and *[[Codeberg]]* states to provide as much resources as reasonably possible for open source projects.[^codeberg-faq-limits] With my current projects, it’ll take me a while to hit the default quotas[^codeberg-default-quotas], but I’d like to save myself the headaches when it comes to hosting an internet-facing service.

[^codeberg-faq-limits]: “Codeberg strives to provide **everyone with the necessary resources** to develop high quality Free/Libre software.” - [*Codeberg* | Frequently Asked Questions](https://docs.codeberg.org/getting-started/faq/#what-is-the-size-limit-for-my-repositories%3F-are-there-quotas-for-packages%2C-lfs%2C-...%3F)
[^codeberg-default-quotas]: 750 MiB for *Git*. 1.5 GiB for assets/*Git LFS*.

Is being on *Codeberg* a status symbol? I wouldn’t say it is. *Codeberg* isn’t completely anti-AI and allows some assistance. This is alone isn’t my motivation.

## Performing migrations

*Forgejo* provides the ability to migrate a repository from various code forges, including *GitHub*.

- [ ] git lfs and history cleanup
- [ ] multiple remotes
- [ ] git client interactions, why it very occasionally keeps signing me out

## Dual forging

Both forges have neat little features available in one but not the other.

- *GitHub* has its massive code search index. It’s pretty well known.
- *Forgejo* has its repository avatars.

Keeping a mirror to GitHub will preserve its reach. Do I care about my two stars? Maybe. But continuous integration turned out to be a bit complicated.

### Continuous integration

*Forgejo* provides [*Forgejo Actions*](https://forgejo.org/docs/latest/user/actions/reference/). Coming from *GitHub*, this is similar to *GitHub Actions*.

Most of my projects are backend *JavaScript* libraries ran on *Node.js*. For publishing, I decided not to, and continue to use GitHub’s CI. This is because I publish to *npm* with provenance. I could publish without provenance, but then that downgrades the security, which will alert users when upgrading. This is something that could be addressed later. See [sigstore/fulcio\#2442](https://github.com/sigstore/fulcio/issues/2442).

To maintain two different workflows, just create a `.forgejo` directory. *Forgejo* will otherwise use `.github` if it exists. For most of my repositories, I just copy the relevant workflow files and set it to run on *Codeberg*’s `codeberg-small` runner. The only significant difference is that I remove the step that uploads coverage to *Coveralls*.

```diff
name: Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
+    runs-on: codeberg-small
-    runs-on: ubuntu-latest
-    permissions:
-      contents: read

    steps:
      - name: Checkout code
        uses: actions/checkout@v4
@@ ...
      - name: Run tests
        run: pnpm test
        working-directory: ./tests
-        
-      - name: Coveralls
-        uses: coverallsapp/github-action@v2
-        with:
-          fail-on-error: false
```

### Issue tracking

*oh boy.*

*Forgejo* is a bit stuck in the past if you’re still used to *GitHub*’s issue tracker. Sub-issues? Look back on task-lists, the preceding solution to sub-issues that GitHub encouraged users to migrate from.

For most of my projects, either this wasn’t a problem, or I could easily convert my sub-issues back into task-lists. But I once opened more than 100 issues in one repository. That’s unwieldy. There is a point where I give up and leave the issue tracking to GitHub.

*Codeberg*’s anti-spam measures are a bit annoying to deal with. Create more than two issues with identical titles? Don’t. My workaround was to open issues first on the *GitHub* side and then migrate the repository with those.
