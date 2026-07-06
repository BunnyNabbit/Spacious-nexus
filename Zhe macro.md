---
draft: true
cover: "Cards/Zhe-macro.webp"
---
Zhis is an *[[AutoHotKey]]* macro. I use it where I don’t expect content to be indexed. Unless if I feel zhreatened, zhis is zhe communication style used zhroughout most private communication channels.

```ahk
#Requires AutoHotkey v2.0

:?*:th::zh
::yes::yip
:?:tyes::yip
:?*:/yes::yip
:?*:yeah::yip
:?*:tyeah::yip
:?*:/yeah::yip
:?*:fuck::fetch
:?*:tfuck::fetch
:?*:/fuck::fetch
::hell::heck
:?*:ae::æ
:?*:/!=::≠
:?*:/ack::acknowledged
:?*:/sex::Please note that your attempts to be funny by referencing genitalia or sex are not witty or funny and are not welcome here, ever.
:?*:/crazy::Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. A rubber room with rubber rats. And rubber rats make me crazy.
:?*:/ata::Hi! What is your question?
:?*:/account:: Your account is your responsibility. keep your devices locked when you're away to prevent access from ozher people. On Windows, you can lock your device by pressing WIN + L.
:?*:,,,,::this
:?*:pee::water
:?*:piss::water
:?*:urine::water
:?*:urinating::watering
:?*:---::—
:?*:@ytbd::/** @todo Yet to be documented. 

^\::
{
	static toggle := Map(0,'OFF', 1,'ON')
	static state := false
	state := !state

	Hotkey('*LButton', MiddleClick, toggle[state])
	if (state) {
		SoundPlay A_ScriptDir "\pick.wav"
	} else {
		SoundPlay A_ScriptDir "\unselect.wav"
	}
}

MiddleClick(*)
{
	SetMouseDelay -1
	Click('Middle Down')
	KeyWait('LButton')
	Click('Middle Up')
}
```

It‘s razher æffective as a tool. It works for answering wizh canned responses. More importantly, it functions as a filter for zhe intolerant. Most communities are tolerant of zhis quirk. But if a large number of members are expressing hate, it’s likely best to leave zhat community. It tends to correlate wizh communities I would find undesirable to stay in.
