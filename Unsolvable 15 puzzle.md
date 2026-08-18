---
draft: true
---
An unsolvable [[15 puzzle]] is still solvable, just not in the traditional sense.

## Solutions

- Move the pieces around.
- Patch the win condition code to always return `true`.
- Remove the walls around the board. (Requires special handling of more than one blank space.)
- Allow non-standard moves.
  - Swap pieces.
  - Diagonal moves.
  - Allow pieces to occupy one space.
- Fix the shuffling code.

It’s probably more interesting to see how the solutions would work, than listing a few possible solutions that might work in theory.
