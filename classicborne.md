---
draft: true
---
[*classicborne*](https://classicborne.bunnynabbit.com/) is a *[[Minecraft classic]]* server library. Its goal is to simplify creation of games for modern clients using Classic Protocol Extension. Its software design pattern relies heavily on [[Object-orientated programming|object-orientated programming]]. 

- *[[npm]]*: [*classicborne*](https://npmx.dev/package/classicborne).

A notable feature is how *classicborne* handles persistence of levels. The [ChangeRecord](https://classicborne.bunnynabbit.com/classes/ChangeRecord.html) class uses an [[event sourcing]] pattern. Levels only keep track of the blocks placed and commands issued for their on-disk representation. To restore a level, the log of recorded operations has to be replayed. For extensive histories, checkpoints of the level’s state are created in a *[[SQLite]]* database.  
The original motivation for this was to provide replays of the building processes in *Voxel Telephone*. But the same system can be used to support an undo system, as operations can be undone simply by trimming the log. Potentially, this could be useful for moderation. Though, the log framing format doesn’t distinguish players [which is a problem in of itself](https://github.com/BunnyNabbit/classicborne/issues/33).

Unlike *MCGalaxy*, *classicborne* doesn’t aim to include a readily available environment suitable for a freebuild server. It is intended to be built and expanded upon. Extending *classicborne* is usually to subclass from the library’s classes. In fact, most of *classicborne* originated as part of refactoring *[[Voxel Telephone]]*.

What makes a good library? I believe that to be demonstrated by its uses. So far, there are some notable issues that weren’t apparent in *Voxel Telephone* but are when starting a new project. Issues include:

- Authentication is to be implemented by subclasses. This means projects using *classicborne* has to reimplement key security features when subclassing the BasePlayer class.
- potentially more. Will need to start a smaller project and see what other pain points exist.
- BaseHeartbeat is tuned for *[[ClassiCube]]*. This notably includes resend times tuned for modern flakey internet infrastructure, which may not exist in other platforms.
  - If the heartbeat format or transport layer is different, it may be difficult to use BaseHeartbeat for that.
- [Issues · BunnyNabbit/classicborne](https://github.com/BunnyNabbit/classicborne/issues)

On the subject of maintainability, I think that putting my work as open source libraries has helped me understand how important it is. *[[sepragame]]* hasn’t been maintainable, I really dislike my old projects’ practices now.
