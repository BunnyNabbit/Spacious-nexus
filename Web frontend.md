---
draft: true
---
It’s something that I think that I know but really don’t. I’m more of a backend kind of developer, but I feel it’s pretty necessary to learn about frontend development.

I once used vanilla *[[JavaScript]]*, *CSS* and *HTML* for building sites, but I figured that this doesn’t scale well. Bundling and ES modules do help, but anything too involved with UI interactions tends to fall apart. I’ve heard about web components, but I am yet to assess the usefulness of it.

- *[atp-label-indexer](https://github.com/BunnyNabbit/atp-label-indexer)*, *[rayleigh-labels](https://github.com/BunnyNabbit/rayleigh-labels)*
  - Uses *[[Webpack]]* for bundling.
  - *JavaScript*.
  - Controller classes for managing interactive elements.
  - No server rendering. Single page application.
* *[Voxel Telephone](https://github.com/BunnyNabbit/voxel-telephone)* (Web interface)
  * Uses *Astro* for its web framework.
  * Mixed. *TypeScript*, *JavaScript* and JSX syntax.
  * No client-sided logic.

I’m figuring that most frontend code is to be bundled anyway. I should use *[[TypeScript]]* for future work.

For dynamic/static site generation, I use *[[Astro]]*. Not too certain about using it with client-side logic. Otherwise, I find projects to be perfectly maintainable with it. But for anything that is heavy on client-sided logic, I’m still uncertain about what to use.
