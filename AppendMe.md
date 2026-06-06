---
draft: true
---
*[AppendMe](https://bunnynabbit.com/app/endme/)* is a form of blogging I sometimes do. It functions as an append-only web log, only supporting redactions as a form of editing. Registrations are invite-only and may stay that way. Most of its registered users are my friends. Though, I am likely to provide an invite key to anyone as long as they agree to the [community standards](https://bunnynabbit.com/app/endme/tos.txt).

## Accounts

The editing space of an account is called a “world.”.

- [bunnynabbit](https://bunnynabbit.com/app/endme/?bunnynabbit) - Personal account.
- [bunnynabbitmusic](https://bunnynabbit.com/app/endme/?bunnynabbitmusic) - Account for listing music.
  I think I wanted to create a web application to display its text in an interactive way. Never got around doing that.

Lately, I haven’t been using *AppendMe* too much. Instead, writing on the *spacious nexus* or *[[Bluesky]]*

Because *AppendMe* only provides an append-only plain-text field, users have to delimit appends themselves. I delimited my appends by using a timestamp i.e.: `6:31 PM 6/6/2026`. I used *Window*’s notepad for authoring appends and it has a feature to generate a timestamp.

*AppendMe* accounts were used for authentication outside *AppendMe*. I no longer do this as it isn’t a standard form of authentication. Instead, I plan to use *[[ATProto]]* accounts.

## Internals

It’s currently not open source. That’s because it was created in a time that I thought I didn’t need *[[Git]]*. As a result, it’s not very portable and its codebase relies on a specific undocumented setup. I’ve made some attempt at cleaning this up and preparing it to be open sourced, but it’s not much of a priority.

### Chunks

“Chunks” as *AppendMe* calls it are the raw text files that it stores. An append modifies the current chunk or creates a new chunk if the previous chunk is long enough.

### Redacts

Redacts are stored in the database. They do not apply over chunks and are used in a non-destructive manner. Redacts are applied on chunk requests and replace æffected characters with a character in the private use space. *AppendMe* doesn’t have a font to render this special character.

*AppendMe* does not provide a self-serviced method of applying redacts. However, redacts can be applied on request.

Deletions are not implemented because character counting is used for indexing lines. i.e.: [bunnynabbit\#39617](https://bunnynabbit.com/app/endme/?bunnynabbit#39617).
