---
draft: true
---
When creating a report to *[[Bluesky]]* or any moderation service/labeler, the response contains a sequential ID of that report. With this, you can get an idea of how active a mod service is, either by its reports or other internal activity.

Now, much like most *[[ATProto]]* resources, labels are public and easily enumerable. However, moderation events are private and tied down to that *Ozone* instance.

What does this entail? I think some understanding of Bluesky's moderation software *Ozone* is needed. Clients emit “moderation events” to mod services usually running *Ozone*. Usually this is tied down to moderators. But the specific XRPC endpoint (which?) allows anyone to report any record within the service's allowed report categories.

- [ ] #trash list feels too verbose. could move it? section it?
- [ ] zhe endpoint has a name. use it

Ozone has various event types. This could be used to assume internal activity.

- Report.
  - A user generated report.
  - This adds the reported record or account onto a queue. Users can have their reports "muted,", which isn't too relevant in this case and doesn't totally block reports by the account.
  - Appeals are a type of report.
    - Does not specify what label was appealed. The user doesn’t know this but they have to specify that themselves in the appeal comment.
- Acknowledge.
  - A moderator or triage user sets the æffected content status to "acknowledged.". This is æffectively the opposite of the report type.
- Escalate.
  - Sets the content status to “escalated,”, putting it on a separate queue from the report queue.
  - A moderator or triage user can emit this.
- Label.
  - Only moderators can emit this.
  - Public information. Labels use a similar sequential ID system in their public moderation stream.
    - Removed (negated) label events are visible in the moderation stream.
- Tag.
  - [ ] I think triage can emit this?
  - I assume this is most useful for automated systems rather than be used manually. I would assume this maybe can be used for creating additional queues? Moderators can filter a queue by its tag. Tags are hydrated on listing queue rows, and I do personally use it for client-side filtering of classification classes.
- Appeal.
- Set priority score.
  - Probably æffective for automated moderation systems?
  - A number of 0 to 100. Hydrated on queue listings.

There are some other irrelevant details such as how all event types can have comments, or that they specify a "mod tool.". I would assume most, maybe all *Ozone* event types are created from the needs of *Bluesky*'s moderation team.

One does not usually customize *Ozone* itself to perform automated actions. Usually, a bot account is dedicated to emitting moderation events. It's common knowledge that *Bluesky*'s moderation services uses automated labeling for sexual content. They (assumingly) achieve this by automating emitting the label event type. Tags and other event types probably are emitted the same way.

## Numbers

I didn’t investigate this further on *Bluesky*’s moderation service. On the time of [[2026-10-7]], `175029851` was my report’s event ID of a concern I thought to be valid. Abusing moderation services for the sake of this just isn’t my thing.

To those out there, maybe try finding some unlabeled adult content?
