---
draft: true
---
thought: To see other users on a web page for [[Fun|fun]].

- *[[cursorthing]]*. Share cursor position with other users.
  - https://addons.mozilla.org/en-US/firefox/addon/cursorthing/
  - Anonymous to other extension users, not specifically the service. Hashes website URLs and domains. Its privacy policy is pretty clear on what it does. I looked through the minified sources, its behavior matches up well with its policy. This is my privacy audit as of v1.2.
    - Hashes use a SHA-512 digest and truncates it to its first 6 bytes (æffectively 48-bit). Data is salted with a value unique to that type of field.
      - Domain: `98#gf2\*3zz + domain name`.
        - Removes leading `www.`.
      - Normalized full URL: `0f)2r!4 + path`.
        - Does not include protocol and fragments.
        - Only two query string parameters are preserved: `q` and `v`. Remaining parameters are sorted.
        - Various quirks, such as removing one (1) trailing slash.
    - For gamification, the privacy policy states that full URLs may be submitted for anti-abuse purposes.[^cursorthing-xp]
    - When visiting a page:
      - The domain hash is “stat’d,”, returning only a value determining if the extension is forcefully disabled there. <span title="but i guess you can just dance around the 'PayPal' front page.">This only applies on sensitive sites like *Fur Affinity*</span>.<!-- See [[cursorthing blocked sites]].--> This check never happens if the domain was blocked by the user.
      - If not blocked, the extension opens a WebSocket with the ‘room’ ID containing two significant hashes: the domain and full URL.
      - Once connected, cursor position is not transmitted unless another cursor is in the same room.
        - The socket is alive for the time the tab is in focus.
  - As of [[2026-09-01]], currently only available for *[[Firefox]]*. *[[Google Chrome]]* extension appears to be under review.
  - Renders a 24x24 canvas on 15 FPS for the local cursor. Haven’t seen any performance issues with it.
    - The cursor can technically be animated, there are unused functions for controling its gaze. Though, it remains mostly static.
- *Moonbounce*.
  - skipping. Intends to use sponsors.
- *we were online*.
  - Data collection is very intentional. But why is it sharing my cursor’s computed style to a public firehose??
  - Runs hot on my tablet. Skipping for that alone.

[^cursorthing-xp]: *“In some cases — for example, to verify that a claimed visit is legitimate — our server may issue a challenge requesting the full URL from your extension. URLs transmitted during a challenge are used solely for verification and are not stored.”* - https://cursorthing.com/privacy
