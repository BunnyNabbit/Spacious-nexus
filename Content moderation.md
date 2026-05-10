A necessary evil.

Moderation is a position that some people may find power in. I dislike that. It’s something that must be given extra thought. Not for someone to recklessly abuse. The primary goal is to enforce rules, usually to maintain peace of the environment. I do believe that moderation could be used to curate content, instead of just disallowing content. When building moderation systems, I always think about how a moderator could tag certain forms of content. Naturally, this creates data useful for automated systems.

At large scales, it could be necessary to put machine learning into the mix. This isn’t something I’ve dabbled too much in, but I have tried it to some success.

## *ATProto* / *Bluesky*

*Bluesky* (and thus *AT Protocol*) provides two flavors of moderation: takedowns and labels. In an ideal decentralized network, each PDS would be moderated by its own moderation service. Well behaved networks are to only focus on moderating their own users with other services rarely ever having to apply relay takedowns for accounts in other networks. There are also labels. Labels are funny, I think. A label could be put on any record for any reason. For the type of person who likes categorizing things for the sake of it, this seems wonderful. Who is that, anyways? Labels could range from standard stuff like labeling adult content to more novel uses like hiding movie spoilers. How objective are labels applied is entirely irrelevant. Though, predictable labeling rules are preferred by users. For a public network, checking out moderation activity is interesting and I’ve attempted to [shine a light there](https://labels.bunnynabbit.com/).

I prefer to not say that I moderate the network surrounding *ATProto*. Though, what I deploy is standard for content moderation. However, I remain strict in not labeling against behaviors whenever possible. This is tricky! I try to be kink positive, for example. I run a labeler for *Bluesky* for labeling fetish content[^1]. Although I provide labels to hide the content, I also provide ways to see more of it. I think this was the right choice, given that this normally doesn’t go so well for those that tried before me.

*Bluesky* is vast. It’s an entire social network that can be accessed by a public firehose. A lot of data will need to be handled, especially of images.

- [ ] write about how I fine-tuned a classification model.

I mostly label video and images. For handling large queues, I developed *[Rayleigh Moderation](https://github.com/BunnyNabbit/rayleigh-labels)*. It’s mostly developed for my needs.

[^1]: This isn’t something I’ll link here since it does provide feeds from its labels. The feeds of which may not have content labeled appropriately by Bluesky or by the posts’ authors. Often, this is because the auto labeler misses, or because it’s non-sexual.

## Handling exposure

This isn’t something I’m too familiar on despite my constant exposure to sexual content. For *ATProto*, I rely on the Bluesky moderation service’s ability to take down repositories or to appropriately label content.

For sexual content specifically, I don’t think there is a way to handle it while maintaining reasonable pace for handling ~2,000-10,000 posts a day. I’m [[About my sexuality|asexual]]; unsure if that’s necessarily good or bad. Though, I tend to embrace fetishes as a form of motivation where acceptable.

I’ve seen some wild stuff on *Roblox*. No matter how competent each platform’s moderation systems are, there will be people that will try to bypass it.
