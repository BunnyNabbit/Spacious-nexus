---
description: "Krazycanvas was a Flash Player game in which players played on an infinite canvas they draw on. It remained unplayable until later with the efforts of the Flashpoint Archive community."
cover: "Cards/Krazycanvas.webp"
title: "Reviving Krazycanvas"
---
> Believe me. This canvas does get *krazy*.

An *[[Adobe Flash]]* [[Games|game]] in which an infinite canvas is the playable area. It ran until the expiration of *Flash* after 2020. By then, the game and its canvas would’ve been forgotten.

I played this game a couple times throughout its years. It was a fun curiosity. There wasn’t too much gameplay, the player had to navigate a network of doors, find crystals to unlock those doors until... they reach a door. I forgot what exactly happens, but I don’t think it was anything particularly exciting.

The canvas was the interesting part. As it was just anything an unregistered user can draw on, there was the occasional scribbles for the desperate player to foot on. And maybe a few artwork that folks managed to make with its limited tooling. It’s rather interesting that the game made some attempt to incentivize interesting backgrounds. It did this with the clouds. A random part of the canvas would be used as a hint for where a hidden crystal is.

But as *Flash* was to expire after 2020, I wasn’t too sure of what to do about it. I opened up the browser’s developer tools, navigated to the network tab and began moving around the canvas. When I thought I had traversed enough of the canvas, I exported a .har file. I wasn’t sure what to do with it. But I did know that in some form, there is culture preserved. Rather predictably, the server for the game has since been offline.

## A game isn’t lost so easily

I mostly forgot about the krazycanvas.com.har file I made. I knew nothing about *Flash* development. or reverse engineering for that matter.

It was until I stumbled upon the *[[Flashpoint Archive]]*. All my past favorites were there. Except for *Krazycanvas*. I took a look at their [curation guides](https://flashpointarchive.org/datahub/Curation_Tutorial), and it seemed... trivial? I made an attempt that I thought was bound to go nowhere. I prepared a basic curation for *Krazycanvas*, just the `.swf` file and it loaded. It didn’t work; I couldn’t get past the username screen. It seemed I would’ve needed to reimplement the backend. Again, *Flashpoint* is a developed project at this point, [they had this handled](https://flashpointarchive.org/datahub/Server_Scripting). For anything dynamic, *Flashpoint*‘s router can execute *[[PHP]]* code.

The browser can be used to import the .har file and inspect it. From there, I can study each of the network requests. All communication was hitting one endpoint. It used XML for communication.

![The network tab showing an imported HTTP archive file. On the left is a list of requests, mostly hitting the “command.php” endpoint. On the right is a response preview, displaying the payload of the “login” request.](https://notes.bunnynabbit.com/media/Imported-Krazycanvas-network-requests.webp)

The `login` command is rather interesting. Players were asked to enter a name. The exact reason for this isn’t known. Either way, returning a response just works. In fact, the game fully works now. It just doesn’t persist changes.

```xml
<loginresponse><status>OK</status><username>bunny</username><savedata/></loginresponse>
```

When the player moved around, the client requested “units” of the viewport.

```xml
<getunits><boundingbox><x>-600</x><y>-400</y><width>1200</width><height>800</height></boundingbox><hasunits/></getunits>
```

The server would respond back with those units. Each unit contained the color, collision mask and a “time” value, presumably for synchronization.

```xml
<getunitsresponse>
  <unit>
    <x>400</x>
    <y>-800</y>
    <png>iVBOR...</png>
    <mask>iVBOR...</mask>
    <time>9</time>
  </unit>
</getunitsresponse>
```

From this response alone, it’s trivial to create a tool to read the .har file and dump the `png`/`mask` data into a directory.

![A grid of extracted images displayed in File Explorer.](https://notes.bunnynabbit.com/media/Extracted-Krazycanvas-units.webp)

Then, I reimplemented the backend portion for that. Now the canvas can be seen. Though, I think my implementation differs slightly from what was used.

![The spawn area of Krazycanvas. The player is situated in a blue, bricky room with strands of blue grass on the floor.](https://notes.bunnynabbit.com/media/Krazycanvas-spawn.webp)

Lastly, the player is able to draw on the canvas. Of course, those changes must be saved.

```xml
<saveunits>
  <unit>
    <x>-800</x>
    <y>-500</y>
    <png>iVBOR...</png>
    <mask>iVBOR...</mask>
  </unit>
</saveunits>
```

There are some other weird requests like this `saveplayer` command. There wasn’t any player data persistence of the sorts, so I dummied this request on my backend implementation.

```xml
<saveplayer><username>bunny</username><doornum>0</doornum><crystals>1</crystals></saveplayer>
```

Not a single byte of the `.swf` file had to be altered. I didn’t even decompile the game.

## Submitting the curation

The *Flashpoint Archive* community was heavily focused on ensuring that *Flash* media didn’t get lost. They couldn’t waste time to verify and accept curations as they came. And so, this has created a rather large backlog of curations for the curators to check. It did take a while of around a year for my curation to be finally added to the *Flashpoint Archive*.

## What now?

The result is now a singleplayer game that comes preloaded with an archived collaborative canvas. A player could start totally anew and draw on their own canvas. This is what I did.

![Aon Langton, down on all fours, is perching himself off a grassy cliff. The player character is standing on the dragon’s back. A rope is dangling off on the opposite end of the platform.](https://notes.bunnynabbit.com/media/Aon-Langton-perched-on-a-cliff.webp)

I haven’t been tending to my canvas too often. Mainly because the drawing tools are purposefully limited, requiring the player to collect rain drops between drawing something big. I do find it fun. Even though a detailed canvas makes it easy to find crystals, it also makes it harder to avoid enemies. More creatures are spawned depending on the number of crystals the player is currently holding. It’s strangely motivating despite the game’s various flaws.

In retrospect, I could’ve automated the `getunits` request. But I wasn’t too sure of how to achieve that at the time. Seems rather trivial now. Oh well, 1p is better than 0p.
