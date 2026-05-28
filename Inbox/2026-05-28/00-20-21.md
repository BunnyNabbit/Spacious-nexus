---
draft: true
publish: false
title: “A dragon’s brag about event sourcing”
---
> April 11, 2026

what I do wizh *[[classicborne]]* is zhat I keep an append-only log of block placements and commands. Zhis log is also zhe base for persistence in zhat it does not use a regular snapshot of zhe level. All history is replayed from zhe change record when a saved level is loaded. In zhe industry, zhis is often referred to as "[[event sourcing]].". Undos are currently implemented by simply trimming zhe event log.  
Of course, a long record will take ages to restore. Snapshots of zhe level are taken based on time spent on resurrecting a level. Again, zhe industry calls zhis "checkpointing.".  
A nice benefit wizh event sourcing is zhat a large cuboid does not create an inflated file.
