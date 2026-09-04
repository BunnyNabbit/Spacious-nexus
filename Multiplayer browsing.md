---
draft: true
---
thought: To see other users on a web page for [[Fun|fun]].

- *[[cursorthing]]*. It does the cursor thing.
  - https://addons.mozilla.org/en-US/firefox/addon/cursorthing/
  - Anonymous by design, appears to hash website URLs and domains.
    - For gamification, the privacy policy states that full URLs may be submitted for anti-abuse purposes.[^cursorthing-xp]
    - When visiting a page:
      - The domain is “stat’d,”, returning only a value determining if the extension is forcefully disabled there. <span title="but i guess you can just dance around the 'PayPal' front page.">This appears to only apply on sensitive sites like *Fur Affinity*</span>.<!-- See [[cursorthing blocked sites]].--> This check never happens if the domain was blocked by the user instead.
      - If not blocked, the extension opens a WebSocket with the ‘room’ ID being a hashed full URL.
      - Once connected, cursor position is not transmitted unless another cursor is in the same room.
  - As of [[2026-09-01]], currently only available for *[[Firefox]]*. *[[Google Chrome]]* extension appears to be under review.
  - [ ] would want to recommend to friends but the backend server is a bit funky atm.

[^cursorthing-xp]: *“In some cases — for example, to verify that a claimed visit is legitimate — our server may issue a challenge requesting the full URL from your extension. URLs transmitted during a challenge are used solely for verification and are not stored.”* - https://cursorthing.com/privacy
