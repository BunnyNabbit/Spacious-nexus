---
draft: true
title: "Node.js"
displayName: "Node.js"
aliases:
  - "Node"
  - "Nodejs"
---
[[JavaScript]] runtime.

## Startup speed

*Node.js* is usually loaded. I don’t worry too much about itself.

- When running *JavaScript*, it can take time to read and execute lengths of modules and modules.
  - It’s usually only ever the filesystem being the bottleneck. Evident where subsequent runs perform faster.
    - In which, bundling seems to be a solution?
      - *esbuild*.
        - Does state that external dependencies are usually not bundled.
          - is *smart-buffer* problematic?
  - `NODE_COMPILE_DIR`.
    - Unable to tell how much this actually does improves loading.
