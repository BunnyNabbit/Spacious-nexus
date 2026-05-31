---
draft: true
---
## Why not *TypeScript*?

This is what I initially thought.

- **Higher barrier to entry**.  
  To a newcomer who might not know what strict typing is, *TypeScript* could feel confusing. As is the added amount of unfamiliar syntax or typing conventions.
- **Adds a build step**.  
  Before backend runtimes were able to use type stripping, *TypeScript* was usually executed after a compilation step. Though, for the frontend, a build step is always necessary.

I think convenience is to tell users to just run `npm install`. That’s just one common command when working with the *[[JavaScript]]* ecosystem.

## Why *TypeScript*?

*TypeScript* is pretty necessary for maintenance and reducing guess work.

- Provides documentation.
- Reliable editor hints.
- Enforces restraint.

As *JavaScript* is dynamically typed. Putting some guardrails is only a natural step to better maintenance.

### How I use it

I figured that to get the least number of problems when introducing *TypeScript* to a project, I continued to use *JavaScript* with added *JSDoc* comments. I only use *TypeScript* files for defining complex types. This maintains having no build step.

An issue with this may be verbosity. Since the *JSDoc* tags are to be in multiple lines, comments can be massive. Solutions to this are in editors:

- [*JSDoc Folder*](https://marketplace.visualstudio.com/items?itemName=aydgn.jsdoc-folder). An extension for *[[Visual Studio Code]]* to automatically collapse documentation comments.
- [[Explicit folding]].

An example of a *JavaScript*-only project using *TypeScript* is [*celaria-formats*](https://github.com/BunnyNabbit/celaria-formats).  
- [`tsconfig.json`](https://github.com/BunnyNabbit/celaria-formats/blob/main/tsconfig.json).
  - Only checks *JavaScript* if explicitly marked for type checking using `// @ts-check`.
  - Emits type declarations but is not used for compiling.
- Documentation generated from *TypeDoc*.
- [Release workflow](https://github.com/BunnyNabbit/celaria-formats/blob/main/.github/workflows/release.yml) emits type declarations for better support with *TypeScript*-based projects.
- [Complex types defined in *TypeScript* files](https://github.com/BunnyNabbit/celaria-formats/blob/b1047394281c66c457805afeac5b275a0575f206/types/data.mts#L1). *JavaScript* imports these using the [@import](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import) tag. *TypeScript* is never executed.
