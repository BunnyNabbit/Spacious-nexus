---
draft: true
---
[npm](https://www.npmjs.com/) is a package registry. Not strictly for [[JavaScript]], but it is mostly for the JavaScript ecosystem.

## JavaScript package checklist

A personal checklist I use for my packages.

- Reuse a [package.json](https://github.com/BunnyNabbit/celaria-formats/blob/b1047394281c66c457805afeac5b275a0575f206/package.json).
- [[TypeScript]].
  - Setup [tsconfig.json](https://github.com/BunnyNabbit/celaria-formats/blob/main/tsconfig.json).
  - Emit type declarations.
- Package release.
  - [Use `release-it` Actions workflow](https://github.com/BunnyNabbit/celaria-formats/blob/b1047394281c66c457805afeac5b275a0575f206/.github/workflows/release.yml).  
    The workflow expects that the `tsconfig.json` is set to emit type declarations.
- Documentation.
  - [Use TypeDoc Actions workflow](https://github.com/BunnyNabbit/celaria-formats/blob/b1047394281c66c457805afeac5b275a0575f206/.github/workflows/docs.yml).
